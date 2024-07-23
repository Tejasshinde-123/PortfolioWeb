import React from 'react';
import './About.css';

import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="aboutTitle">
        <h1>About Me</h1>
        <hr />
      </div>
      <div className="aboutSections">
        <div className="aboutleft">
        <marquee behavior="" direction="left"> <p><FaReact /></p></marquee> 
         <marquee behavior="" direction="right"> <p><FaNodeJs /></p></marquee>
        <marquee behavior="" direction="left">  <p><SiMongodb /></p></marquee>
         <marquee behavior="" direction="right"> <p><DiMysql /></p></marquee>
          <marquee behavior="" direction="left"><p><IoLogoJavascript /></p></marquee>
        </div>
        <div className="aboutRight">
          <div className="aboutpara">
            <p>
              I am a passionate and motivated Web Developer with a solid foundation in Java and SQL.
              As a Developer, I bring a fresh perspective and eagerness to learn, coupled with strong skills in MongoDB, Express.js, React, and Node.js. My background in Java and SQL enhances my ability to build robust and scalable applications. 
              I am excited to contribute to dynamic teams and take on challenging projects that drive innovation.
            </p>
          </div>
          <div className="aboutSkills">
            <div className="aboutSkill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="aboutSkill">
              <p>React Js</p>
              <hr style={{ width: "85%" }} />
            </div>
            <div className="aboutSkill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="aboutSkill">
              <p>Java</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="aboutSkill">
              <p>Node Js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="aboutSkill">
              <p>Mongodb</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="aboutSkill">
              <p>Sql</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
