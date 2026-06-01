import React from 'react';
import { HanzFullWidthContainer } from "../common/HanzFullWidthContainer";
import { HanzHeaderContainer } from "../common/HanzHeaderContainer";
import publicationsData from "../data/publications.json";
import { PublicationList } from "../common/ResearchPublicationList";

const scholarUrl = "https://scholar.google.com/citations?user=ZN96WzcAAAAJ&hl=en";

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

export function ResearchPublications() {
    return (
        <div className="container">
            <div className="row">
                <HanzFullWidthContainer>
                    <HanzHeaderContainer title="Publications">
                        <div className="text-end hanz-research-section-action">
                            <a href={scholarUrl} target="_blank" rel="noopener noreferrer">Google Scholar</a>
                        </div>
                        {allPublicationGroups.map((group) => (
                            <div key={group.title}>
                                <h5 className="fw-semibold mt-3">{group.title}</h5>
                                <PublicationList items={group.items} limit={group.items.length}/>
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
