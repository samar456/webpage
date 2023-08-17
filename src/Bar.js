import React from "react";
import "./Bar.css";
import Accordian from './Accordian' ;
const Bar = () => {
  return (
    <>
    <div>
    <div className="uppercontainer">
      <div className="container">
        <div className="left-bar">
          <strong style={{marginBottom:'8px'}}>Skillup</strong>
          <div className="item1">
            Skillup/ <strong>Burpsuite Bootcamp</strong>
          </div>
          <h1>Burpsuite Bootcamp</h1>
          <p>
            BurpSuite is an all-in-one tool used for WAPT. There are various
            functions that the burp suite can perform that help one in the
            process of pen-testing a website. We can intercept traffic, such as
            requests and responses sent to web servers, and also perform various
            analyses on those requests. BurpSuite is used by professionals in
            the field of testing security for websites. BurpSuite comes in 2
            versions: professional, a paid product, and the free, Community
            edition.
          </p>
          <div>⭐⭐⭐⭐⭐5.0</div>
          <button className="btn3">
            <strong>Login To Enroll</strong>
          </button>
          <div>
            <div className="begin">
              <i
                class="fa-solid fa-thumbs-up"
                style={{ color: "#000000", marginRight: "10px" }}
              ></i>
              <p style={{ display: "inline", marginRight: "10px" }}>Beginner</p>
            </div>
            <div className="end">
              <i class="fa-solid fa-person" style={{ color: "#0a0a0a", marginRight: "10px" }}></i>
              <p style={{ display: "inline", marginRight: "10px" }}>38 Enrolled Students</p>
            </div>
          </div>
        </div>
        <div className="right-bar">
          <Accordian/>
        </div>
 
      </div>
      <div>
      <div className="newnav">
<li><a className='do'href=" k">Overview</a></li>
<li><a href=" o">Reviews</a></li>
</div>
</div>
</div>
</div>
    </>
  );
};

export default Bar;
