import React from 'react';
import {HanzSpaciousContainer} from "../common/HanzSpaciousContainer";
import {HomeExp} from "../components/HomeExp";
import {HomePub} from "../components/HomePub";
import {HomeEdu} from "../components/HomeEdu";
import {HomeAward} from "../components/HomeAward";
import {HomeVol} from "../components/HomeVol";
import {HanzFullWidthContainer} from "../common/HanzFullWidthContainer";

export function Experience() {
    return (<div className="container">
            <div className="row">
                <HanzFullWidthContainer>
                    <HomeExp></HomeExp>
                </HanzFullWidthContainer>
            </div>
        </div>
);
}