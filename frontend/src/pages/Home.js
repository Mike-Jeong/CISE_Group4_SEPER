import React from "react";
 
const Home = () =>  {
    return (
      <div>
        <h1>Welcome to SEPER</h1>
        <p>SEPER is a web application that showcases a list of Software Engineering practices for users 
          and practicioners to see. Users are able to submit through a form provided by the app, which is
          then proccessed for approval by a Moderator.</p>
        <br/>
        <h2> How to use SEPER</h2>

        <h3>Submitting an Article</h3>
        <p>Any Software Engineering Practices are to be submitted in the submission page. 
          Instructions are shown below:</p>
        <ol>
          <li>Click <strong>Submit an Article</strong> by the menu. This takes you to the submission form.</li><br/>
          <li>Type in the appropriate fields required for your submission.</li><br/>
          <li>Once that is done, click <strong>Submit</strong>.</li>
        </ol>
        <br/>
        <h3>Viewing Seper Tables</h3>
        <p>Should the user or practicioner wants to look over their submitted practices, provided that
          it was approved by a Moderator, they are able to look all of the approved practices:</p>
        <ol>
          <li>Click <strong>Select the Practice</strong>, which takes you a table of all the 
            approved SE practices.</li><br/>
          <li>From there, you can sort out in any category you like. Simply click the title of a chosen
          category (eg. DOI), and it will sort out in an ascending/descending order.</li><br/>
           <li>You can sort out the type of the SE Practice as well. Simply head over to the 
             <strong>Select an SE Practice</strong> drop-down menu below the heading, and choose your
             selected SE Practice (Mob Programming or TDD).</li>
        </ol>

      </div>
    );
  }
 
export default Home;
