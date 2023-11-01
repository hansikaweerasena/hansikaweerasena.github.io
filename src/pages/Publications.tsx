import React, { useState, useEffect } from 'react';
import { HanzFullWidthContainer } from "../common/HanzFullWidthContainer";
import { HanzArticleContainer } from "../common/HanzArticleContainer";
import publicationsData from '../data/publications.json'; // Update the path as necessary

export function Publications() {

    return (
        <div className="container">
            <div className="row">
                <HanzFullWidthContainer>
                    <div className="col">
                        <h1>Publications</h1>
                        <hr/>
                        {publicationsData.publications.map((pub : any, index : React.Key) => (
                            <HanzArticleContainer
                                key={`publication-${index}`}
                                img={`img/article/${pub.img}`}
                                type={pub.type}
                                title={pub.title}
                                venue={pub.venue}
                                text={pub.text}
                                authors={pub.authors}
                                downloadLink={pub.downloadLink}
                                proceedingLink={pub.proceedingLink}
                            />
                        ))}
                    </div>
                    <div className="col">
                        <h1>Preprints</h1>
                        <hr/>
                        {publicationsData.preprints.map((pre : any, index : React.Key) => (
                            <HanzArticleContainer
                                key={`preprint-${index}`}
                                img={`img/article/${pre.img}`}
                                type={pre.type}
                                title={pre.title}
                                venue={pre.venue}
                                text={pre.text}
                                authors={pre.authors}
                                downloadLink={pre.downloadLink}
                                proceedingLink={pre.proceedingLink}
                            />
                        ))}
                    </div>
                </HanzFullWidthContainer>
            </div>
        </div>
    );
}
