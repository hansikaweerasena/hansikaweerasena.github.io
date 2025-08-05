import React from 'react';
import {HanzHeaderContainer} from "../common/HanzHeaderContainer";

export function HomeAbout() {
    return (<HanzHeaderContainer title="About Me" buttonText="Read More" buttonPath="/about">
            <p id="hanz-home-about-p" className="fw-normal"> Hansika is a computer science researcher and engineer with a passion for learning new things.
                His research interests span computer architecture, computer networks, computer and network security, and applied machine learning for security.
                Hansika completed his Ph.D. in the Department of Computer & Information Science & Engineering at the University of Florida in August 2025,
                focusing on communication security, network-on-chip architectures, and applied machine learning for security. He earned his bachelor's degree
                in Computer Science and Engineering from the University of Florida and worked for over three years as a Senior Software Engineer at CodeGen
                International prior to his Ph.D. Beyond research, he enjoys traveling, hiking, landscape photography, watching anime/films/tv shows, playing
                and watching soccer, and seeking new experiences.
                </p>
        </HanzHeaderContainer>
    );
}