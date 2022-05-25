import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar";
import {HomeAbout} from "./components/HomeAbout";
import {HomeRecent} from "./components/HomeRecent";
import {HomePub} from "./components/HomePub";
import {HomeEdu} from './components/HomeEdu';
import {Footer} from "./components/Footer";

function App() {
    return (
        <div className="App">
            <NavBar></NavBar>
            <HomeAbout></HomeAbout>
            <HomeRecent></HomeRecent>
            <HomePub></HomePub>
            <HomeEdu></HomeEdu>
            <Footer></Footer>
        </div>
    );
}

export default App;
