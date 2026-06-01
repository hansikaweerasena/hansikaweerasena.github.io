import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar";
import {Footer} from "./components/Footer";
import {Home} from "./pages/Home"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Experience} from "./pages/Experience";
import {NotFound} from "./pages/NotFound";
import {About} from "./pages/About";
import {Publications as PublicationsLegacy} from "./pages/Publications";
import {Research} from "./pages/Research";
import {ResearchPublications} from "./pages/ResearchPublications";
import {News} from "./pages/News";
import {ThemeProvider} from './ThemeContext';
import {Blog} from "./pages/Blog";


function App() {

    return (
        <ThemeProvider>
            <Router>
                <div className={`App`}>
                    <NavBar></NavBar>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/experience" element={<Experience/>}/>
                        <Route path="/research" element={<Research/>}/>
                        <Route path="/publications" element={<ResearchPublications/>}/>
                        <Route path="/publicationslegacy" element={<PublicationsLegacy/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                    <Footer></Footer>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
