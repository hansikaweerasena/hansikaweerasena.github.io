import React from 'react';
import {HanzContainer} from "../common/HanzContainer";
import {HanzHeaderContainer} from "../common/HanzHeaderContainer";

export function HomePub() {
    return (
        <HanzHeaderContainer title="Publications">
                    <ul className="list-group">
                        <li className="list-group-item hanz-group-item"><span className="fw-bold">Conference Proceedings</span>
                            <ul>
                                <li>Lightweight Encryption using Chaffing and Winnowing with All-or-Nothing Transform
                                    for Network-on-Chip Architectures H. Weerasena et al., 2021 IEEE International
                                    Symposium on Hardware Oriented Security and Trust (HOST) - pp. 170-180
                                </li>
                                <li>Continuous Automatic Bioacoustics Monitoring of Bird Calls with Local Processing on
                                    Node Level H. Weerasena et al., TENCON 2018 - 2018 IEEE Region 10 Conference, Jeju,
                                    Korea (South), 2018, pp. 0235-0239
                                </li>
                            </ul>
                        </li>
                        <li className="list-group-item hanz-group-item"><span className="fw-bold">Patents</span>
                            <ul>
                                <li>Securing on-chip communication using chaffing and winnowing with all-or-nothing
                                    transform P .Mishra, H. Weerasena and S. Charles, U.S. Provisional Patent
                                    Application Serial No 63/275,552, filed November 4, 2021 (pending)
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <hr/>
                    <button className="btn btn-outline-secondary btn-sm hanz-show-more col-12 fw-light shadow-sm" type="button" data-bs-target="#">
                        More about my research
                        <span className="hanz-svg-span">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="mercado-match"
                             data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                            <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
                        </svg>
                        </span>
                    </button>
        </HanzHeaderContainer>
    );
}