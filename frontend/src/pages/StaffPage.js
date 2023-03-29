import React, { useState } from "react";
import StaffRow from "../components/StaffRow.js"   

function StaffPage() {

  const [results, setData] = useState([]);
  const getData = () => {
    fetch("https://randomuser.me/api/?results=10")
    .then((dataCollected) => dataCollected.json())
    .then((dataCollected) => {
      setData(dataCollected.results);
    })
    
    .catch(() => {
      alert("Sorry, there was a problem. Looks like something went wrong! But don't worry - it can happen to the best of us. Please try again.")
    });
  };

  return (

    <>
      <h2>Meet Our Team</h2>

      <article className="teamMembersArticle">
        <p>We are a growing team of young professionals. We wear many hats and are devoted to assisting businesses in implementing software solutions.</p>

        <p>We communicate with a website that provides each individual's information. This data can be pulled via API call.</p>

        <label className="buttonLabel" for="getTeamMemberInfoFromTheServer">To view our team click</label>&nbsp;&nbsp;
        <button className="button" onClick={getData}
        name="getTeamMemberInfoFromTheServer" 
        value="Pull Team Member Info from the server"
        id="getTeamMemberInfoFromTheServer">here</button>
        
        <table className="teamMembersTable">
            <caption>Our Staff</caption>

            <thead>
                <tr>
                    <th>Staff</th>
                    <th>Name &amp; Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
            </thead>

            <tbody className="staff-nav" id="getOneRandomTeamMember">
                {
                results.map((teamMember, position) => 
                <StaffRow teamMember={teamMember} key={position} />)
                }
            </tbody>
        </table>

      </article>
    </>
  );
}

export default StaffPage;