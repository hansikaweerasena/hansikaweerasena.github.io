import React from 'react';
import { HanzHeaderContainer } from "../common/HanzHeaderContainer";
import data from '../data/experince.json';

export function HomeExp() {

    // const experiences = data.experiences.teaching.slice(0, 4);
    const experiences = data.experiences;

    return (
        <HanzHeaderContainer title="Professional Experience" buttonText="V I E W &nbsp;&nbsp;&nbsp;&nbsp; A L L" buttonPath="/experience">
            {experiences.teaching.map((exp : any, index : React.Key) => (
                <React.Fragment key={index}>
                    <div className="row">
                        <div className="col-lg-2 d-none d-lg-block">
                            <img className="rounded-circle hanz-edu-logo" src={exp.logo} alt="Logo"/>
                        </div>
                        <div className="col">
                            <div className="d-flex justify-content-between align-items-center">
                                <h1 className="fs-4 hanz-edu-title">{exp.role}</h1>
                                <h1 className="fs-6 text-end">{exp.period}</h1>
                            </div>
                            <h1 className="fs-5 hanz-edu-subtitle">{exp.aff}</h1>
                            <h1 className="fs-6 hanz-edu-subtitle">{exp.dept}</h1>
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
                    {index < experiences.teaching.length - 1 && <hr/>}
                </React.Fragment>
            ))}
        </HanzHeaderContainer>
    );
}
