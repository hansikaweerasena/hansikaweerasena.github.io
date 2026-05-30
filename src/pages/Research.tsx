import React from 'react';
import { HanzFullWidthContainer } from "../common/HanzFullWidthContainer";
import { HanzHeaderContainer } from "../common/HanzHeaderContainer";
import publicationsData from "../data/publications.json";

const scholarUrl = "https://scholar.google.com/citations?user=ZN96WzcAAAAJ&hl=en";

type Publication = {
    title: string;
    venue?: string;
    authors?: string[];
    downloadLink?: string;
    proceedingLink?: string;
    link?: string;
};

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
        title: "Design and Orchestration for Modular and Heterogeneous Quantum Computing Architectures",
        image: "img/article/qc.jpg",
        description: "This project studies system-level architecture and orchestration for heterogeneous quantum computing, with emphasis on modular quantum systems, interconnects, scheduling, and scalable execution models.",
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
            },
            {
                title: "Towards Efficient Synthesis of Quantum Graph States by Fusing Graph Motifs",
                venue: "Under review, IEEE International Conference on Quantum Computing and Engineering (QCE), 2026",
                authors: ["Tingxiang Ji", "Hansika Weerasena", "Demitry Farfurnik", "Jianqing Liu"],
            },
        ],
    },
    {
        title: "Compositional Security Verification of Trusted Execution Environments",
        image: "img/article/tee.png",
        description: "This SRC-funded project develops compositional methods for verifying Trusted Execution Environments. The work combines architecture modeling, security property generation, abstraction, and property checking to reason about confidentiality, integrity, and availability in confidential computing platforms.",
        tags: ["Computer Architecture", "Systems Security", "Virtualization", "Formal Verification", "Property Checking", "Symbolic Execution"],
        publications: projectPublicationList([
            "Formal Verification of Virtualization-based Trusted Execution Environments",
            "Security Assertions for Trusted Execution Environments",
        ]).concat([
            {
                title: "Formal Verification of Secure Encrypted Virtualization",
                venue: "Under review, ACM Transactions on Embedded Computing Systems (TECS), 2026",
                authors: ["Hansika Weerasena", "Amitabh Das", "Prabhat Mishra"],
            },
        ]),
    },
    {
        title: "Design of Secure and Trustworthy Network-on-Chip Architectures",
        image: "img/article/survey.png",
        description: "This NSF-funded project focuses on security and privacy of on-chip communication across diverse architectures and interconnect technologies. The work spans threat modeling, attacks, countermeasures, secure routing, traffic analysis, and ML-assisted defenses for electrical, wireless, and optical NoC systems.",
        tags: ["Computer Architecture", "Computer & Network Security", "On-Chip Interconnects", "Cryptography", "Machine Learning", "gem5", "Noxim"],
        publications: projectPublicationList([
            "Security of Electrical, Optical and Wireless On-Chip Interconnects",
            "Traffic Analysis Attacks on Wireless NoC-based SoCs",
            "Breaking On-Chip Communication Anonymity",
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
        image: "img/article/bio.png",
        description: "This project performs signal processing on real-world audio data sets of bird calls using low-complexity local processing suitable for embedded devices. It combines feature engineering and machine learning to enable continuous automatic species identification in resource-constrained monitoring systems.",
        tags: ["Applied Machine Learning", "Signal Processing", "Feature Engineering", "Embedded Systems", "Anomaly Detection"],
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

const allPublicationGroups = [
    { title: "Book Chapters", items: publicationsData.books },
    { title: "Journal Publications", items: publicationsData.journal },
    { title: "Conference Publications", items: publicationsData.conf },
    { title: "Preprints", items: publicationsData.preprints },
    { title: "Non-Refereed Manuscripts", items: publicationsData["non-ref"] },
    { title: "Patents", items: publicationsData.patents },
];

const presentationLinks = [
    {
        title: "Ph.D. dissertation presentation",
        links: [
            { label: "slides", href: "https://docs.google.com/presentation/d/1BWqnCaQIbYSQ8frPricOYRyN96jSnuRy/edit?usp=sharing&ouid=118323130311806292826&rtpof=true&sd=true" },
            { label: "pdf", href: "https://drive.google.com/file/d/1JGxpUIsdP-2dTNkT5BZHDCJh9df5TwFc/view?usp=sharing" },
        ],
    },
    {
        title: "Ph.D. candidacy presentation",
        links: [
            { label: "slides", href: "https://docs.google.com/presentation/d/12e8Cnxn5Q8rx2amy4kmuPDHeIG0srrOa/edit?usp=sharing&ouid=118323130311806292826&rtpof=true&sd=true" },
            { label: "pdf", href: "https://drive.google.com/file/d/1z79Rp1o83TJWaRLyLs-Qhfy5P593Lhu_/view?usp=sharing" },
        ],
    },
];

const conferenceTalks = [
    {
        title: "HOST, 2025",
        slides: "https://docs.google.com/presentation/d/1BIe_xkdh-cH8DHpqJ9tsQvG5i2GzCZrp/edit?usp=sharing&ouid=118323130311806292826&rtpof=true&sd=true",
        pdf: "https://drive.google.com/file/d/1ob0iaKIBMBMd2UiYDUorpjNs6hQrcEHH/view?usp=sharing",
    },
    {
        title: "CASES, 2024",
        slides: "https://docs.google.com/presentation/d/1AmPho0UI0HvyTKnie0kMdXJ8LP2RHdWK/edit?usp=sharing&ouid=118323130311806292826&rtpof=true&sd=true",
        pdf: "https://drive.google.com/file/d/1-lHifrqfyOARYo0PjL6u_NqqS9PcXJSF/view?usp=sharing",
    },
    {
        title: "ISQED, 2024",
        slides: "https://docs.google.com/presentation/d/1HWjWYn-D6rgzeJnFhk0u8QK4kRES2snR/edit?usp=sharing&ouid=118323130311806292826&rtpof=true&sd=true",
        pdf: "https://drive.google.com/file/d/1GSTvsSacNVig5n50BdF5EfuRJ6wZYb9E/view?usp=sharing",
    },
    {
        title: "HOST, 2022",
        slides: "https://docs.google.com/presentation/d/1BCrFYeKKnaeYNpPn8EujfTxZ4rYYBKtR/edit?usp=sharing&ouid=118323130311806292826&rtpof=true&sd=true",
        pdf: "https://drive.google.com/file/d/1LsVd9YnX2LL0wioYE5xUtdXwYiC1vdy0/view?usp=sharing",
    },
];

function PublicationList({ items }: { items: Publication[] }) {
    return (
        <ol className="hanz-research-publication-list">
            {items.map((pub, index) => (
                <li key={`${pub.title}-${index}`}>
                    <span className="hanz-research-publication-index">[{index + 1}]</span>
                    <span>
                        {pub.authors && `${pub.authors.join(", ")}. `}
                        <b>{pub.title}</b>
                        {pub.venue && `, ${pub.venue}`}
                        {(pub.downloadLink || pub.proceedingLink || pub.link) && (
                            <>
                                {" "}
                                <a href={pub.downloadLink || pub.proceedingLink || pub.link} target="_blank" rel="noopener noreferrer">
                                    link
                                </a>
                            </>
                        )}
                    </span>
                </li>
            ))}
        </ol>
    );
}

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
                            My interests lie at the intersection of computer architecture, quantum computing, computer networks, systems security, and machine learning for systems.
                            My research vision is to develop scalable, efficient, and secure computing architectures, interconnects, and system-level orchestration for emerging classical and quantum systems in order to improve the performance, reliability, and trustworthiness of next-generation computing infrastructure.
                            During my doctoral studies and postdoctoral research, I have had the chance to contribute to amazing projects and collaborate with amazing people.
                        </p>
                    </HanzHeaderContainer>

                    <HanzHeaderContainer title="Research Projects">
                        {projects.map((project) => (
                            <div className="container shadow-sm hanz-container hanz-research-project-container" key={project.title}>
                                <img className="hanz-research-project-img" src={project.image} alt={project.title}/>
                                <h4 className="fw-bold text-secondary hanz-section-header">{project.title}</h4>
                                <p className="fw-normal">{project.description}</p>
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

                    <HanzHeaderContainer title="Publications">
                        <div className="text-end hanz-research-section-action">
                            <a href={scholarUrl} target="_blank" rel="noopener noreferrer">Google Scholar</a>
                        </div>
                        {allPublicationGroups.map((group) => (
                            <div key={group.title}>
                                <h5 className="fw-semibold mt-3">{group.title}</h5>
                                <PublicationList items={group.items}/>
                            </div>
                        ))}
                    </HanzHeaderContainer>

                    <HanzHeaderContainer title="Presentations and Conference Talks">
                        <h5 className="fw-semibold">Presentation Links</h5>
                        <ul>
                            {presentationLinks.map((item) => (
                                <li key={item.title}>
                                    {item.title}{" "}
                                    {item.links.map((link) => (
                                        <span key={link.label}>
                                            [<a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>]{" "}
                                        </span>
                                    ))}
                                </li>
                            ))}
                        </ul>

                        <h5 className="fw-semibold mt-3">Conference Talks</h5>
                        <ul>
                            {conferenceTalks.map((talk) => (
                                <li key={talk.title}>
                                    {talk.title} [<a href={talk.slides} target="_blank" rel="noopener noreferrer">slides</a>] [<a href={talk.pdf} target="_blank" rel="noopener noreferrer">pdf</a>]
                                </li>
                            ))}
                        </ul>
                    </HanzHeaderContainer>
                </HanzFullWidthContainer>
            </div>
        </div>
    );
}
