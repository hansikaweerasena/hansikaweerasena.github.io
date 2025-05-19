import React, { useState, useEffect } from 'react';
import { HanzFullWidthContainer } from "../common/HanzFullWidthContainer";
import publicationsData from '../data/publications.json';
import {HanzCardArticleContainer} from "../common/HanzCardPubContainer";
import {useTheme} from "../ThemeContext"; // Update the path as necessary

export function Publications() {

    const extractFirstParagraph = (content: string, wordLimit: number = 500 ): string => {
        return content.length > wordLimit ? `${content.substring(0, wordLimit)}...` : content;
    };

    const { theme } = useTheme();

    const imgSrc = theme === 'dark' ? 'img/article/overview_d.png' : 'img/article/overview_l.png';


    return (
        <div className="container">
            <div className="row">
                <HanzFullWidthContainer>
                    <div className="col">
                        <div className="row">
                            <h1>Research Overview</h1>
                            <div className="container shadow-sm hanz-container">
                                <div className="row">
                                    <div style={{width: '100%', height: '100%'}}>
                                        <img className="hanz-img-responsive" src={imgSrc} alt={"props.title"}/>
                                    </div>
                                    <div style={{marginTop: '1rem'}}/>
                                    <hr/>
                                    <p className="fw-normal">
                                        My research interests lie in computer architecture, computer and network
                                        security, and applied machine learning for security. During my Ph.D., I have
                                        worked on network-on-chip security, confidential computing (trusted execution
                                        environments), and security verification.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
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
