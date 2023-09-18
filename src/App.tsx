import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar";
import {Footer} from "./components/Footer";
import {Home} from "./pages/Home"


function App() {
    return (
        <div className="App">
            <NavBar></NavBar>
                <Home></Home>
            <Footer></Footer>
        </div>
    );
}

export default App;
