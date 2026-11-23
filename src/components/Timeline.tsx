import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faHandshake, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career & Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Dec 2025 - Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Treasurer</h3>
            <h4 className="vertical-timeline-element-subtitle">LOFA · Pokhara, Nepal</h4>
            <p>
              Overseeing financial operations and organizational budgeting. Keeping accurate records of income and expenditure, ensuring responsible and transparent fund utilization, and providing periodic financial reports to ensure long-term stability.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2025 - Oct 2026"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faHandshake} />}
          >
            <h3 className="vertical-timeline-element-title">Sponsor Coordinator (Lead)</h3>
            <h4 className="vertical-timeline-element-subtitle">TEDxChipledhunga 2026 · Pokhara, Nepal</h4>
            <p>
              Led end-to-end sponsorship for TEDxChipledhunga 2026 ("Xtreme Horizons") with an event budget of NRs 800,000. Built sponsorship from scratch across 7 industries, developed customized proposals, managed category exclusivity, coordinated on-site activations, and handled VAT/PAN compliant invoicing.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Jul 2025 - Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">ACCA Qualification (Applied Skills)</h3>
            <h4 className="vertical-timeline-element-subtitle">The British College, Kathmandu & ACCA Global</h4>
            <p>
              Pursuing professional chartered certified accountancy. Completed ACCA Diploma in Accounting and Business; actively studying Applied Skills covering Financial Reporting, Audit & Assurance, Taxation, and Financial Management.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023 - Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Business Studies (BBS)</h3>
            <h4 className="vertical-timeline-element-subtitle">Tribhuvan University · Nepal</h4>
            <p>
              Undergraduate program focused on Business Finance, Accountancy, Taxation, Business Law, Economics, and Organizational Management.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2026"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBuildingColumns} />}
          >
            <h3 className="vertical-timeline-element-title">Global Money Week Program Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">College Financial Awareness Initiative · Nepal</h4>
            <p>
              Conducted youth financial literacy programs: organized institutional bank study tours, finance-focused quiz bowls, and creative competitions to advance practical money management awareness.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;