import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext'; // Ensure the path is correct

interface HanzHeaderContainerProps {
    title: string;
    buttonText?: string;
    buttonPath?: string;
    children?: React.ReactNode;
}

export function HanzHeaderContainer(props: HanzHeaderContainerProps) {
    const navigate = useNavigate();
    const { theme } = useTheme();

    const handleButtonClick = () => {
        if (props.buttonPath) {
            navigate(props.buttonPath);
        }
    };

    return (
        <div className={`container shadow-sm hanz-container bg-${theme} text-${theme === 'light' ? 'dark' : 'white'}`}>
            <div className="row">
                <div className={props.buttonText ? "col-8" : ""}>
                    <h4 className={`fw-bold text-secondary hanz-section-header`}>{props.title}</h4>
                </div>
                {props.buttonText && (
                    <div className="col-4 text-end">
                        <button type="button" className="btn btn-link" onClick={handleButtonClick}>
                            {props.buttonText}
                        </button>
                    </div>

                )}
            </div>
            {props.children}
        </div>
    );
}
