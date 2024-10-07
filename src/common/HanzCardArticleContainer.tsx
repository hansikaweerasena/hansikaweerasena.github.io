import React from 'react';
import { useTheme } from '../ThemeContext';

interface HanzCardArticleContainerProps {
    img: string;
    title: string;
    date: string;
    text: string;
    articleLink: string;
    categories: string[]
    author: "Hansika Weerasena"
    authorImage: "https://cdn-images-1.medium.com/fit/c/150/150/1*FrxzYzpSRpb8Soompovl1w.png"
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
                                        <hr></hr>
                                        <p className="card-text">{props.text}</p>
                                        <div className="mb-2">
                                            {props.categories && props.categories.map((category, index) => (
                                                <span key={index} className="badge bg-secondary me-1">{category}</span>
                                            ))}
                                        </div>
                                        {/* Author Information at the Bottom */}
                                        <div className="d-flex align-items-center mt-3">
                                            <img
                                                src={props.authorImage || 'https://via.placeholder.com/40'}
                                                alt={props.author}
                                                className="rounded-circle me-2"
                                                width="40"
                                                height="40"
                                            />
                                            <div>
                                                <span className="fw-bold">{props.author}</span>
                                                <div className="text-muted" style={{fontSize: '0.9em'}}>
                                                    {props.date}
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="read-article mt-4">
                                            <a className="d-flex justify-content-between align-items-center text-decoration-none fw-bold"
                                               target="_blank"
                                               rel="noopener noreferrer"
                                               href={props.articleLink}
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
                                        {/*<a className="card-link" target="_blank" rel="noopener noreferrer" href={props.articleLink}>Go to Article</a>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
                    }
