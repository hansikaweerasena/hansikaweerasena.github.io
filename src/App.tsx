import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar";
import {HomeMain} from "./components/HomeMain";
import {HomeRecent} from "./components/HomeRecent";
import {HomePub} from "./components/HomePub";
import {HomeEdu} from './components/HomeEdu';
import {Footer} from "./components/Footer";
import {HomeExp} from "./components/HomeExp";
import {HomeAward} from "./components/HomeAward";
import {HomeVol} from "./components/HomeVol";
import {HanzSpaciousContainer} from "./common/HanzSpaciousContainer";
import {HanzNarrowContainer} from "./common/HanzNarrowContainer";
import {HomeAbout} from "./components/HomeAbout";
import {HomeInsta} from "./components/HomeInsta";

function App() {
    return (
        <div className="App">
            <NavBar></NavBar>
            <div className="container">
                <div className="row">
                    <HanzNarrowContainer>
                        <HomeMain></HomeMain>
                        <HomeAbout></HomeAbout>
                        <HomeRecent></HomeRecent>
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
            <Footer></Footer>
        </div>
    );
}

export default App;
