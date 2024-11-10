import React from 'react';
import { HanzHeaderContainer } from "../common/HanzHeaderContainer";
import data from '../data/experince.json';
import {useTheme} from "../ThemeContext";

function ExperienceSection({ title, experiences }: { title: string, experiences: any }) {
    const { theme } = useTheme();

    return (
        <div className={`container shadow-sm bg-${theme} text-${theme === 'light' ? 'dark' : 'white'}`}>
            <span className="fw-bold">
                    {title} Experience <span className="badge bg-secondary">{experiences.length}</span>
                </span>
            <hr/>
            {experiences.slice(0,1).map((exp : any, index : React.Key) => (
                <React.Fragment key={index}>
                    <div className="row">
                        <div className="col-lg-2 d-none d-lg-block">
                            <img className="rounded-circle hanz-edu-logo" src={exp.logo} alt="Logo" />
                        </div>
                        <div className="col">
                            <div className="d-flex justify-content-between align-items-center">
                                <h1 className="fs-5 hanz-edu-title">{exp.role}</h1>
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
