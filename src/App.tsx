import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar";
import {HomeAbout} from "./components/HomeAbout";
import {HomeRecent} from "./components/HomeRecent";
import {HomePub} from "./components/HomePub";
import {HomeEdu} from './components/HomeEdu';
import {Footer} from "./components/Footer";
import {HomeExp} from "./components/HomeExp";
import {HomeAward} from "./components/HomeAward";
import {HomeVol} from "./components/HomeVol";

function App() {
    return (
        <div className="App">
            <NavBar></NavBar>

            <HomeAbout></HomeAbout>
            <HomeRecent></HomeRecent>
            <HomePub></HomePub>
            <HomeEdu></HomeEdu>
            <HomeExp></HomeExp>
            <HomeAward></HomeAward>
            <HomeVol></HomeVol>
            <Footer></Footer>
        </div>
    );
}

export default App;
