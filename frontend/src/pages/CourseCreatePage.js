import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GiNotebook } from "react-icons/gi"
import { RiFileAddLine } from "react-icons/ri";


export const CourseCreatePage = () => {

    const [courseNumber, setCourseNumber] = useState("CS-");
    const [title, setTitle] = useState("");
    const [credits, setCredits] = useState("0");
    const [date, setDate] = useState();

    const navigate = useNavigate()

    const addCourse = async () => {

        const newCourse = {courseNumber, title, credits, date};

        const response = await fetch("/courseRegistry", {
            method: "POST", 
            body: JSON.stringify(newCourse), 
            headers: {
                "Content-Type": "application/json",
            },
        });

        if(response.status === 201){
            alert("The course has successfully added to the registry.")
        } else {
            alert("The course could not be added because of a missing input.")
        }

        navigate("/courseRegistry");
    };

    return (
    
    <>

        <h2>My Completed Courses Registry <i><GiNotebook/></i></h2>

        <article>
            <p>Add the courses you have completed at Oregon State University.</p>

            <table className="teamMembersTable">
                <caption>Add a completed course to the registry.</caption>

                <thead className="courseHeadAdd"> 
                    <tr>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Course</th>
                        <th scope="col">Course Name</th>
                        <th scope="col">Credits</th>
                        <th scope="col">Completed</th>
                        <th scope="col" className="courses-nav"><Link to="../add-course"><i><RiFileAddLine title="Add Course" className="courseIconEnlarge"/></i></Link></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><label for="courseNum" class="required">
                            <input 
                            type="text" 
                            autocomplete="off"
                            value={courseNumber} 
                            id="courseNum" 
                            name="courseNumber"
                            onChange={e => setCourseNumber(e.target.value)} required
                            autoFocus
                            />
                            </label></td>

                        <td className="courseName"><label for="courseName" class="required">
                            <input 
                            type="text" 
                            autocomplete="off"
                            value={title} 
                            id="courseName" 
                            name="courseName"
                            onChange={e => setTitle(e.target.value)} required
                            autoFocus
                            />
                            </label></td>

                        <td><label for="credits" class="required">
                            <input 
                            type="number" 
                            value={credits}
                            min="0"
                            max="10"
                            id="credits" 
                            name="credits"
                            onChange={e => setCredits(e.target.value)} required
                            autoFocus
                            />
                            </label></td>

                        <td><label for="date" class="required">
                            <input 
                            type="date" 
                            value={date} 
                            id="date" 
                            name="date"
                            onChange={e => setDate(e.target.value)} required
                            pattern="\d{2}-\d{2}-\d{2}"
                            />
                            </label></td>
                        
                        <td><button onClick={addCourse}>Save</button></td>
                    </tr>

                </tbody>
            </table>
        </article>
    </>
    );
}

export default CourseCreatePage;