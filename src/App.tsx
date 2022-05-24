import React from 'react';
import './App.css';
import logo from './assets/img/photo.jpeg';
import profile_photo from './assets/img/photo_no_back.jpg';

function App() {
  return (
    <div className="App">
      <nav id="hanz-navbar" className="navbar navbar-light navbar-expand-md fixed-top py-3">
        <div className="container"><a className="navbar-brand d-flex align-items-center" href="#"><span><span><img
            id="hanz-navbar-img" className="rounded-circle" src={logo}/></span>Hansika Weerasena</span></a>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-2"><span
              className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
          <div id="navcol-2" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Research</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="hanz-home-about-pre" className="container"></div>

      <div className="container">
        <div className="row">
          <div className="col col-lg"></div>
          <div className="col text-center"><img id="hanz-home-about-img" className="rounded-circle"
                                                src={profile_photo}/></div>
          <div className="col-lg-4 text-center">
            <h1 className="fs-2 fw-bold text-center">Hansika Weerasena</h1>
            <h1 id="hanz-home-about-home">Computer Science Researcher | Engineer | Traveller</h1>
            <p id="hanz-home-about-p" className="fw-normal text-center">Hansika is a PhD Candidate at the Department of
              Computer &amp; Information Science &amp; Engineering, University of Florida, researching on communication
              security, network-on-chip and computer architecture.</p>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
