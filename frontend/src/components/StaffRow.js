import React from "react";

function StaffRow({teamMember}) {
    return(

            <tr>

                <td>
                    <img src={teamMember.picture.thumbnail} alt="The profile picture of a random human collected from the website 'randomuser.me'"/>
                </td>

                <td>
                    <a href={"mailto:" + teamMember.email}>
                    {teamMember.name.first}&nbsp;
                    {teamMember.name.last}</a>
                </td>

                <td>
                    {teamMember.phone}
                </td>

                <td>
                    {teamMember.location.city}
                </td>

                <td>
                {teamMember.location.country}
                </td>

            </tr>
    );
}

export default StaffRow;