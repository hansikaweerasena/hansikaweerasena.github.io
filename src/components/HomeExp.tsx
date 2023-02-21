import React from 'react';
import uf_logo from "../assets/img/uf_logo.png";
import cg_logo from "../assets/img/cg_logo.jpeg";
import {HanzContainer} from "../common/HanzContainer";
import {HanzHeaderContainer} from "../common/HanzHeaderContainer";

export function HomeExp() {
    return (
        <HanzHeaderContainer title="Professional Experience">
                    <div className="row">
                        <div className="col-lg-2 d-none d-lg-block"><img
                            className="rounded-circle hanz-edu-logo" src={uf_logo}/></div>
                        <div className="col">
                            <h1 className="fs-5 hanz-edu-title">Research Assistant - Embedded Systems Lab<br/></h1>
                            <h1 className="fs-6 hanz-edu-subtitle">University of Florida | Jan 2021 - Present</h1>
                            <p className="hanz-edu-para">Research on securing Network on Chip for modern System-on-Chip
                                architectures</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-2 d-none d-lg-block"><img
                            className="rounded-circle hanz-edu-logo" src={cg_logo}/></div>
                        <div className="col">
                            <h1 className="fs-5 hanz-edu-title">Senior Software Engineer - Research and Development
                                Division <br/></h1>
                            <h1 className="fs-6 hanz-edu-subtitle">CodeGen International | Jan 2018 - Dec 2020</h1>
                            <p className="hanz-edu-para">Research on securing Network on Chip for modern System-on-Chip
                                architectures</p>
                            <ul className="hanz-edu-list">
                                <li> Machine Learning and Data Mining Team | recommendation and personalization engine |
                                    NLP and Image Processing
                                </li>
                                <li>DevOps | Cloud Computing, Continuous Integration, Containerization, Automation and
                                    Monitoring of applications
                                </li>
                                <li>Full-stack Development | Peer to Peer chat platform with in-house developed travel
                                    domain chat bot
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <button className="btn btn-outline-secondary btn-sm hanz-show-more col-12 fw-light shadow-sm" type="button" data-bs-target="#">
                        Show all Professional Experience
                        <span className="hanz-svg-span">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="mercado-match"
                             data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                            <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
                        </svg>
                        </span>
                    </button>
        </HanzHeaderContainer>
    );
}