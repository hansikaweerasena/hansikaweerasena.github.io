import React from 'react';
import './App.css';
import logo from './assets/img/photo.jpeg';
import profile_photo from './assets/img/photo_no_back.jpg';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light navbar-expand-md py-3" style={{height: '64px'}}>
        <div className="container"><a className="navbar-brand d-flex align-items-center" href="#"><span><span><img
            className="rounded-circle"
            style={{height: '32px', width: '32px', margin: '5px'}}
            src={logo}/></span>Hansika Weerasena</span></a>
          <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2"><span
              className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navcol-2">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Research</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container" style={{height: '100px'}}></div>
      <div className="container">
        <div className="row" style={{height: '189px'}}>
          <div className="col-lg"></div>
          <div className="col text-center"><img className="rounded-circle"
                                                style={{ height: '200px', margin: '5px', width: '200px' }}
                                                src={profile_photo}/></div>
          <div className="col-lg-4 text-center" style={{height: '220px'}}>
            <h1 className="fs-2 fw-bold text-center">Hansika Weerasena</h1>
            <h1 style={{fontSize: '20px'}}>Computer Science Researcher | Engineer | Traveller</h1>
            <p className="fw-normal text-center" style={{fontSize: '14px'}}>Hansika is a PhD Candidate at the Department
              of Computer &amp; Information Science &amp; Engineering, University of Florida, researching on
              communication security, network-on-chip and computer architecture.</p>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
