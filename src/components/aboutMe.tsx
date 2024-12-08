import React, { useState } from "react";
import "../cssComponents/aboutMe.css";
import profilePic from "../assets/Images/portrait-sebbe.jpg";

const AboutMe: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="about-me-page">
      <div className="about-me-container">
        <h1>About</h1>
        <h1>Me</h1>

        <div
          className={`image-info-container ${isHovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={profilePic} alt="About Me" className="portrait-image" />
          <div className="info-text">
            <h1>About Me</h1>
            <p>Education: XYZ University</p>
            <p>Interests: Web Development, AI, Machine Learning</p>
            <p>
              <a href="https://www.linkedin.com/in/yourprofile">LinkedIn</a>
            </p>
            {/* Add more information as needed */}
          </div>
        </div>
        <div className="additional-content">
          {/* Other content related to About Me that remains static */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
