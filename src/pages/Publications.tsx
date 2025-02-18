import React, { useState, useEffect } from 'react';
import { HanzFullWidthContainer } from "../common/HanzFullWidthContainer";
import publicationsData from '../data/publications.json';
import {HanzCardArticleContainer} from "../common/HanzCardPubContainer"; // Update the path as necessary

export function Publications() {

    const extractFirstParagraph = (content: string, wordLimit: number = 500 ): string => {
        return content.length > wordLimit ? `${content.substring(0, wordLimit)}...` : content;
    };


    return (
        <div className="container">
            <div className="row">
                <HanzFullWidthContainer>
                    <div className="col">
                        <h1>Journal</h1>
                        <hr/>
                        <div className="row">
                            {publicationsData.journal.map((pub: any, index: React.Key) => (
                                <HanzCardArticleContainer
                                    key={`publication-${index}`}
                                    img={`img/article/${pub.img}`}
                                    title={pub.title}
                                    venue={pub.venue}
                                    text={extractFirstParagraph(pub.text)}
                                    authors={pub.authors}
                                    location_date={pub.location_date}
                                    downloadLink={pub.downloadLink}
                                    proceedingLink={pub.proceedingLink}
                                    categories={pub.keyWords}/>
                            ))}
                        </div>
                    </div>
                    <div className="col">
                        <h1>Conference</h1>
                        <hr/>
                        <div className="row">
                            {publicationsData.conf.map((pub: any, index: React.Key) => (
                                <HanzCardArticleContainer
                                    key={`publication-${index}`}
                                    img={`img/article/${pub.img}`}
                                    title={pub.title}
                                    venue={pub.venue}
                                    text={extractFirstParagraph(pub.text)}
                                    authors={pub.authors}
                                    location_date={pub.location_date}
                                    downloadLink={pub.downloadLink}
                                    proceedingLink={pub.proceedingLink}
                                    categories={pub.keyWords}
                                />
                            ))}
                        </div>
                    </div>
                        <div className="col">
                            <h1>Preprints</h1>
                            <hr/>
                            <div className="row">
                            {publicationsData.preprints.map((pre: any, index: React.Key) => (
                                <HanzCardArticleContainer
                                    key={`preprint-${index}`}
                                    img={`img/article/${pre.img}`}
                                    title={pre.title}
                                    venue={pre.venue}
                                    text={extractFirstParagraph(pre.text)}
                                    authors={pre.authors}
                                    location_date={pre.location_date}
                                    downloadLink={pre.downloadLink}
                                    proceedingLink={pre.proceedingLink}
                                    categories={pre.keyWords}
                                />
                            ))}
                        </div>
                        </div>
                </HanzFullWidthContainer>
            </div>
        </div>
    );
}
