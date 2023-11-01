import React from 'react';

export function HanzArticleContainer(props: any) {
    return <div className="container shadow-sm hanz-container">
        <div className="row">
            <div className="col-2"><img className="hanz-img-responsive" src={props.img}/></div>
            <div className="col">
                <div className="card">
                    <div className="card-body"><span className="badge bg-primary">{props.type}</span>
                        <h4 className="card-title">{props.title}</h4>
                        <h6 className="text-muted card-subtitle mb-2"><span style={{color: 'rgb(33, 37, 41)'}}>{props.venue}</span>
                        </h6>
                        {props.authors.map((author: string, index: React.Key ) => (
                            <span key={index} className="badge bg-primary">{author}</span>
                        ))}
                        <p className="card-text">{props.text}</p><a className="card-link" target="_blank"  href={props.downloadLink}>Download</a><a
                            className="card-link"  target="_blank"  href={props.proceedingLink}>View Proceedings</a>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}