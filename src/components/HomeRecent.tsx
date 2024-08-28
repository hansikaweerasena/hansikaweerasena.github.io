import React from 'react';
import { HanzHeaderContainer } from "../common/HanzHeaderContainer";
import data from '../data/recent.json';

export function HomeRecent() {
    const recentHighlights = data.recentHighlights;

    // You can adjust the style here if you want a specific height different from Bootstrap defaults
    const listStyle = {
        maxHeight: '400px', // You can adjust this height as needed
    };

    return (
        <HanzHeaderContainer title="Recent Highlights">
            <ul className="overflow-auto" style={listStyle}>
                {recentHighlights.map((highlight, index) => (
                    <li key={index}>
                        {highlight.descriptions.map((desc, descIndex) => (
                            <span key={descIndex}>
                                {desc.preText}
                                {desc.link && <a href={desc.link}>{desc.linkText}</a>}
                                {desc.postText}
                            </span>
                        ))}
                    </li>
                ))}
            </ul>
        </HanzHeaderContainer>
    );
}
