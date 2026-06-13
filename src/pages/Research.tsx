import React from 'react';
import { HanzFullWidthContainer } from "../common/HanzFullWidthContainer";
import { HanzHeaderContainer } from "../common/HanzHeaderContainer";
import publicationsData from "../data/publications.json";
import { Publication, PublicationList } from "../common/ResearchPublicationList";

type Project = {
    title: string;
    image: string;
    description: string;
    tags: string[];
    publications: Publication[];
};

const findPublication = (titlePart: string): Publication | undefined => {
    const allItems = [
        ...publicationsData.books,
        ...publicationsData.journal,
        ...publicationsData.conf,
        ...publicationsData.preprints,
        ...publicationsData["non-ref"],
        ...publicationsData.patents,
    ];

    return allItems.find((item: Publication) => item.title.includes(titlePart));
};

const projectPublicationList = (titles: string[]): Publication[] => {
    return titles
        .map(findPublication)
        .filter((item): item is Publication => Boolean(item));
};

const projects: Project[] = [
    {
        title: "Architecture and Systems Methods for Heterogeneous and Modular Quantum Computing Platforms",
        image: "img/project/hqc.png",
        description: "Scalable quantum computing was long framed as a race to build larger, lower-error homogeneous processors. Today, that view is shifting as industry roadmaps increasingly move toward modular quantum architectures. At the same time, quantum modalities such as superconducting qubits, neutral atoms, trapped ions, and photonics are advancing rapidly, each with different strengths in gate speed, coherence, connectivity, communication, and scalability. Since no single modality is ideal for all quantum computing tasks, these complementary advantages motivate heterogeneous and modular quantum computing.\n\nHowever, heterogeneous quantum computing requires system-level methods to effectively harness the advantages provided by heterogeneity. In this project, I build on my background in systems and architecture to develop architectural and system-level methods that can help make heterogeneous and modular quantum computing practical for future quantum systems. Specifically, this project focuses on systems-level co-design methods that translate hardware heterogeneity into realized space-time efficiency for fault-tolerant quantum computation. My current work emphasizes architecture abstractions, qubit scheduling, runtime orchestration, resource optimization, and interconnect-aware system co-design for heterogeneous and modular quantum computing.",
        tags: ["Computer Architecture", "Quantum Computing", "Distributed Systems", "Interconnects", "Scheduling"],
        publications: [
            ...projectPublicationList([
                "Quantum Computing Architectures",
            ]),
            {
                title: "A Learning-based Scheduler for Qubit Assignment in Heterogeneous Modular Quantum Computing Architectures",
                venue: "Under review, 2026",
                authors: ["Hansika Weerasena", "Jianqing Liu"],
            },
            {
                title: "Non-Abelian Mixer for QAOA on Hybrid Oscillator-Qubit Quantum Processors",
                venue: "Under review, IEEE Global Communications Conference (GLOBECOM), 2026",
                authors: ["Thinh Le", "Hansika Weerasena", "Jianqing Liu"],
                downloadLink: "https://arxiv.org/pdf/2605.30234v1",
            },
            {
                title: "Towards Efficient Synthesis of Quantum Graph States by Fusing Graph Motifs",
                venue: "Under review, IEEE International Conference on Quantum Computing and Engineering (QCE), 2026",
                authors: ["Tingxiang Ji", "Hansika Weerasena", "Demitry Farfurnik", "Jianqing Liu"],
                downloadLink: "https://arxiv.org/pdf/2606.02880",
            },
        ],
    },
    {
        title: "Compositional Security Verification of Trusted Execution Environments",
        image: "img/project/tee.png",
        description: "Trusted Execution Environments (TEEs) provide isolated execution environments for protecting sensitive code and data while they are in use. They are increasingly used in high-stakes domains such as banking systems to protect workloads from privileged software, including operating systems, hypervisors, and cloud providers. The security of a TEE rests on the correctness of the underlying hardware-software architecture—firmware, memory-protection mechanisms, isolation logic, and security enforcement—so if the architecture is buggy, incomplete, or incorrectly specified, the trust assumptions of the entire system can collapse.\n\nIn this project I modeled the system architecture of virtualization-based TEEs—spanning the security monitor, trusted platform, and cache and memory hierarchy—and verified their security properties. I took over the project's system modeling and design as the architecture lead, then applied formal methods to establish that the designs satisfy critical confidentiality, integrity, and isolation guarantees before deployment. Rather than treating verification as a monolithic task, the work uses compositional security verification, where complex TEE mechanisms are abstracted, decomposed, and verified through reusable security properties. The methodology we developed includes design-based and property-based abstraction, security-property and automatic security-assertion generation, symbolic execution, and property decomposition for verifying VM-based TEEs. These methods bridge the gap between informal architecture specifications and machine-checkable security guarantees, enabling systematic verification of TEE designs such as Intel TDX and AMD SEV-SNP.",
        tags: ["Computer Architecture", "Systems Security", "Virtualization", "Formal Verification", "Systems Modeling"],
        publications: [
            {
                title: "Formal Verification of Secure Encrypted Virtualization",
                venue: "Under review, ACM Transactions on Embedded Computing Systems (TECS), 2026",
                authors: ["Hansika Weerasena", "Amitabh Das", "Prabhat Mishra"],
                downloadLink: "https://arxiv.org/pdf/2606.01381",
            },
            ...projectPublicationList([
                "Security Assertions for Trusted Execution Environments",
                "Formal Verification of Virtualization-based Trusted Execution Environments",
            ]),
        ],
    },
    {
        title: "Designing Secure and Efficient On-Chip Communication Architectures",
        image: "img/project/noc_sec.png",
        description: "System-on-Chip (SoC) platforms are the computational backbone of a wide range of systems, from handheld devices to high-performance computing platforms. As applications become increasingly complex, modern SoCs integrate a growing number of heterogeneous Intellectual Property (IP) blocks, often sourced from multiple third-party vendors. For example, automotive and high-performance SoCs may contain hundreds of diverse IP blocks that must communicate efficiently and reliably. The on-chip communication architecture, typically known as a Network-on-Chip (NoC), is responsible for coordinating this communication across the system. Since the NoC connects many critical components, compromising the communication fabric can give an attacker broad visibility into system behavior and potential access to sensitive interactions across the SoC.\n\nThis project developed secure and efficient on-chip communication architectures for NoC-based SoCs. The goal was to enable trusted communication among heterogeneous and potentially third-party IP blocks while preserving the performance, area, and energy efficiency required for practical hardware deployment. This is challenging because conventional security mechanisms are often too expensive for resource-constrained on-chip networks, and emerging NoC technologies, including electrical, wireless, optical, and 3D interconnects, introduce different vulnerabilities, topologies, and threat models. I worked on multiple security requirements, including confidentiality, integrity, authentication, availability, and anonymity. My work in this direction studied both attacks and defenses, including spatio-temporal traffic analysis, side-channel leakage, and secure-by-design systems. I also considered the growing use of machine learning from both attacker and defender perspectives, specifically how sophisticated attacks can be launched using ML and how ML can be used for protection, such as runtime detection and localization of attacks. Together, these efforts aim to build trustworthy on-chip communication architectures for future heterogeneous SoCs.",
        tags: ["Computer Architecture", "Computer & Network Security", "On-Chip Interconnects", "Cryptography", "Machine Learning for Systems"],
        publications: projectPublicationList([
            "Traffic Analysis Attacks on Wireless NoC-based SoCs",
            "Security of Electrical, Optical and Wireless On-Chip Interconnects",
            "Breaking On-Chip Communication Anonymity",
            "Revealing CNN Architectures",
            "Lightweight Multicast Authentication",
            "Lightweight Encryption using Chaffing",
            "Secure Multi-Path Routing",
            "Topology-aware Detection and Localization",
            "Modeling and Exploration of Gain Competition",
            "Preserving Confidentiality and Anonymity",
        ]),
    },
    {
        title: "Audio Characterization for Bio Acoustic Monitoring Applications",
        image: "img/project/bioacoustics.png",
        description: "Bioacoustic monitoring enables continuous observation of wildlife and biodiversity through audio data collected in natural environments. However, deploying such systems in remote or resource-constrained settings is challenging because continuous audio recording generates large volumes of data, and transmitting all raw audio to a central server can be costly in terms of storage, bandwidth, energy, and processing time. At the same time, performing full audio analysis directly on low-cost sensor nodes is difficult due to limited computational resources.\n\nThis project explores lightweight audio characterization methods for scalable bioacoustic monitoring. The main idea is to reduce unnecessary data transmission through low-cost local processing at the sensor-node level, where candidate acoustic regions are identified before sending data for more detailed analysis. The selected audio segments can then be processed more effectively at the server level using preprocessing, segmentation, feature extraction, and machine learning-based classification. This edge-assisted monitoring approach aims to make long-term biodiversity monitoring more practical, efficient, and deployable in remote environments.",
        tags: ["Applied Machine Learning", "Signal Processing", "Feature Engineering", "Embedded Systems", "Edge Computing"],
        publications: projectPublicationList([
            "Continuous Automatic Bioacoustics Monitoring",
        ]),
    },
];

