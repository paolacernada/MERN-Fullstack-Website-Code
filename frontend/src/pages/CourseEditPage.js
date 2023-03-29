import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GiNotebook } from "react-icons/gi"
import { RiFileAddLine } from "react-icons/ri";

export const CourseEditPage = ({ course }) => {

    const [courseNumber, setCourseNumber] = useState(course.courseNumber);
    const [title, setTitle] = useState(course.title);
    const [credits, setCredits] = useState(course.credits);
    const [date, setDate] = useState(course.date.slice(0,10));

    const navigate = useNavigate()

    const editCourse = async () => {


        const response = await fetch(`/courseRegistry/${course._id}`, {
            method: "PUT", 
            body: JSON.stringify({
                courseNumber: courseNumber, 
                title: title,
                credits: credits, 
                date: date 
            }), 
            headers: {
                "Content-Type": "application/json",
            },
        });

        if(response.status === 200){
            navigate("/courseRegistry");
            alert("The course has been successfully edited.")
        } else {
            navigate("/courseRegistry");
            alert("The course could not be updated because of a missing input.")
        }

    };

    return (
    
    <>

        <h2>My Completed Courses Registry <i><GiNotebook/></i></h2>

        <article>
            <p>Add the courses you have completed at Oregon State University.</p>

            <table className="teamMembersTable">
                <caption>Edit a course in the registry.</caption>

                <thead>
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
                        <td><label for="courseNum">
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

                        <td className="courseName"><label for="courseName">
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

                        <td><label for="credits">
                            <input type="number" 
                            value={credits} 
                            min="0"
                            max="10"
                            id="credits" 
                            name="credits"
                            onChange={e => setCredits(e.target.value)} required
                            autoFocus
                            />
                            </label></td>

                        <td><label for="date">
                            <input 
                            type="date" 
                            value={date} 
                            id="date" 
                            name="date"
                            onChange={e => setDate(e.target.value)} required
                            pattern="\d{2}-\d{2}-\d{2}"
                            />
                            </label></td>
                        
                        <td><button onClick={editCourse}>Save</button></td>
                    </tr>

                </tbody>
            </table>
        </article>
    </>
    );
}

export default CourseEditPage;