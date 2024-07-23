import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div id='work' className='portfolio'>
      <h1>My Projects</h1>
      <hr />
      <div className="project1">
        <h3>1. Institute Management Software</h3>
        <h6>Technologies Used</h6>
        <p>HTML & CSS</p>
        <p>Javascript</p>
        <p>React</p>
        <p>NodeJs</p>
        <p>Mongodb</p>
        <p>
          This software is specifically designed for a software training institute.
          It helps manage student data according to their IDs. This software stores personal information,
          chosen courses, and fee structure. The admin can view student fees and create installments.
          It also has a trainer login,
          where trainers can mark student attendance and assign tasks or assignments.
        </p>
      </div>
      <div className="project2">
        <h3>2. Asset Warehousing System</h3>
        <h6>Technologies Used</h6>
        <p>HTML & CSS</p>
        <p>Javascript</p>
        <p>React</p>
        <p>NodeJs</p>
        <p>Mongodb</p>
        <p>
          This software is specifically designed for a User to store his important property information, he can able to store
          his property documents as pdf and also add his assets manually in software. User can also able to add his all bank account
          information in software and software automatically shows how much balance is left in your account after debit or credit
          by reading bank messages from your device.
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
