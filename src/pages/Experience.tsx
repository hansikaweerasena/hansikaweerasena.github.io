import React from 'react';
import {HanzFullWidthContainer} from "../common/HanzFullWidthContainer";
import data from "../data/experince.json";
import {HanzHeaderContainer} from "../common/HanzHeaderContainer";

export function Experience() {
    return (<div className="container">
            <div className="row">
                <HanzFullWidthContainer>
                    <HanzHeaderContainer title="Professional Experience" buttonText="" buttonPath="/experience">
                        {data.experiences.map((exp : any, index : React.Key) => (
                            <React.Fragment key={index}>
                                <div className="row">
                                    <div className="col-lg-2 d-none d-lg-block">
                                        <img className="rounded-circle hanz-edu-logo" src={exp.logo} alt="Logo"/>
                                    </div>
                                    <div className="col">
                                        <h1 className="fs-5 hanz-edu-title">{exp.title}<br/></h1>
                                        <h1 className="fs-6 hanz-edu-subtitle">{exp.subtitle}</h1>
                                        {exp.description ? (
                                            <p className="hanz-edu-para">{exp.description}</p>
                                        ) : (
                                            <ul className="hanz-edu-list">
                                                {exp.points.map((point : any, index : React.Key) => (
                                                    <li key={index}>{point}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                                {index < data.experiences.length - 1 && <hr/>}
                            </React.Fragment>
                        ))}
                    </HanzHeaderContainer>
                </HanzFullWidthContainer>
            </div>
        </div>
);
}