const collaborators = [
    {
        institution: "University of Florida",
        logo: "img/uf_logo.png",
        people: [
            "Prof. Prabhat Mishra",
            "Prof. Christina Boucher",
            "Dr. Hasini Witharana",
            "Dr. Subodha Charles",
            "Dr. Aruna Jayasena",
            "Sahan Sanjaya",
            "Hari Krishna Parvatham",
            "Matthew Randall",
            "Xiaoguo Jia",
            "Richard Bachmann",
            "Emmett Kogan",
            "Rohil Tuli",
            "Nathaniel Strand",
        ],
    },
    {
        institution: "North Carolina State University",
        logo: "img/ncsu_logo.png",
        people: [
            "Prof. Jianqing Liu",
            "Tingxiang Ji",
            "Prof. Demitry Farfurnik",
            "Thinh Le",
            "Julian Guam",
            "Dr. Shiqian Guo",
        ],
    },
    {
        institution: "CSIRO Australia",
        logoText: "CSIRO",
        people: ["Dr. Navinda Kottege"],
    },
    {
        institution: "University of Moratuwa",
        logo: "img/uom_logo.png",
        people: [
            "Dr. Sulochana Sooriarachchi",
            "Dr. Chandana Gamage",
        ],
    },
    {
        institution: "AMD",
        logoText: "AMD",
        people: ["Dr. Amitab Das"],
    },
    {
        institution: "IBM",
        logoText: "IBM",
        people: [
            "Dr. Nitin Pundir",
            "Dr. Peilin Song",
        ],
    },
    {
        institution: "Intel",
        logoText: "Intel",
        people: [
            "Dr. Hasini Witharana",
            "Dr. Sohrab Aftabjahani",
            "Dr. Parijat Mukherjee",
        ],
    },
];

