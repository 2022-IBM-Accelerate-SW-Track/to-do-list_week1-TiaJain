import "./About.css";
import profile_pic_tia from "../assets/profile_pic_tia.png"; 
import React, { Component } from 'react';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile_pic_tia}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Tia Jain</div>
            <div className="brief_description">
              Computer Science Student at the University of California, Berkeley
            </div>
          </div>
        </div>
      </div>
    )
  }
}