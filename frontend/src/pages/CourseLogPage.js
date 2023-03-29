import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CourseLogTable from "../components/CourseLogTable";
import { GiNotebook } from "react-icons/gi"

function CourseLogPage({ setCourse }) {
    
    const navigate = useNavigate();

    const [courses, setCourses] = useState([]);

    const retrieveCourses = async () => {
        const response = await fetch ("/courseRegistry");
        const courses = await response.json();
        setCourses(courses);
    }

    const editCourse = async course => {
        setCourse(course);
        navigate("/edit-course");

    }

    const deleteCourse = async id => {

        const response = await fetch(`/courseRegistry/${id}`, { method: "DELETE"});

        if (response.status === 204) {
            const getResponse = await fetch("courseRegistry");
            const courses = await getResponse.json();
            setCourses(courses);
        } else {
            console.error(`Failed to delete the row with id: ${id} (status code = 204)`)
        }
    }

    useEffect(() => {
        retrieveCourses();
    }, []);

    return (

        <>

            <h2>Course Registry <i><GiNotebook/></i></h2>

            <article>
                <p>
                    By clicking the "add" icon, you can add a completed course to the table below. You may also edit or remove an existing entry.
                </p>

                <CourseLogTable
                    courses={courses}
                    onDelete={deleteCourse}
                    onEdit={editCourse}
                />
            </article>

        </>
    );
}

export default CourseLogPage;