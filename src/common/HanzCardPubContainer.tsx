import React from 'react';
import { useTheme } from '../ThemeContext';

interface HanzCardArticleContainerProps {
    img: string;
    title: string;
    text: string;
    downloadLink: string;
    proceedingLink: string;
    categories: string[];
    authors: string[];
    venue: string;
    location_date: string;
}

export function HanzCardArticleContainer(props: HanzCardArticleContainerProps) {
    const { theme } = useTheme();

    return (
                <div className="col-12 col-md-4">
                    <div className={`container shadow-sm hanz-container bg-${theme} text-${theme === 'light' ? 'dark' : 'white'}`}>
                        <div className="row">
                            <div style={{width: '100%', height: '200px'}}>
                                <img className="hanz-img-responsive" src={props.img} alt={props.title}/>
                            </div>

                            <div className={`card bg-${theme} text-${theme === 'light' ? 'dark' : 'white'}`}>
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                    <div className="mb-2">
                                        {props.authors && props.authors.map((category, index) => (
                                            <span key={index} className="badge me-1"
                                                  style={{backgroundColor: "#6B705C", color: "white"}}>{category}</span>
                                        ))}
                                    </div>
                                    {/* Venue Display */}
                                    {props.venue && (
                                        <div className="mb-2 text-start"> {/* Added text-start for left alignment */}
                                            <span
                                                className="badge text-wrap"
                                                style={{
                                                    maxWidth: '100%',
                                                    whiteSpace: 'normal',
                                                    wordBreak: 'break-word',
                                                    display: 'inline-block',
                                                    textAlign: 'left', // Ensure left alignment
                                                    backgroundColor: "#A3B18A", color: "black"
                                                }}
                                            >
                                            {props.venue}
                                            </span>
                                        </div>
                                    )}
                                    {/* Location & Date Display */}
                                    {props.location_date && (
                                        <div className="mb-2 text-start">
                                            <span
                                                className="badge bg-dark text-wrap"
                                                style={{
                                                    maxWidth: '100%',
                                                    whiteSpace: 'normal',
                                                    wordBreak: 'break-word',
                                                    display: 'inline-block',
                                                    textAlign: 'left'
                                                }}
                                            >
                                                {props.location_date}
                                            </span>
                                        </div>
                                    )}
                                    <hr></hr>
                                    <p className="card-text">{props.text}</p>
                                    <div className="mb-2">
                                        {props.categories && props.categories.map((category, index) => (
                                            <span key={index} className="badge me-1"
                                                  style={{backgroundColor: "#A68A64", color: "white"}}>{category}</span>
                                        ))}
                                    </div>
                                    <hr/>
                                    <div className="read-article mt-4">
                                        <a className="d-flex justify-content-between align-items-center text-decoration-none fw-bold"
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           href={props.downloadLink}
                                           style={{
                                               color: theme === 'light' ? 'rgb(33, 37, 41)' : 'white',
                                               letterSpacing: '0.2em'
                                           }}
                                        >
                                            <span>R E A D&nbsp;&nbsp;&nbsp;&nbsp;A R T I C L E</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 fill="currentColor" className="bi bi-arrow-right ms-3"
                                                 viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                      d="M10.293 1.5a.5.5 0 0 1 .707 0l4.5 4.5a.5.5 0 0 1 0 .707l-4.5 4.5a.5.5 0 0 1-.707-.707L13.793 6H1.5a.5.5 0 0 1 0-1h12.293l-3.5-3.5a.5.5 0 0 1 0-.707z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}
