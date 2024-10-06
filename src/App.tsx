import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar";
import {Footer} from "./components/Footer";
import {Home} from "./pages/Home"
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import {Experience} from "./pages/Experience";
import {NotFound} from "./pages/NotFound";
import {About} from "./pages/About";
import {Publications} from "./pages/Publications";
import {ThemeProvider, useTheme} from './ThemeContext';
import {Blog} from "./pages/Blog";


function App() {

    return (
        <ThemeProvider>
            <div className={`App`}>
                <NavBar></NavBar>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/experience" element={<Experience/>}/>
                        <Route path="/publications" element={<Publications/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </Router>
                <Footer></Footer>
            </div>
        </ThemeProvider>
    );
}

export default App;
