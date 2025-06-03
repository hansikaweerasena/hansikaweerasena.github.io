import React, { useState, useEffect } from 'react';
import { HanzFullWidthContainer } from "../common/HanzFullWidthContainer";
import publicationsData from '../data/publications.json';
import {HanzCardArticleContainer} from "../common/HanzCardPubContainer";
import {useTheme} from "../ThemeContext"; // Update the path as necessary

export function Publications() {

    const extractFirstParagraph = (content: string, wordLimit: number = 500 ): string => {
        return content.length > wordLimit ? `${content.substring(0, wordLimit)}...` : content;
    };

    const { theme } = useTheme();

    const imgSrc = theme === 'dark' ? 'img/article/overview_d.png' : 'img/article/overview_l.png';


    return (
        <div className="container">
            <div className="row">
                <HanzFullWidthContainer>
                    <div className="col">
                        <div className="row">
                            <h1>Research Overview</h1>
                            <div className="container shadow-sm hanz-container">
                                <div className="row">
                                    <div style={{width: '100%', height: '100%'}}>
                                        <img className="hanz-img-responsive" src={imgSrc} alt={"props.title"}/>
                                    </div>
                                    <div style={{marginTop: '1rem'}}/>
                                    <hr/>
                                    <p className="fw-normal">
                                        My research interests lie at the intersection of computer architecture, computer
                                        and network security, and applied machine learning for security. During my
                                        Ph.D.,
                                        I primarily focused on on-chip communication security, specifically
                                        vulnerability analysis,
                                        traffic monitoring, attack and countermeasure development, and designing
                                        secure-by-design
                                        architectures for networks-on-chip. You can find my candidacy presentation slides here
                                        ([<a href="https://drive.google.com/file/d/1z79Rp1o83TJWaRLyLs-Qhfy5P593Lhu_/view?usp=sharing" target="_blank" rel="noopener noreferrer">pdf</a>] |
                                        [<a href="https://docs.google.com/presentation/d/12e8Cnxn5Q8rx2amy4kmuPDHeIG0srrOa/edit?usp=sharing&ouid=118323130311806292826&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">slides</a>]).

                                        In addition, I have had the opportunity
                                        to collaborate on several exciting projects and people across related domains
                                        (see full collaboration list).
                                        These include research in confidential computing (trusted execution
                                        environments),
                                        bioinformatics, remote sensing and formal security verification.
                                    </p>
                                </div>
                                <h4>Research Grants</h4>
                                <p className="fw-normal mt-3">
                                    I'm currently working as a research assistant at <a
                                    href="https://www.cise.ufl.edu/research/cad/index.html" target="_blank"
                                    rel="noopener noreferrer">Embedded
                                    Systems Lab </a> at UF. I have been fortunate to be involved with the following
                                    research funding
                                    sources:
                                </p>
                                <ul>
                                    <li>
                                        <a href="https://www.cise.ufl.edu/research/cad/NoC.html" target="_blank"
                                           rel="noopener noreferrer">
                                            Trustworthy System-on-Chip Design using Secure On-Chip Communication
                                            Architecture
                                        </a>, a NSF funded research grant: SaTC-1936040 (role: lead researcher).
                                    </li>
                                    <li>
                                        <a href="https://www.cise.ufl.edu/research/cad/NoC.html" target="_blank"
                                           rel="noopener noreferrer">
                                            Compositional Security Verification of Trusted Execution Environments
                                        </a>, a semiconductor Research Corporation (SRC) grant 2022-HW-3128 (roles:
                                        researcher, lead
                                        researcher).
                                    </li>
                                </ul>

                                <h4 className="fw-semibold mt-4">Conference Talks</h4>
                                <ul>
                                    <li>
                                        HOST, 2025
                                        [<a
                                        href="https://docs.google.com/presentation/d/1BIe_xkdh-cH8DHpqJ9tsQvG5i2GzCZrp/edit?usp=sharing&ouid=118323130311806292826&rtpof=true&sd=true"
                                        target="_blank" rel="noopener noreferrer">slides</a>]
                                        [<a
                                        href="https://drive.google.com/file/d/1ob0iaKIBMBMd2UiYDUorpjNs6hQrcEHH/view?usp=sharing"
                                        target="_blank" rel="noopener noreferrer">pdf</a>]
                                    </li>
                                    <li>
                                        CASES, 2024
                                        [<a
                                        href="https://docs.google.com/presentation/d/1AmPho0UI0HvyTKnie0kMdXJ8LP2RHdWK/edit?usp=sharing&ouid=118323130311806292826&rtpof=true&sd=true"
                                        target="_blank" rel="noopener noreferrer">slides</a>]
                                        [<a
                                        href="https://drive.google.com/file/d/1-lHifrqfyOARYo0PjL6u_NqqS9PcXJSF/view?usp=sharing"
                                        target="_blank" rel="noopener noreferrer">pdf</a>]
                                    </li>
                                    <li>
                                        ISQED, 2024
                                        [<a
                                        href="https://docs.google.com/presentation/d/1HWjWYn-D6rgzeJnFhk0u8QK4kRES2snR/edit?usp=sharing&ouid=118323130311806292826&rtpof=true&sd=true"
                                        target="_blank" rel="noopener noreferrer">slides</a>]
                                        [<a
                                        href="https://drive.google.com/file/d/1GSTvsSacNVig5n50BdF5EfuRJ6wZYb9E/view?usp=sharing"
                                        target="_blank" rel="noopener noreferrer">pdf</a>]
                                    </li>
                                    <li>
                                        HOST, 2022
                                        [<a
                                        href="https://docs.google.com/presentation/d/1BCrFYeKKnaeYNpPn8EujfTxZ4rYYBKtR/edit?usp=sharing&ouid=118323130311806292826&rtpof=true&sd=true"
                                        target="_blank" rel="noopener noreferrer">slides</a>]
                                        [<a
                                        href="https://drive.google.com/file/d/1LsVd9YnX2LL0wioYE5xUtdXwYiC1vdy0/view?usp=sharing"
                                        target="_blank" rel="noopener noreferrer">pdf</a>]
                                    </li>
                                </ul>


                                <h4>Research Collaborations and Mentoring</h4>
                                <p className="fw-normal">
                                    During my Ph.D. and before that, I have been fortunate to collaborate with following
                                    amazing people:
                                </p>

                                <h6 className="fw-semibold mt-3">Academic and Faculty</h6>
                                <ul>
                                    <li>
                                        <b>Bioinfromatics</b> with <b>Prof. Christina Boucher</b> (UF, USA) <br/>
                                        Traditional, Computational biology pipelines typically involve two major steps:
                                        bioinformatics-based data analysis and subsequent biological interpretation or
                                        further experiments informed by the results. Even subtle software bugs, such as
                                        memory errors, pointer overflows, or crashes during read alignment, can silently
                                        propagate incorrect outputs in bioinformatics softwares. In this collaboration,
                                        we aim to provide a formal verification framework for bioinfromatics software.
                                        <br/>
                                        <b>Publications:</b> Briefings in Bioinformatics, 2025 - under minor revision
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <b>Remote Sensing</b> with <b>Dr. Navinda Kottage</b> (CSIRO, Australia) <br/>
                                        In this collaboration, we aim to enable automatic and continuous bioacoustic
                                        monitoring. Traditional, non-automated approaches face practical limitations
                                        such as the
                                        inability to perform continuous monitoring and challenges in accessing remote
                                        terrains.
                                        Even in automated systems, storage and communication overheads often hinder
                                        real-time
                                        monitoring. To overcome these drawbacks, we propose an automatic bioacoustic
                                        monitoring
                                        system that performs local feature extraction and classification. Our node-level
                                        processing
                                        approach significantly reduces both storage requirements and processing time,
                                        enabling
                                        efficient continuous monitoring.
                                        <br/>
                                        <b>Publications:</b> TENCON 2018 - IEEE Region 10 Conference
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Joint Proposal development for <b>3D and Heterogeneous Systems
                                        Security</b> with <b>Prof. John Jose</b> (IIT Guwahati, India) <br/>
                                    </li>
                                </ul>

                                <h6 className="fw-semibold mt-3">Industry Liaisons</h6>
                                <ul>
                                    <li>
                                        <b>AMD SEV verification </b> with <b>Dr. Amitab Das</b> (AMD, USA) <br/>
                                        In this and ongoing collaboration, we aim to formally verify AMD SEV under CIA
                                        (confidentiality,
                                        integrity, and availability) guarantees. We modeled formal notions for
                                        confidentiality,
                                        integrity, and availability notions for VM-based TEEs. Then we conduct
                                        abstraction on
                                        TEE specification, and we perform property checking to verify whether the TEE
                                        formal model
                                        satisfies the specified properties.
                                        <br/>
                                        <b>Publications:</b> Manuscript prepared (waiting for approval)
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <b>Large Language Models (LLMs) for security verification </b> with <b>Dr. Nitin
                                        Pundir</b> (IBM, USA) <br/>
                                        This is an ongoing collaboration, we aim to use large Language Models (LLMs) in
                                        the verification pipeline
                                        for trusted execution (e.g. FSM generation, Specification mining) to faster and
                                        semi-automated security
                                        verification for LLMs.
                                        <br/>
                                        <b>Publications:</b> N/A (Ongoing Collaboration)
                                    </li>
                                </ul>

                                <h6 className="fw-semibold mt-3">Peers</h6>
                                <ul>
                                    <li>
                                        <b>Trusted Execution </b> with <b>Dr. Hasini Witharana </b> (UF, USA) <br/>
                                        <b>Publications:</b> IEEE TCAD'24, DATE'25, CASES'24
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <b>Network-on-Chip Security </b> with <b>Dr. Subodha Charles </b> (UF,
                                        USA) <br/>
                                        <b>Publications:</b> HOST'22
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <b>Formal verification </b> with <b>Aruna Jayasena </b> (UF, USA) <br/>
                                        <b>Publications:</b> Briefings in Bioinformatics, 2025 - under minor revision
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <b>Accelerator Security </b> with <b>Sahan Sanjaya </b> (UF, USA) <br/>
                                        <b>Publications:</b> N/A (Ongoing Collaboration)
                                    </li>
                                </ul>


                                <h6 className="fw-semibold mt-3">Undergraduate Researchers and Mentoring</h6>
                                <ul>
                                    <li>
                                        <b> Secure routing for NoC</b> with <b>Matthew randall </b> (UF, USA),
                                        publication target for CASES'25
                                    </li>
                                    <li>
                                        <b> Graph Neural Network bases DDoS attack detection for NoC</b> with <b>Xiaoguo
                                        Jia </b> (UF, USA),
                                        under review at ACM TECS, 2024
                                    </li>
                                    <li>
                                        <b> Multicast on-chip communication </b> with <b>Richard Bachmann</b> (UF, USA),
                                        led to ISQED'24 publication
                                    </li>
                                    <li>
                                        <b> Design abstraction of Intel TDX </b> with <b> Emmett Kogan </b> (UF, USA),
                                        led to TCAD'24 publication
                                    </li>
                                    <li>
                                        <b> Wireless NoC Security </b> with <b>Rohil Tuli </b> (UF, USA)
                                    </li>
                                    <li>
                                        <b> Gem5 and Noxim simulation for NoC </b> with <b>Nathaniel Strand </b> (UF,
                                        USA)
                                    </li>
                                </ul>


                                <h6 className="fw-semibold mt-3">Other Mentoring Experience</h6>
                                <ul>
                                    <li>
                                        Mentored 20 plus interns and junior developers, overseeing daily activities and
                                        training.
                                    </li>
                                    <li>
                                        Regularly participant in UF's
                                        <a href="https://www.eng.ufl.edu/graduate/current-students/lunch-and-lab/"
                                           target="_blank" rel="noopener noreferrer">
                                            "Lunch and Lab with Grad Student"
                                        </a>
                                        program, inspiring undergraduates to pursue graduate studies.
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h1>Journal Publications</h1>
                        <hr/>
                        <div className="row">
                            {publicationsData.journal.map((pub: any, index: React.Key) => (
                                <HanzCardArticleContainer
                                    key={`publication-${index}`}
                                    img={`img/article/${pub.img}`}
                                    title={pub.title}
                                    venue={pub.venue}
                                    text={extractFirstParagraph(pub.text)}
                                    authors={pub.authors}
                                    location_date={pub.location_date}
                                    downloadLink={pub.downloadLink}
                                    proceedingLink={pub.proceedingLink}
                                    categories={pub.keyWords}/>
                            ))}
                        </div>
                    </div>
                    <div className="col">
                        <h1>Conference Publications</h1>
                        <hr/>
                        <div className="row">
                            {publicationsData.conf.map((pub: any, index: React.Key) => (
                                <HanzCardArticleContainer
                                    key={`publication-${index}`}
                                    img={`img/article/${pub.img}`}
                                    title={pub.title}
                                    venue={pub.venue}
                                    text={extractFirstParagraph(pub.text)}
                                    authors={pub.authors}
                                    location_date={pub.location_date}
                                    downloadLink={pub.downloadLink}
                                    proceedingLink={pub.proceedingLink}
                                    categories={pub.keyWords}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="col">
                        <h1>Preprints</h1>
                        <hr/>
                        <div className="row">
                            {publicationsData.preprints.map((pre: any, index: React.Key) => (
                                <HanzCardArticleContainer
                                    key={`preprint-${index}`}
                                    img={`img/article/${pre.img}`}
                                    title={pre.title}
                                    venue={pre.venue}
                                    text={extractFirstParagraph(pre.text)}
                                    authors={pre.authors}
                                    location_date={pre.location_date}
                                    downloadLink={pre.downloadLink}
                                    proceedingLink={pre.proceedingLink}
                                    categories={pre.keyWords}
                                />
                            ))}
                        </div>
                    </div>
                </HanzFullWidthContainer>
            </div>
        </div>
    );
}
