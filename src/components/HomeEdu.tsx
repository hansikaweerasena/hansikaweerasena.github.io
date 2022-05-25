import React from 'react';
import uf_logo from "../assets/img/uf_logo.png";
import uom_logo from "../assets/img/uom_logo.png";
import {HanzContainer} from "../common/HanzContainer";

export function HomeEdu() {
    return (
        <HanzContainer>
            <div className="row">
                <div className="col-lg-3">
                    <h3>Education</h3>
                </div>
                <div className="col">
                    <div className="row hanz-edu-row">
                        <div className="col-lg-2 d-none d-lg-block"><img className="rounded-circle shadow-lg hanz-edu-logo" src={uf_logo}/></div>
                        <div className="col">
                            <h1 className="fs-5 hanz-edu-title">Doctor of Philosophy, Computer Science - University of Florida</h1>
                            <h1 className="fs-6 hanz-edu-subtitle"> </h1>
                            <p className="hanz-edu-para">Jan 2021 - Present <br/> Network on Chip Security | Advisor: Dr. Prabhat Mishra <br/>
                                Current GPA: 3.93 / 4.0</p>
                        </div>
                        <div className="col-lg-9"></div>
                    </div>
                    <hr/>
                    <div className="row hanz-edu-row">
                        <div className="col-lg-2 d-none d-lg-block"><img className="rounded-circle shadow-lg hanz-edu-logo" src={uom_logo}/></div>
                        <div className="col">
                            <h1 className="fs-5 hanz-edu-title">Bachelor of the Science of Engineering (Hons) - University of Moratuwa </h1>
                            <h1 className="fs-6 hanz-edu-subtitle"></h1>
                            <p className="hanz-edu-para">2013 - 2017 <br/> Computer Science and Engineering (CSE)<br/>
                                First Class | GPA -: 3.94 / 4.2</p>
                        </div>
                        <div className="col-lg-9"></div>
                    </div>
                    <hr/>
                    <button className="btn btn-link btn-sm col-12 fw-light shadow-sm" type="button" data-bs-target="#">
                        Show all Education
                    </button>
                </div>
            </div>
        </HanzContainer>
    );
}