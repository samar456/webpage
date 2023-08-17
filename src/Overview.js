import React from "react";
import "./Bar.css";
const Overview = () => {
  return (
    <>
      <div className="main">
        <div className="left1">
          <h4 className="head">Overview</h4>
          <p>
            Burpsuite bootcamp brings you a detailed, structured way of learning
            and practicing this tool. This tool is highly used in the industry
            and mainly is used for conducting WAPT i.e Web Application
            Penetration Testing. You will learn about every aspect and sub-tools
            included in the burp suite included in this bootcamp are practice
            labs to get your hands on the burp suite and theory lectures with
            interactive video demonstrations.
            </p>
        </div>
        <div className="right1">
        <h4 className="head">Top skill you will learn</h4>
        <p><i className="fa-solid fa-circle-check checklogo" style={{color: "#41bd28"}}></i>Understanding of Burpsuite</p>
        <p><i className="fa-solid fa-circle-check checklogo" style={{color: "#41bd28"}}></i>Know the tools offered by the burp suite</p>
        <p><i className="fa-solid fa-circle-check checklogo" style={{color: "#41bd28"}}></i>Use burp suite with ease in your testing</p>
        <p><i className="fa-solid fa-circle-check checklogo" style={{color: "#41bd28"}}></i>Know the difference between the pro & free edition</p>
        <p><i className="fa-solid fa-circle-check checklogo" style={{color: "#41bd28"}}></i>Perform full-fledged WAPT using only BurpSuite</p>
        <p><i className="fa-solid fa-circle-check checklogo" style={{color: "#41bd28"}}></i>Learn Real-world techniques</p>
        </div>
      </div>
    </>
  );
};

export default Overview;
