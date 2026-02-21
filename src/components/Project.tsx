import React from "react";
import AERO from '../assets/images/AERO.png';
import ComputerBuild from '../assets/images/Computer_build.JPEG';
import Engine from '../assets/images/engine.JPEG';
import Hangman from '../assets/images/Hangman.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Engineering Projects</h1>
        <div className="projects-grid">

            <div className="project">
                <img src={AERO} className="zoom" alt="Aero Project" width="100%"/>
                <h2>UBC Formula Electric – Aerodynamic Wing</h2>
                <p>
                Designed mounting systems and manufactured carbon fiber aerodynamic wings 
                using CNC-machined molds. Contributed to the 2026 Formula Electric aero package 
                using SolidWorks, Fusion 360, and STAR-CCM+.
                </p>
            </div>

            <div className="project">
                <img src={Engine} className="zoom" alt="Engine Rebuild" width="100%"/>
                <h2>Small Engine Rebuild</h2>
                <p>
                Fully disassembled and rebuilt a Briggs & Stratton XR 550 engine. 
                Measured bore diameter, piston ring gap, and valve clearances to ensure 
                components met specification.
                </p>
            </div>

            <div className="project">
                <img src={ComputerBuild} className="zoom" alt="Computer Build" width="100%"/>
                <h2>Custom PC Build</h2>
                <p>
                Researched, budgeted, and assembled a high-performance custom computer. 
                Diagnosed faulty RAM and resolved system boot issues.
                </p>
            </div>

            <div className="project">
                <img src={Hangman} className="zoom" alt="Hangman Program" width="100%"/>
                <h2>Hangman Game (Python)</h2>
                <p>
                Developed a Python-based Hangman game featuring dictionary word selection 
                and graphical interface elements.
                </p>
            </div>

        </div>
    </div>
    );
}

export default Project;