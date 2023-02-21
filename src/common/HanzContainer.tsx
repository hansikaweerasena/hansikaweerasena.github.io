import React from 'react';

export function HanzContainer(props: any) {
    return <div className="container shadow-sm hanz-container">
            {props.children}
    </div>;
}