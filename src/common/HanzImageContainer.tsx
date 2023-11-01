import React, { useState } from 'react';

export function HanzImageContainer(props: any) {
    const [isExpanded, setIsExpanded] = useState(false);

    const limitedText = props.text.substring(0, 100) + "..."; // Adjust 100 to the number of characters you want to show initially.

    return <div className="container shadow-sm hanz-container">
    <div className="row">
    <div className="col-2"><img className="hanz-img-responsive"/></div>
        <div className="col">
    <div className="card">
    <div className="card-body"><span className="badge bg-primary">Conference</span>
        <h4 className="card-title">Lightweight Encryption using Chaffing and Winnowing with All-or-Nothing
        Transform for Network-on-Chip Architectures</h4>
    <h6 className="text-muted card-subtitle mb-2"><span style={{color: 'rgb(33, 37, 41)'}}>2021 IEEE International Symposium on Hardware Oriented Security and Trust (HOST)</span>
    </h6><span className="badge bg-primary">Hansika Weerasena</span><span className="badge bg-primary">Subodha Charles</span><span
    className="badge bg-primary">Prabath Mishra</span>
        <p className="card-text">
            {isExpanded ? props.text : limitedText}
        </p>
        <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "See Less" : "See More"}
        </button>
        <a className="card-link" href="#">Download</a><a
        className="card-link" href="#">View Proceedings</a>
    </div>
    </div>
    </div>
    </div>
    </div>;
}
