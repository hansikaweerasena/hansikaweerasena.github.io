import React from 'react';
import { HanzHeaderContainer } from "../common/HanzHeaderContainer";
import publicationsData from "../data/publications.json";
import { getPublicationYear, Publication } from "../common/ResearchPublicationList";

const scholarUrl = "https://scholar.google.com/citations?user=ZN96WzcAAAAJ&hl=en";

type PublicationWithType = Publication & {
    type?: string;
};

const publicationGroups: { title: string; id: string; items: PublicationWithType[] }[] = [
    { title: "Book Chapters", id: "book-chapters", items: publicationsData.books },
    { title: "Journal Articles", id: "journal-publications", items: publicationsData.journal },
    { title: "Conference Publications", id: "conference-publications", items: publicationsData.conf },
    { title: "Preprint and Under Review", id: "preprints", items: publicationsData.preprints },
    { title: "Non-Refereed Manuscripts", id: "non-refereed-manuscripts", items: publicationsData["non-ref"] },
    { title: "Patents", id: "patents", items: publicationsData.patents },
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

function PublicationCard({ publication, index }: { publication: PublicationWithType; index: number }) {
    const year = getPublicationYear(publication);
    const venueHasYear = Boolean(year && publication.venue?.includes(year));
    const link = publication.downloadLink || publication.proceedingLink || publication.link;

    return (
        <div className="hanz-publication-card">
            <h4>
                <span className="hanz-publication-index">[{index + 1}]</span>
                {link ? <a href={link} target="_blank" rel="noopener noreferrer">{publication.title}</a> : publication.title}
            </h4>
            {publication.authors && (
                <p className="hanz-publication-authors">
                    {publication.authors.map((author, index) => (
                        <React.Fragment key={`${publication.title}-${author}-${index}`}>
                            {author === "Hansika Weerasena" ? <u>{author}</u> : author}
                            {index < (publication.authors?.length || 0) - 1 ? ", " : ""}
                        </React.Fragment>
                    ))}
                </p>
            )}
            <p className="hanz-publication-venue">
                {publication.venue || publication.type || "Preprint"}
                {year && !venueHasYear && `, ${year}`}
            </p>
        </div>
    );
}

export function ResearchPublications() {
    return (
        <div className="container hanz-page">
            <header className="hanz-page-header hanz-publications-page-header">
                <h1>Publications</h1>
                <a href={scholarUrl} target="_blank" rel="noopener noreferrer">Google Scholar</a>
            </header>
            {publicationGroups.map((group) => (
                <HanzHeaderContainer title={group.title} key={group.id}>
                    <section id={group.id} className="hanz-publication-section">
                        <div className="hanz-publication-card-list">
                            {group.items.map((publication, index) => (
                                <PublicationCard publication={publication} index={index} key={publication.title}/>
                            ))}
                        </div>
                    </section>
                </HanzHeaderContainer>
            ))}

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
        </div>
    );
}
