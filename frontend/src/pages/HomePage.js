import React from "react";

function HomePage() {
  return (

    <>
      <h2>My Web Development Portfolio Project</h2>

      <article id="about">
        <h3>About this Project</h3>

        <p>This project started as a simple and plain HTML file with some paragraphs which described topics initially learned in the course. </p>

        <p>Style was then added to the project using Cascading Stylesheets (CSS). With time, research, and some trial and error, 
          the desired look and design was achieved for this project, a fun yet simple, and elegant style. 
          The design includes the use of Google Fonts imports, react-icons, and a favicon from Icons8. 
          In addition, all images has been optimized for fast rendering and improved SEO.</p>

        <p>After the HTML and CSS were in order, JavaScript was introduced to this project in order to program the behavior of this web page, 
          in addition to Node which is a server-side technology that allows us to run JavaScript outside of the browser and Express which 
          is a Node.js framework for building RESTful APIs.</p>

        <p>Once the project was all in place the use of MERN was introduced to allow the use of a document database and to build a dynamic website. 
          MERN is a full stack that adheres to the classic three-tier architectural design, including a front-end display layer (React), 
          the application tier (Express and Node), and a database tier (MongoDB). Additionally, Mongoose was used to create a connection 
          between MongoDB and Node.</p>

        <p>I hope you enjoy your visit to my first website designed utilizing Full-Stack MERN!</p>

      </article>

    </>
  );
}

export default HomePage;