import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faLaptopCode, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "CNC Machining",
    "Carbon Fiber Manufacturing",
    "Mechanical Assembly",
    "Engine Rebuild",
    "Precision Measurement",
    "Fabrication",
    "Shop Safety",
    "Power Tools"
];

const labelsSecond = [
    "MATLAB (Basic)",
    "SolidWorks (Basic)",
    "Fusion 360",
    "STAR-CCM+",
    "C Programming",
    "Python (Basic)",
    "Technical Documentation"
];

const labelsThird = [
    "Computer Hardware Assembly",
    "System Diagnostics",
    "Troubleshooting",
    "Arduino Projects",
    "Problem Solving",
    "Team Collaboration"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Technical Expertise</h1>
            <div className="skills-grid">

                <div className="skill">
                    <FontAwesomeIcon icon={faGear} size="3x"/>
                    <h3>Mechanical & Fabrication</h3>
                    <p>
                        Hands-on experience designing and manufacturing mechanical systems, 
                        including carbon fiber aero components and complete engine rebuilds. 
                        Strong foundation in fabrication, precision measurement, and shop safety.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLaptopCode} size="3x"/>
                    <h3>Engineering Software & Programming</h3>
                    <p>
                        Experience using engineering software tools for design, simulation, 
                        and programming. Familiar with CAD modeling, basic CFD analysis, 
                        and structured programming concepts.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faScrewdriverWrench} size="3x"/>
                    <h3>Hardware & Systems</h3>
                    <p>
                        Built and troubleshot complete computer systems and mechanical assemblies. 
                        Strong analytical mindset with a focus on diagnostics, reliability, and 
                        performance optimization.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Experience:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;