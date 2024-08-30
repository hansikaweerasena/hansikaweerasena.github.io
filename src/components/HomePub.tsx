import React from 'react';
import {HanzHeaderContainer} from "../common/HanzHeaderContainer";
import {useTheme} from "../ThemeContext";
import data from '../data/publications.json';

export function HomePub() {
    const { theme } = useTheme();

    const listGroupClass = `list-group bg-${theme} text-${theme === 'light' ? 'dark' : 'white'}`;
    const listItemClass = `list-group-item bg-${theme} text-${theme === 'light' ? 'dark' : 'white'} hanz-group-item`;

    const confs = data.conf
    const journals = data.journal
    const patents = data.patents

    const formatAuthors = (authors: string[]): string => {
        if (authors.length === 0) {
            return "";
        }
        // Split the first author's name into parts
        const nameParts = authors[0].split(" ");
        const firstNameInitial = nameParts[0][0]; // First character of first name
        const lastName = nameParts.pop()!; // Last element of the split, which is the last name

        if (authors.length === 1) {
            return `${firstNameInitial}. ${lastName}`; // Return the formatted name if only one author
        } else {
            return `${firstNameInitial}. ${lastName} et al.`; // Append 'et al.' if more than one author
        }
    };

    return (
        <HanzHeaderContainer title="Publications" buttonText="View All" buttonPath={"publications"}>
            <ul className={listGroupClass}>
                <li className={listItemClass}><span className="fw-bold">Journal Proceedings <span
                    className="badge bg-secondary">{journals.length}</span></span>
                    <ul className={listGroupClass}>
                    {journals.slice(0, 2).map((journal, index) => (
                            <li key={index} className={listItemClass}>
                                {journal.title} - {formatAuthors(journal.authors)}, {journal.venue}
                            </li>
                        ))}
                    </ul>
                </li>
                <li className={listItemClass}><span className="fw-bold">Conference Proceedings<span
                    className="badge bg-secondary">{confs.length}</span></span>
                    <ul className={listGroupClass}>
                    {confs.slice(0, 2).map((conf, index) => (
                            <li key={index} className={listItemClass}>
                                {conf.title} - {formatAuthors(conf.authors)}, {conf.venue}
                            </li>
                        ))}
                    </ul>
                </li>
                <li className={listItemClass}><span className="fw-bold">Patents
                <span className="badge bg-secondary">{patents.length}</span></span>
                    <ul className={listGroupClass}>
                    {patents.slice(0, 2).map((patent, index) => (
                            <li key={index} className={listItemClass}>
                                {patent.title} - {formatAuthors(patent.authors)}, {patent.venue}
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </HanzHeaderContainer>
    );
}