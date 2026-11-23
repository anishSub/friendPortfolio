import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar, faCoins, faHandshake } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Financial Reporting",
    "Accounting",
    "VAT & PAN Invoicing",
    "Tally ERP",
    "QuickBooks",
    "Microsoft Excel",
    "Bank Reconciliation",
    "Financial Statements",
    "Compliance"
];

const labelsSecond = [
    "Budgeting & Forecasting",
    "Cash Flow Management",
    "Treasury Operations",
    "Expense Auditing",
    "Financial Governance",
    "Data Visualisation",
    "Cost Analysis"
];

const labelsThird = [
    "Sponsorship Strategy",
    "Brand Partnerships",
    "Pitch & Negotiation",
    "Category Exclusivity",
    "Event Management",
    "Community Initiatives",
    "AI Fluency (Anthropic)"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faFileInvoiceDollar} size="3x"/>
                    <h3>Accounting & Financial Reporting</h3>
                    <p>Solid accounting foundation from ACCA (Applied Skills level, holder of ACCA Diploma in Accounting and Business) and BBS at Tribhuvan University. Hands-on experience with VAT/PAN invoicing, financial reporting, and bookkeeping using Tally ERP, QuickBooks, and Excel.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Core Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCoins} size="3x"/>
                    <h3>Budgeting & Treasury Management</h3>
                    <p>Proven financial stewardship as Treasurer of LOFA Pokhara and budgeting lead for large-scale events (including an NRs 800,000 budget for TEDxChipledhunga 2026). Skilled in cash flow tracking, expense allocation, internal controls, and financial stability reporting.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Core Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faHandshake} size="3x"/>
                    <h3>Sponsorship Relations & Partnerships</h3>
                    <p>Built end-to-end sponsorship programs from scratch across 7 industries (hospitality, fintech, healthcare, automotive, IT, education, FMCG). Experienced in authoring bespoke value propositions, category exclusivity management, pitch negotiations, and partner activations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Core Skills:</span>
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