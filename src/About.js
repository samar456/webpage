import React from "react";

const About = () => {
  return (
    <>
    <div>
      <div className="about">
        <h4>About the author</h4>
        <div className="about-content">
          <div>
            <img className="log" src={require("./Images/dw.png")} alt="" />
          </div>
          <div className="theory">
            <h5 className="headabout">Team Cyberyami</h5>
            <p className="paraabout">
              CyberYami brings you a plethora of custom-designed bootcamps and
              courses. The learning material focuses on hands-on practice that
              is much needed in cyber security. We have included labs and
              challenges to make you understand how things work and are done in
              the industry. You can showcase your skills on your resume with our
              certification proving that you can apply the knowledge gained in a
              real-world scenario.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
