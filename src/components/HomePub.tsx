import React from 'react';
import {HanzHeaderContainer} from "../common/HanzHeaderContainer";
import {useTheme} from "../ThemeContext";

export function HomePub() {
    const { theme } = useTheme();

    const listGroupClass = `list-group bg-${theme} text-${theme === 'light' ? 'dark' : 'white'}`;
    const listItemClass = `list-group-item bg-${theme} text-${theme === 'light' ? 'dark' : 'white'} hanz-group-item`;

    return (
        <HanzHeaderContainer title="Publications" buttonText="View All" buttonPath={"publications"}>
            <ul className={listGroupClass}>
                <li className={listItemClass}><span className="fw-bold">Journal Proceedings</span>
                    <ul className={listGroupClass}>
                        <li className={listItemClass}>Security of Electrical, Optical and Wireless On-Chip Interconnects: A Survey
                            H. Weerasena et al., ACM Transactions on Design Automation of Electronic Systems (TODAES) - Just Accepted
                        </li>
                    </ul>
                </li>
                <li className={listItemClass}><span className="fw-bold">Conference Proceedings</span>
                    <ul className={listGroupClass}>
                        <li className={listItemClass}>Lightweight Encryption using Chaffing and Winnowing with All-or-Nothing Transform
                            for Network-on-Chip Architectures H. Weerasena et al., 2021 IEEE International
                            Symposium on Hardware Oriented Security and Trust (HOST) - pp. 170-180
                        </li>
                        <li className={listItemClass}>Continuous Automatic Bioacoustics Monitoring of Bird Calls with Local Processing on
                            Node Level H. Weerasena et al., TENCON 2018 - 2018 IEEE Region 10 Conference, Jeju,
                            Korea (South), 2018, pp. 0235-0239
                        </li>
                    </ul>
                </li>
                <li className={listItemClass}><span className="fw-bold">Patents</span>
                    <ul className={listGroupClass}>
                        <li className={listItemClass}>Securing on-chip communication using chaffing and winnowing with all-or-nothing
                            transform P .Mishra, H. Weerasena and S. Charles, U.S. Provisional Patent
                            Application Serial No 63/275,552, filed October 22, 2022 (pending)
                        </li>
                    </ul>
                </li>
            </ul>
        </HanzHeaderContainer>
    );
}
