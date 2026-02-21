import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>

          {/* UBC Formula Electric - NOW FIRST */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2026 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Aerodynamics Subteam Member
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              UBC Formula Electric - Vancouver, BC
            </h4>
            <p>
              Designed and manufactured carbon fiber aerodynamic components for the 2026 Formula Electric car. Machined molds using CNC and collaborated within a 100+ member engineering team to develop high-performance aero systems.
            </p>
          </VerticalTimelineElement>

          {/* UBC Engineering Student - NOW SECOND */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sept 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Engineering Student
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of British Columbia - Vancouver, BC
            </h4>
            <p>
              First-year engineering student with an 85% GPA. Coursework in MATLAB, SolidWorks, and C programming with strong foundations in mechanical systems and design.
            </p>
          </VerticalTimelineElement>

          {/* Cashier */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2022 - Aug 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Part-Time Cashier
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Four Rivers Co-op Home Centre - Vanderhoof, BC
            </h4>
            <p>
              Process transactions and balanced tills at end of day. Assisted customers with material cutting (chain, rope, flooring), stocked inventory, loaded lumber yard materials, and maintained a safe work environment.
            </p>
          </VerticalTimelineElement>

          {/* Echo Lake Volunteer */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Grounds Maintenance Volunteer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Echo Lake - Vanderhoof, BC
            </h4>
            <p>
              Performed yard care and facility maintenance using various equipment. Ensured camp facilities were safe, clean, and operational.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
