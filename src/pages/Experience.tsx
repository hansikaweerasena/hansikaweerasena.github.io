import React from 'react';
import {HanzFullWidthContainer} from "../common/HanzFullWidthContainer";
import data from "../data/experince.json";
import {HanzHeaderContainer} from "../common/HanzHeaderContainer";


function ExperienceSection({ title, experiences }: { title: string, experiences: any }) {

    return (
        <HanzHeaderContainer title={title}>
            {experiences.map((exp : any, index : React.Key) => (
                <React.Fragment key={index}>
                    <div className="row">
                        <div className="col-lg-2 d-none d-lg-block">
                            <img className="rounded-circle hanz-edu-logo" src={exp.logo} alt="Logo" />
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
                                    {exp.points.map((point : any, pointIndex : React.Key) => (
                                        <li key={pointIndex}>{point}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    {index < experiences.length - 1 && <hr />}
                </React.Fragment>
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
        <div className="container">
            <div className="row">
                <HanzFullWidthContainer>
        <HanzHeaderContainer title="Experience">
            {sections.map((section, index) => (
                <ExperienceSection
                    key={index}
                    title={section.title}
                    experiences={section.data} // Displaying only the first experience of each section
                />
            ))}
        </HanzHeaderContainer>
                </HanzFullWidthContainer></div></div>
    );
}