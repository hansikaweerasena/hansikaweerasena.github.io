import React from 'react';

export type Publication = {
    title: string;
    venue?: string;
    location_date?: string;
    authors?: string[];
    downloadLink?: string;
    proceedingLink?: string;
    link?: string;
    year?: string;
};

export function getPublicationYear(pub: Publication): string {
    if (pub.year) {
        return pub.year;
    }

    const searchableText = [
        pub.venue,
        pub.location_date,
        pub.downloadLink,
        pub.proceedingLink,
        pub.link,
    ].filter(Boolean).join(" ");

    const fullYearMatch = searchableText.match(/20\d{2}/);
    if (fullYearMatch) {
        return fullYearMatch[0];
    }

    const arxivMatch = searchableText.match(/arxiv\.org\/(?:pdf|abs)\/(\d{2})\d{2}/i);
    if (arxivMatch) {
        return `20${arxivMatch[1]}`;
    }

    return "";
}

function PublicationItem({ pub, index }: { pub: Publication; index: number }) {
    const year = getPublicationYear(pub);
    const venueHasYear = Boolean(year && pub.venue?.includes(year));
    const authors = pub.authors?.map((author, authorIndex) => (
        <React.Fragment key={`${pub.title}-${author}`}>
            {author === "Hansika Weerasena" ? <u>{author}</u> : author}
            {authorIndex < (pub.authors?.length || 0) - 1 ? ", " : ". "}
        </React.Fragment>
    ));

    return (
        <li key={`${pub.title}-${index}`}>
            <span className="hanz-research-publication-index">[{index + 1}]</span>
            <span>
                {authors}
                <b>{pub.title}</b>
                {pub.venue && `, ${pub.venue}`}
                {year && !venueHasYear && `, ${year}`}
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
    );
}

export function PublicationList({ items, limit = 5 }: { items: Publication[]; limit?: number }) {
    const visibleItems = items.slice(0, limit);
    const hiddenItems = items.slice(limit);

    return (
        <div>
            <ol className="hanz-research-publication-list">
                {visibleItems.map((pub, index) => (
                    <PublicationItem pub={pub} index={index} key={`${pub.title}-${index}`}/>
                ))}
            </ol>
            {hiddenItems.length > 0 && (
                <details className="hanz-research-publication-more">
                    <summary>See more</summary>
                    <ol className="hanz-research-publication-list">
                        {hiddenItems.map((pub, index) => (
                            <PublicationItem pub={pub} index={index + limit} key={`${pub.title}-${index + limit}`}/>
                        ))}
                    </ol>
                </details>
            )}
        </div>
    );
}
