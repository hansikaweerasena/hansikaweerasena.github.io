import React from 'react';
import {HanzNarrowContainer} from "../common/HanzNarrowContainer";
import {HomeMain} from "../components/HomeMain";
import {HomeRecent} from "../components/HomeRecent";
import {HomeInsta} from "../components/HomeInsta";
import {HanzSpaciousContainer} from "../common/HanzSpaciousContainer";
import {HomeExp} from "../components/HomeExp";
import {HomePub} from "../components/HomePub";
import {HomeEdu} from "../components/HomeEdu";
import {HomeAward} from "../components/HomeAward";
import {HomeVol} from "../components/HomeVol";
import {HomeAbout} from "../components/HomeAbout";
import {HomeService} from "../components/HomeService";

export function Home() {
    return (<div className="container">
            <div className="row">
                <HanzNarrowContainer>
                    <HomeMain></HomeMain>
                    <HomeAbout></HomeAbout>
                    <HomeRecent></HomeRecent>
                    <HomeService></HomeService>
                    <HomeInsta></HomeInsta>
                </HanzNarrowContainer>
                <HanzSpaciousContainer>
                    <HomeExp></HomeExp>
                    <HomePub></HomePub>
                    <HomeEdu></HomeEdu>
                    <HomeAward></HomeAward>
                    <HomeVol></HomeVol>
                </HanzSpaciousContainer>
            </div>
        </div>
);
}