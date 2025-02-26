import React from 'react';
import { HanzFullWidthContainer } from "../common/HanzFullWidthContainer";
import {useTheme} from "../ThemeContext";

export function About() {

    const { theme } = useTheme(); // Get theme from context

    return (
        <div className="container">
                <HanzFullWidthContainer>
                    <div className="container shadow-sm hanz-container">
                        <div className="row">
                            <h2>Hansika Weerasena</h2>
                            <p className="fw-normal">
                                Hansika is a computer science researcher and engineer with a passion for learning new things. His research interests span computer architecture, computer and network security, and applied machine learning for security. Beyond research, he enjoys traveling, hiking, watching anime, playing and watching soccer, and seeking new experiences. Hansika is currently a Ph.D. candidate in the Department of Computer & Information Science & Engineering at the University of Florida, where he focuses on communication security, network-on-chip architectures, confidential computing, and machine learning applications in security. Before pursuing a Ph.D., he was a research and development senior software engineer at CodeGen, one of the leading software companies in Sri Lanka.
                            </p>

                            <h3>Early Life and Education</h3>

                            <p className="fw-normal">
                                Hansika was born and raised in Sri Lanka’s southern region, known for its pristine beaches.
                                He grew up experiencing the sea breeze and ocean almost every day, which shaped his deep appreciation for nature.
                                Even his childhood home had a scenic ocean view, now a famous surfing spot for tourists.
                            </p>

                            {/* Image and Text Wrapper */}
                            <div className="d-flex align-items-start">
                                <div
                                    className="article-image-box"
                                    style={{
                                        backgroundColor: theme === "light" ? "#f8f9fa" : "#222",
                                        border: `1px solid ${theme === "light" ? "#ccc" : "#555"}`,
                                    }}
                                >
                                    <img src="img/about/seascape.jpg" alt="Hansika Weerasena" className="article-image" />
                                    <p className={`article-image-caption ${theme === "light" ? "text-dark" : "text-white"}`}>
                                        Seascape from Home
                                    </p>
                                </div>

                                {/* Wrapped Text */}
                                <div>
                                    <p className="fw-normal" style={{ marginLeft: "25px" }}>
                                        He completed his early education up to grade five at
                                        <a href="https://www.facebook.com/p/Olcott-Model-School-Matara-100083076765458/"> Olcott Model School</a>.
                                        After excelling in the national scholarship examination (160/200) in 2004, he transferred to
                                        <a href="https://stcmatara.lk/"> St. Thomas' College, Matara</a>, where he developed a strong passion for
                                        mathematics, science, and computing. He also actively participated in chess tournaments.
                                    </p>
                                    <p className="fw-normal" style={{ marginLeft: "25px" }}>
                                        Hansika pursued a Bachelor’s degree in Computer Science and Engineering at the University of Moratuwa, Sri Lanka, graduating with honors (GPA: 3.94/4.2). During his undergraduate years, he was actively involved in AIESEC, serving as a National Coordinator for Outgoing Exchange. Additionally, he competed in programming contests such as IEEEXtreme and startup competitions like Mora Ventures. (More details on AIESEC experiences and Competitions are available on dedicated pages.)
                                    </p>
                                </div>
                            </div>

                            {/* Career Section */}
                            <h3>Career</h3>
                            <p className="fw-normal">
                                Hansika began his professional career as a Software Engineering Intern at CodeGen International, where he worked on advanced semantic analysis and machine learning for personalization.
                                After completing his internship, he joined CodeGen International full-time, working for three years as a Software Engineer (2018-2020) and later as a Senior Software Engineer (2020-2021).
                            </p>
                            <p className="fw-normal">
                                During his time at CodeGen, Hansika contributed to:
                                <ul>
                                    <li>DevOps & Cloud Computing: Implementing containerization, CI/CD, and Kubernetes-based solutions.</li>
                                    <li>Machine Learning & Data Analytics: Leading projects on natural language processing (NLP), image processing, and user profiling.</li>
                                    <li>Full-Stack Development: Building and integrating a peer-to-peer chat platform (Lia) with in-house AI chatbots.</li>
                                    <li>Mentoring & Leadership: Training junior developers and interns, fostering a culture of best practices in software engineering.</li>
                                </ul>
                            </p>

                            {/* Graduate Studies Section */}
                            <h3>Graduate Studies</h3>
                            <p className="fw-normal">
                                In 2021, Hansika joined the University of Florida as a Ph.D. Candidate in Computer Science, specializing in Network-on-Chip (NoC) security, confidential computing, and applied machine learning for security.
                                He has served as a Graduate Research Assistant at the Embedded Systems Lab, leading projects funded by the National Science Foundation (NSF) and Semiconductor Research Corporation (SRC).
                            </p>
                            <p className="fw-normal">
                                His Ph.D. research explores:
                                <ul>
                                    <li>Securing NoC-based Systems-on-Chip (SoCs) using cryptographic and ML techniques.</li>
                                    <li>Side-Channel Analysis & Traffic Analysis Attacks in on-chip communication.</li>
                                    <li>Formal Verification of Trusted Execution Environments (TEEs), including Intel TDX.</li>
                                    <li>Lightweight Multicast Authentication for secure data transmission in NoCs.</li>
                                </ul>
                            </p>
                            <p className="fw-normal">
                                Hansika has published multiple papers in top-tier conferences and journals, including IEEE HOST, ACM TECS, and TODAES.
                                He has also contributed to patents on NoC security and lightweight encryption methods.
                            </p>

                            {/* Teaching and Professional Service */}
                            <h3>Teaching and Professional Service</h3>
                            <p className="fw-normal">
                                Hansika has extensive teaching experience, having worked as a Teaching Assistant at UF for the Embedded Systems course (Spring 2024).
                                He has also served as a Visiting Instructor at the University of Moratuwa, evaluating final-year automation projects.
                            </p>
                            <p className="fw-normal">
                                In addition to teaching, Hansika is an active reviewer for leading conferences, including:
                                <ul>
                                    <li>Design, Automation, and Test in Europe (DATE)</li>
                                    <li>IEEE International Symposium on Hardware Oriented Security and Trust (HOST)</li>
                                    <li>ACM/IEEE International Conference on Hardware/Software Codesign and System Synthesis (CODES+ISSS)</li>
                                </ul>
                            </p>

                            {/* Awards and Achievements */}
                            <h3>Awards and Achievements</h3>
                            <p className="fw-normal">
                                Hansika’s academic and professional excellence has been recognized through:
                                <ul>
                                    <li>Gartner Group Graduate Fellowship (2022, 2023, 2024)</li>
                                    <li>Full Research Assistantship at UF (2021)</li>
                                    <li>NSF Travel Grant (2024) for IEEE/ACM Embedded Systems Week</li>
                                    <li>First Runners-up at Mora Ventures (2017)</li>
                                    <li>IEEEXtreme Programming Competitions (Top 250 World Rank)</li>
                                </ul>
                            </p>

                            {/* Leadership and Extracurricular Activities */}
                            <h3>Leadership and Extracurricular Activities</h3>
                            <p className="fw-normal">
                                Hansika has demonstrated strong leadership throughout his career:
                                <ul>
                                    <li>Vice President of Welfare Division at CodeGen International (2020)</li>
                                    <li>National Coordinator for AIESEC in Sri Lanka (2016-2017)</li>
                                    <li>Organizer of Career Day and Robotics Stall at EXMO Exhibition, University of Moratuwa</li>
                                </ul>
                            </p>

                            {/* Personal Life and Interests */}
                            <h3>Personal Life and Interests</h3>
                            <p className="fw-normal">
                                Outside his professional and academic pursuits, Hansika enjoys:
                                <ul>
                                    <li>Traveling and hiking – exploring Zion National Park and Bryce Canyon.</li>
                                    <li>Anime and pop culture – a fan of Steins;Gate, Attack on Titan, and Fullmetal Alchemist.</li>
                                    <li>Soccer – actively plays and follows Manchester United in the English Premier League.</li>
                                    <li>Coffee brewing – a daily ritual of café lattes using low and medium roast beans.</li>
                                </ul>
                            </p>

                            {/* Closing Statement */}
                            <p className="fw-normal">
                                With a unique blend of industry experience, research expertise, and leadership, Hansika is dedicated to advancing secure computing and AI-driven security solutions.
                            </p>
                        </div>
                    </div>
                </HanzFullWidthContainer>
            </div>
    );
}
