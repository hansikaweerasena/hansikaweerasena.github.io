import React from 'react';
import {HanzFullWidthContainer} from "../common/HanzFullWidthContainer";

export function NotFound() {
    return (<div className="container">
            <div className="row">
                <HanzFullWidthContainer>
                    <div className="row">
                        <div className="col">
                            <p> Page Not Found</p>
                        </div>
                    </div>
                </HanzFullWidthContainer>
            </div>
        </div>
);
}