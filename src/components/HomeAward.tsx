import React from 'react';
import {HanzContainer} from "../common/HanzContainer";

export function HomeAward() {
    return (
        <HanzContainer>
            <div className="row">
                <div className="col-lg-3">
                    <h4 className="fw-bold text-secondary hanz-section-header">Awards and Achievements</h4>
                </div>
                <div className="col">
                    <ul>
                        <li>Gartner Group Graduate Fellowship - for outstanding CISE Ph.D. students by CISE department
                            of University of Florida <br/></li>
                        <li>Full assistantship - for PhD program in Computer Science (CISE) from University of
                            Florida.
                        </li>
                        <li>Recognition of Academic Excellence - for semesters 2,3,4,5,6,7 and 8 by Department of
                            Computer Science and Engineering
                        </li>
                        <li>Mora Ventures 2.0 - 1st runners-up of a Hackathon in 2017</li>
                        <li>IEEEXtreme 11.0 (Team TriHHackers) - world rank -: 228, country rank -: 13<br/></li>
                        <li>IEEEXtreme 9.0 (Team TriHHackers) - world rank -: 323, country rank -: 36</li>
                        <li>Xbotic 2015 and Impacto 2015 - Final Round Competitors in two robotic competitions</li>
                        <li>GCE Advance Level Examination - ‘Mahapola’ merit scholarship to pursue undergraduate studies
                            by the government of Sri Lanka.
                        </li>
                    </ul>
                </div>
            </div>
        </HanzContainer>
    );
}