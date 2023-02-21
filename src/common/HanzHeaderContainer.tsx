import React from 'react';

export function HanzHeaderContainer(props: any) {
    return <div className="container shadow-sm hanz-container">
                <h4 className="fw-bold text-secondary hanz-ssection-header">{props.title}</h4>
                {props.children}
    </div>
}