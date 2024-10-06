import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import {useTheme} from "../ThemeContext";

export function NavBar() {

    const { theme } = useTheme();

    return (
        <nav id="hanz-navbar" className={`navbar navbar-${theme} navbar-expand-md sticky-top py-3 bg-${theme} shadow-sm`}>
            <div className="container"><a className="navbar-brand d-flex align-items-center" href="#">
                <span><span>
                {/*<img id="hanz-navbar-img" className="rounded-circle" src={logo}/>*/}
                </span>
                Hansika Weerasena
            </span>
            </a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-2"><span
                    className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span>
                </button>
                <div id="navcol-2" className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/publications">Research</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                        <li className="nav-item d-flex align-items-center">
                            <ThemeToggle/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}