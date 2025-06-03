import React from 'react';
import {HanzHeaderContainer} from "../common/HanzHeaderContainer";

export function HomeService() {
    return (<HanzHeaderContainer title="Professional Services" buttonText="" buttonPath="">
        <strong>Technical Program Committee:</strong>
            <ul>
                <li>ACM/IEEE International Conference on Hardware/Software Codesign and System Synthesis
                    (<em>CODES+ISSS</em>) 2025
                </li>
            </ul>
            <strong>Reviewer:</strong>
            <ul>
                <li>IEEE Transactions on Computers, 2025 </li>
                <li>Design, Automation, and Test in Europe (<em>DATE</em>), 2024 and 2025</li>
                <li>IEEE International Symposium on Hardware Oriented Security and Trust (<em>HOST</em>), 2023 and 2024
            </li>
            <li>ACM/IEEE International Conference on Hardware/Software Codesign and System Synthesis
                (<em>CODES+ISSS</em>), 2022, 2023
            </li>
            <li>Engineering Research Unit (<em>ERU</em>) Symposium by University of Moratuwa, 2024</li>
            <li>International Multidisciplinary Engineering Research Conference (<em>MERCon</em>), 2022, 2025</li>
            <li>IESL Young Members’ Section Technical Conference, 2021</li>
        </ul>
    </HanzHeaderContainer>
);
}