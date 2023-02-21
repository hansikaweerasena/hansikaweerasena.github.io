import React from 'react';

export function HanzHeaderContainer(props: any) {
    return <div className="container shadow-sm hanz-container">
        <div className="row">
            <div className="col-8">
                <h4 className="fw-bold text-secondary hanz-ssection-header">{props.title}</h4>
            </div>
            {props.buttonText ?
            <div className="col-4 text-end">
                <button type="button" className="btn btn-link disabled">{props.buttonText}</button>
            </div> : ''}
        </div>
        {props.children}
    </div>
}