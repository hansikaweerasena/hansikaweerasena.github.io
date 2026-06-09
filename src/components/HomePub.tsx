import React from 'react';
import {HanzHeaderContainer} from "../common/HanzHeaderContainer";
import {useTheme} from "../ThemeContext";

export function HomePub() {
    const { theme } = useTheme();

    const listGroupClass = `list-group bg-${theme} text-${theme === 'light' ? 'dark' : 'white'}`;
    const listItemClass = `list-group-item bg-${theme} text-${theme === 'light' ? 'dark' : 'white'} hanz-group-item`;

    const selectedSections = [
        {
            label: "Quantum Computing Architecture and Systems",
            items: [
                "Quantum Computing Architectures, in Design Automation for Quantum Computing, ed. Prabhat Mishra, Springer Nature, 2026.",
                "A Learning-based Scheduler for Qubit Assignment in Heterogeneous Modular Quantum Computing Architectures - H. Weerasena, J. Liu. Under review, 2026."
            ]
        },
        {
            label: "Secure Architectures and Interconnects",
            items: [
                "Security of Electrical, Optical, and Wireless On-chip Interconnects: A Survey - H. Weerasena, P. Mishra. ACM TODAES, 2024.",
                "Traffic Analysis Attacks on Wireless NoC-based SoCs - H. Weerasena, P. Mishra. IEEE HOST, 2025."
            ]
        }
    ];

    return (
        <HanzHeaderContainer title="Selected Publications" buttonText="V I E W &nbsp;&nbsp;&nbsp;&nbsp; A L L" buttonPath={"publications"}>
            <ul className={listGroupClass}>
                {selectedSections.map((section, index) => (
                    <li key={index} className={listItemClass}>
                <span className="fw-bold">
                    {section.label}
                </span>
                        <ul className={`${listGroupClass} list-group-flush`}>
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className={listItemClass}>
                                    <span className="me-2">•</span>{item}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </HanzHeaderContainer>
    );
}
