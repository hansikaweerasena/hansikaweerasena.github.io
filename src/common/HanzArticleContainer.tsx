import React from 'react';
import { useTheme } from '../ThemeContext';

interface HanzArticleContainerProps {
    img: string;
    type: string;
    title: string;
    venue: string;
    authors: string[];
    text: string;
    downloadLink: string;
    proceedingLink: string;
}

export function HanzArticleContainer(props: HanzArticleContainerProps) {
    const { theme } = useTheme();

    return (
        <div className={`container shadow-sm hanz-container bg-${theme} text-${theme}`}>
            <div className="row">
                <div className="col-2">
                    <img className="hanz-img-responsive" src={props.img} alt={props.title} />
                </div>
                <div className="col">
                    <div className={`card bg-${theme} text-${theme === 'light' ? 'dark' : 'white'}`}>
                        <div className="card-body">
                            <span className={`badge bg-${theme === 'light' ? 'secondary' : 'primary'}`}>{props.type}</span>
                            <h4 className="card-title">{props.title}</h4>
                            <h6 className="text-muted card-subtitle mb-2">
                                <span style={{ color: theme === 'light' ? 'rgb(33, 37, 41)' : 'rgb(255, 255, 255)' }}>{props.venue}</span>
                            </h6>
                            {props.authors.map((author, index) => (
                                <span key={index} className={`badge bg-${theme === 'light' ? 'secondary' : 'primary'}`}>{author}</span>
                            ))}
                            <p className="card-text">{props.text}</p>
                            <a className="card-link" target="_blank" rel="noopener noreferrer" href={props.downloadLink}>Download</a>
                            <a className="card-link" target="_blank" rel="noopener noreferrer" href={props.proceedingLink}>View Proceedings</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
