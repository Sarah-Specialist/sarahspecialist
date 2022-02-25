import React from 'react';
import './about.css';

export default function About() {
    return (
        <div className="about">
            <h2>About Me</h2>
            <div className="story">
            <h3>My Story</h3>
                <p>I decided to give it a shot, and never looked back!</p>
                <p>Growing up, I’ve always had a knack for Science and pursued my passion for the Healthcare industry. As part of the medical ICU team, I’ve worked in high-pressure work environment and contributed as a front-line healthcare worker during the COVID-19 pandemic. I will always retain a strong interest toward Healthcare, and I cannot wait to merge those experiences with new skills that I am learning everyday.</p>
                <p>I’ve had an interest in coding for a long time, and I used to spend my free time attending courses and reading up. I am currently enrolled in the NTU Software Developer Immersive course, and I’m learning a lot from wonderful mentors and classmates! The curriculum for this course include programming fundamentals, frontend framework and APIs, backend framework and APIs, mobile and full-stack development, relational and noSQL databases, and agile and product development.</p><br />
            </div>
            <div className="education">
                <h3>Education</h3>
                <h4>Software Developer Immersive - Nanyang Technological University, SkillsUnion (Ongoing)</h4>
                <p>This course has been designed by industry experts to provide all the knowledge and skills of Software Engineering, to enable graduates to excel in a career in this exciting and highly in-demand field. Modules in this course include programming fundamentals, frontend framework and APIs, backend framework and APIs, mobile and full-stack development, relational and noSQL databases, and agile and product development.</p>
                <h4>Software Development Basics - Trent Global College</h4>
                <p>This course teaches foundational skills of HTML, CSS, BootStrap and JavaScript that are used to build a website from scratch.</p>
                <h4>Certifications from Codecademy</h4>
                <p>Responsive design, Navigation design, JavaScript, Intermediate JavaScript, Color Design, Command Line, Git, CSS-in-JS, Bootstrap, Deployment, React, React Router, Node.js</p>
                <h4>Bachelor's Degree in Health Sciences (Respiratory Therapy) - University of Missouri</h4>
                <p>“Sarah reflects the high standards of our profession. She consistently takes initiative and her ability to balance and prioritize various responsibilities speaks to her intelligence and maturity.” - Monica A. Schibig, Director of Respiratory Care Program, University of Missouri</p>
            </div>
            <div className="cert">
                <h3>Certification</h3>
                <h4>Scrum Master Certification Specialization</h4>
                <p>Issued by Coursera, Credential ID: R4VD5JGXMPK6</p>
            </div>
        </div>
    )
}