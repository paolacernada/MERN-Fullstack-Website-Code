import CourseLogRow from "./CourseLogRow";
import { Link } from "react-router-dom";
import { RiFileAddLine } from "react-icons/ri";


function CourseLogTable({ courses, onDelete, onEdit }) {

    return (
        <table className="teamMembersTable">
            <caption>Register the courses you have completed at OSU here.</caption>

            <thead className="courseHead">
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

            <tbody className="staff-nav">
                {courses.map((course, position) => <CourseLogRow 
                    course={course} 
                    key={position}
                    onDelete={onDelete}
                    onEdit={onEdit} />)}
            </tbody>
    </table>
    );
}

export default CourseLogTable