import React from 'react';
import {HanzHeaderContainer} from "../common/HanzHeaderContainer";

export function HomeAbout() {
    return (<HanzHeaderContainer title="About Me" buttonText="Read More">
            <p id="hanz-home-about-p" className="fw-normal">Hansika is a PhD Candidate at the
                Department
                of
                Computer &amp; Information Science &amp; Engineering, University of Florida, researching on
                communication
                security, network-on-chip and computer architecture.</p>
        </HanzHeaderContainer>
    );
}