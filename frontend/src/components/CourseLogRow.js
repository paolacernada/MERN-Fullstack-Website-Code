import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";


function CourseLogRow({ course, onDelete, onEdit }) {

    return (

        <tr>
            <td><i><RiDeleteBin2Line onClick={() => onDelete(course._id)} title="Are you sure you want to permanently remove this entry?"/></i></td>
            <td><i><AiOutlineEdit onClick={() => onEdit(course)} title="Would you like to edit this entry?"/></i></td>
            <td title="The number of the completed course."> {course.courseNumber}</td>
            <td title="The name of the completed course."> {course.title}</td>
            <td title="Numbers of credit hours earned."> {course.credits}</td>
            <td title="The date this course was completed."> {course.date.slice(0,10)}</td>
            <td></td>
        </tr>
    );
}

export default CourseLogRow;