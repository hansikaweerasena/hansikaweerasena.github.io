import React from 'react';
import { useTheme } from '../ThemeContext';

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            className="form-check form-switch"
            data-bs-toggle="tooltip"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '100%' }}>
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="theme-toggle-checkbox"
                    onChange={toggleTheme}
                    checked={theme === 'dark'}
                    style={{ cursor: 'pointer', margin: '0 auto' }}
                />
            </div>
            <label
                className="form-check-label mt-2"
                htmlFor="theme-toggle-checkbox"
                style={{ textAlign: 'center', width: '100%', color: theme === 'light' ? 'black' : 'white' }}
            >
                {theme === 'light' ? 'Go Dark' : 'Go Light'}
            </label>
        </div>
    );
};
