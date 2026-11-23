import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Key Initiatives & Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.linkedin.com/company/tedxchipledhunga/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="TEDxChipledhunga 2026" width="100%"/></a>
                <a href="https://www.linkedin.com/company/tedxchipledhunga/" target="_blank" rel="noreferrer"><h2>TEDxChipledhunga: NRs 800k Sponsorship</h2></a>
                <p>Engineered a complete corporate sponsorship function from scratch across 7 industries. Authored bespoke brand proposals, negotiated category exclusivity agreements, and oversaw VAT/PAN billing and partner activations.</p>
            </div>
            <div className="project">
                <a href="https://www.linkedin.com/company/78070295/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="LOFA Treasury" width="100%"/></a>
                <a href="https://www.linkedin.com/company/78070295/" target="_blank" rel="noreferrer"><h2>Treasury Operations & Fiscal Controls (LOFA)</h2></a>
                <p>Structured internal budgeting schedules, cash flow management, expenditure audits, and transparent financial reporting systems to maintain organizational fiscal health.</p>
            </div>
            <div className="project">
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7452400625885278208/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="Global Money Week" width="100%"/></a>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7452400625885278208/" target="_blank" rel="noreferrer"><h2>Youth Financial Literacy Campaign (GMW)</h2></a>
                <p>Spearheaded practical financial literacy initiatives, coordinating commercial bank exposure visits, financial literacy quiz bowls, and awareness competitions for students.</p>
            </div>
            <div className="project">
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7456059472667582464/" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="Excel for Business" width="100%"/></a>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7456059472667582464/" target="_blank" rel="noreferrer"><h2>Business Financial Modeling & Analytics</h2></a>
                <p>Authorized by Macquarie University (Coursera): developed robust Excel models, structured data sets, financial summaries, and executive charts for business decision-making.</p>
            </div>
            <div className="project">
                <a href="https://academy.claude.com/verify/bed49233d833566c8c9cfb49c7b903e9" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="AI Fluency Certification" width="100%"/></a>
                <a href="https://academy.claude.com/verify/bed49233d833566c8c9cfb49c7b903e9" target="_blank" rel="noreferrer"><h2>AI Fluency: Framework & Foundations (Anthropic)</h2></a>
                <p>Certified in Anthropic's AI Fluency framework to leverage generative AI models for accounting efficiency, financial analysis, workflow automation, and strategic communications.</p>
            </div>
            <div className="project">
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7463541312575864832/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="NYEF Mentorship" width="100%"/></a>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7463541312575864832/" target="_blank" rel="noreferrer"><h2>NYEF Entrepreneurial Leadership & Mentorship</h2></a>
                <p>Participated with the Nepalese Young Entrepreneurs' Forum (NYEF) Pokhara Chapter, gaining executive mentorship in regional commerce, venture finance, and ethical leadership.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;