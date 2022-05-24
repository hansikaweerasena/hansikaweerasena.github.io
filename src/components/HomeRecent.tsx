import React from 'react';
import logo from "../assets/img/photo.jpeg";

export function HomeRecent() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <h3>Recent Highlights</h3>
                </div>
                <div className="col">
                    <ul>
                        <li>Received Gartner Group Graduate Fellowship for outstanding CISE Ph.D. students by CISE department of
                            University of Florida - Apr 2022
                        </li>
                        <li>Our paper &quot;Lightweight Encryption Using Chaffing and Winnowing with All-or-Nothing Transform for
                            Network-on-Chip Architectures&quot; was accepted at <a
                                href="https://ieeexplore.ieee.org/xpl/conhome/9702149/proceeding">2021 IEEE International Symposium
                                on Hardware Oriented Security and Trust (HOST)</a></li>
                        <li>Received full assistantship for PhD program in Computer Science (CISE) from University of Florida -
                            Jan 2021
                        </li>
                        <li>Our paper &quot;Continuous Automatic Bioacoustics Monitoring of Bird Calls with Local Processing on
                            Node Level&quot; was accepted at <a href="https://ieeexplore.ieee.org/xpl/conhome/8643125/proceeding">TENCON
                                2018 - 2018 IEEE Region 10 Conference</a>.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}