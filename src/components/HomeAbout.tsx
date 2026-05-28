import React from 'react';
import {HanzHeaderContainer} from "../common/HanzHeaderContainer";

export function HomeAbout() {
    return (<HanzHeaderContainer title="About Me" buttonText="Read More" buttonPath="/about">
            <div id="hanz-home-about-p">
            <p className="fw-normal"> I’m a computer systems researcher who enjoys thinking about how to make mordern complex systems more secure, reliable, and efficient. My research interests are built on the core pillars of computer architecture, computer networks, and computer security. I am also interested in applied machine learning for architectural analysis, optimization, and security. I am motivated by the growing complexity and heterogeneity of modern systems and the need for reliable and trustworthy architectures that scale across technologies. Recently, I have expanded my interests into the quantum domain, particularly from the perspective of a computer systems and architecture researcher.
            </p>
                <p className="fw-normal">
                I am currently a Postdoctoral Researcher at North Carolina State University, where I have actively expanded my research into quantum computing architectures and interconnects, with particular emphasis on modular quantum systems. During my Ph.D. in Computer and Information Science at the University of Florida, I focused on on-chip communication architectures and security, including secure communication designs, spatio-temporal traffic analysis using machine learning, and architectural side-channel attacks and countermeasures. I also collaborated on formal verification of trusted execution environments, bioinformatics software reliability, and bio-acoustic monitoring.
</p>
                <p className="fw-normal">
                Prior to my Ph.D., I spent 3.5 years in industry as a Senior Software Engineer (R&D) at CodeGen International, working on research-driven system development, particularly using ML-driven techniques for travel-domain software solutions. I earned my Bachelor’s degree with First Class honors in Computer Science and Engineering from the University of Moratuwa, the leading engineering university in Sri Lanka.
                </p>
                <p className="fw-normal"> Outside work, I enjoy engaging with nature, traveling, trekking and hiking, running, music, photography, playing and watching soccer, DIY, and exploring diverse topics outside my expertise that spans my curiosity.</p>
            </div>
        </HanzHeaderContainer>
    );
}