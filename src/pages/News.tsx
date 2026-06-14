import React from 'react';
import { HanzHeaderContainer } from "../common/HanzHeaderContainer";
import data from "../data/recent.json";

export function News() {
    const recentHighlights = data.recentHighlights;

    return (
        <div className="container">
            <HanzHeaderContainer title="News">
                <ul className="hanz-news-list">
                    {recentHighlights.map((highlight, index) => (
                        <li key={index}>
                            {highlight.descriptions.map((desc, descIndex) => (
                                <span key={descIndex}>
                                    {desc.preText}
                                    {desc.link && <a href={desc.link} target="_blank" rel="noopener noreferrer">{desc.linkText}</a>}
                                    {desc.postText}
                                </span>
                            ))}
                        </li>
                    ))}
                </ul>
            </HanzHeaderContainer>
        </div>
    );
}
