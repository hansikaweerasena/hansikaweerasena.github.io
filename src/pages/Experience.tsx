import React from 'react';
import data from "../data/experince.json";
import {HanzHeaderContainer} from "../common/HanzHeaderContainer";


function ExperienceSection({ title, experiences }: { title: string, experiences: any }) {

    return (
        <HanzHeaderContainer title={title}>
            {experiences.map((exp : any, index : React.Key) => (
                <div className="hanz-experience-item" key={index}>
                    <div className="row g-3 align-items-start">
                        <div className="col-auto d-none d-md-block">
                            <img className="rounded-circle hanz-experience-logo" src={exp.logo} alt={`${exp.aff} logo`} />
                        </div>
                        <div className="col">
                            <div className="hanz-experience-heading">
                                <div>
                                    <h2 className="hanz-experience-role">{exp.role}</h2>
                                    <p className="hanz-experience-affiliation">{exp.aff}</p>
                                    {exp.dept && <p className="hanz-experience-dept">{exp.dept}</p>}
                                </div>
                                <span className="hanz-experience-period">{exp.period}</span>
                            </div>
                            {exp.description ? (
                                <p className="hanz-experience-para">{exp.description}</p>
                            ) : (
                                <ul className="hanz-experience-list">
                                    {exp.points.map((point : any, pointIndex : React.Key) => (
                                        <li key={pointIndex}>{point}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </HanzHeaderContainer>
    );
}

export function Experience() {

    const experiences = data.experiences;

    // Array defining the experience sections
    const sections = [
        { title: "Research", data: experiences.research },
        { title: "Professional", data: experiences.professional },
        { title: "Teaching", data: experiences.teaching },
        { title: "Volunteer and Leadership", data: experiences.volunteer }
    ];

    return (
        <div className="container hanz-page">
            <header className="hanz-page-header">
                <h1>Experience</h1>
            </header>
            {sections.map((section, index) => (
                <ExperienceSection
                    key={index}
                    title={section.title}
                    experiences={section.data}
                />
            ))}
        </div>
    );
}
