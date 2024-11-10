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
        <HanzHeaderContainer title="Publications" buttonText="V I E W &nbsp;&nbsp;&nbsp;&nbsp; A L L" buttonPath={"publications"}>
            <ul className={listGroupClass}>
                {[
                    { label: "Journal Proceedings", items: journals },
                    { label: "Conference Proceedings", items: confs },
                    { label: "Patents", items: patents }
                ].map((section, index) => (
                    <li key={index} className={listItemClass}>
                <span className="fw-bold">
                    {section.label} <span className="badge bg-secondary">{section.items.length}</span>
                </span>
                        <ul className={listGroupClass}>
                            {section.items.slice(0, 2).map((item, itemIndex) => (
                                <li key={itemIndex} className={listItemClass}>
                                    {item.title} - {formatAuthors(item.authors)}, {item.venue}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </HanzHeaderContainer>
    );
}