const funding = [
    {
        sponsor: "National Science Foundation",
        logoText: "NSF",
        grants: [
            {
                title: "Trustworthy System-on-Chip Design using Secure On-Chip Communication Architecture",
                link: "https://www.cise.ufl.edu/research/cad/NoC.html",
                detail: "NSF SaTC-1936040, role: lead researcher",
            },
        ],
    },
    {
        sponsor: "Semiconductor Research Corporation",
        logoText: "SRC",
        grants: [
            {
                title: "Compositional Security Verification of Trusted Execution Environments",
                link: "https://www.cise.ufl.edu/research/cad/NoC.html",
                detail: "SRC grant 2022-HW-3128, roles: researcher and lead researcher",
            },
        ],
    },
];

function LogoTile({ logo, logoText, label }: { logo?: string; logoText?: string; label: string }) {
    return (
        <div className="hanz-research-logo-tile">
            {logo ? (
                <img src={logo} alt={label}/>
            ) : (
                <span className="hanz-research-logo-text">{logoText}</span>
            )}
            <span className="hanz-research-logo-label">{label}</span>
        </div>
    );
}

export function Research() {
    return (
        <div className="container">
            <div className="row">
                <HanzFullWidthContainer>
                    <HanzHeaderContainer title="Research Overview">
                        <p className="fw-normal hanz-research-lead">
                            I design and reason about communication and coordination in emerging computing systems. Specifically, my research vision is to develop scalable, secure, and intelligent computing architectures, interconnects, and system-level orchestration for emerging classical and quantum systems in order to improve the performance, reliability, and trustworthiness of next-generation computing infrastructure. My interests lie at the intersection of computer architecture, quantum computing, computer networks, systems security, and machine learning for systems. During my doctoral studies and postdoctoral research, I have had the opportunity to work on challenging research problems alongside talented collaborators.
                        </p>
                    </HanzHeaderContainer>

                    <HanzHeaderContainer title="Research Projects">
                        {projects.map((project) => (
                            <div className="container shadow-sm hanz-container hanz-research-project-container" key={project.title}>
                                <h4 className="fw-bold text-secondary hanz-section-header hanz-research-project-title">{project.title}</h4>
                                <img className="hanz-research-project-img" src={project.image} alt={project.title}/>
                                {project.description.split("\n\n").map((paragraph) => (
                                    <p className="fw-normal" key={`${project.title}-${paragraph.substring(0, 24)}`}>{paragraph}</p>
                                ))}
                                <div className="hanz-research-tag-list">
                                    {project.tags.map((tag) => (
                                        <span className="badge hanz-research-tag" key={`${project.title}-${tag}`}>{tag}</span>
                                    ))}
                                </div>
                                <h6 className="fw-semibold mt-3">Selected Publications</h6>
                                <PublicationList items={project.publications}/>
                            </div>
                        ))}
                    </HanzHeaderContainer>

                    <HanzHeaderContainer title="Collaborators">
                        <div className="hanz-research-logo-grid">
                            {collaborators.map((collaborator) => (
                                <details className="hanz-research-details" key={collaborator.institution}>
                                    <summary>
                                        <LogoTile logo={collaborator.logo} logoText={collaborator.logoText} label={collaborator.institution}/>
                                        <span className="hanz-research-see-more">See more</span>
                                    </summary>
                                    <ul>
                                        {collaborator.people.map((person) => (
                                            <li key={person}>{person}</li>
                                        ))}
                                    </ul>
                                </details>
                            ))}
                        </div>
                    </HanzHeaderContainer>

                    <HanzHeaderContainer title="Funding">
                        <div className="hanz-research-funding-list">
                            {funding.map((source) => (
                                <div className="hanz-research-funding-card" key={source.sponsor}>
                                    <LogoTile logoText={source.logoText} label={source.sponsor}/>
                                    <ul>
                                        {source.grants.map((grant) => (
                                            <li key={grant.title}>
                                                <a href={grant.link} target="_blank" rel="noopener noreferrer">{grant.title}</a>, {grant.detail}.
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </HanzHeaderContainer>

                </HanzFullWidthContainer>
            </div>
        </div>
    );
}
