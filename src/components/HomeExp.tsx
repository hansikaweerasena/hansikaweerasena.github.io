import React from 'react';
import { HanzHeaderContainer } from "../common/HanzHeaderContainer";
import data from '../data/experince.json';

function ExperienceSection({ title, experiences }: { title: string, experiences: any }) {

    return (
        <div className="hanz-home-experience-summary">
            <div className="hanz-home-experience-section-title">
                <span className="fw-bold">{title} Experience</span>
                <span className="badge bg-secondary">{experiences.length}</span>
            </div>
            {experiences.slice(0,1).map((exp : any, index : React.Key) => (
                <React.Fragment key={index}>
                    <div className="row g-3 align-items-start">
                        <div className="col-auto d-none d-lg-block">
                            <img className="rounded-circle hanz-home-experience-logo" src={exp.logo} alt={`${exp.aff} logo`} />
                        </div>
                        <div className="col">
                            <div className="hanz-home-experience-heading">
                                <h2 className="hanz-home-experience-role">{exp.role}</h2>
                                <span className="hanz-home-experience-period">{exp.period}</span>
                            </div>
                            <p className="hanz-home-experience-affiliation">{exp.aff}</p>
                            {exp.dept && <p className="hanz-home-experience-dept">{exp.dept}</p>}
                            {exp.description ? (
                                <p className="hanz-home-experience-para">{exp.description}</p>
                            ) : (
                                <ul className="hanz-home-experience-list">
                                    {exp.points.map((point : any, pointIndex : React.Key) => (
                                        <li key={pointIndex}>{point}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    {/*{index < experiences.length - 1 && <hr />}*/}
                </React.Fragment>
            ))}
        </div>
    );
}

export function HomeExp() {

    const experiences = data.experiences;

    // Array defining the experience sections
    const sections = [
        { title: "Research", data: experiences.research },
        { title: "Professional", data: experiences.professional },
        { title: "Teaching", data: experiences.teaching },
    ];

    return (
        <HanzHeaderContainer title="Experience" buttonText="V I E W &nbsp;&nbsp;&nbsp;&nbsp; A L L" buttonPath="/experience">
            {sections.map((section, index) => (
                <ExperienceSection
                    key={index}
                    title={section.title}
                    experiences={section.data}
                />
            ))}
        </HanzHeaderContainer>
    );
}
