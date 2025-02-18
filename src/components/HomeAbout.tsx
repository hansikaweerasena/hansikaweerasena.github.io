import React from 'react';
import {HanzHeaderContainer} from "../common/HanzHeaderContainer";

export function HomeAbout() {
    return (<HanzHeaderContainer title="About Me" buttonText="Read More" buttonPath="/about">
            <p id="hanz-home-about-p" className="fw-normal">Hansika is a computer science researcher and engineer with a passion for learning new things.
                His research interests span computer architecture, computer and network security, and applied machine learning for security.
                Beyond research, he enjoys traveling, hiking, watching anime, playing and watching soccer, and seeking new experiences.
                Hansika is currently a Ph.D. candidate in the Department of Computer & Information Science & Engineering at the University of Florida,
                where he focuses on communication security, network-on-chip architectures, confidential computing, and machine learning applications in security.</p>
        </HanzHeaderContainer>
    );
}