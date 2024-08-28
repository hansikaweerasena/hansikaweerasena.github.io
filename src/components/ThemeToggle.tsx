import React from 'react';
import { useTheme } from '../ThemeContext';

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="form-check form-switch" data-bs-toggle="tooltip" title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}>
            <input
                className="form-check-input"
                type="checkbox"
                id="theme-toggle-checkbox"
                onChange={toggleTheme}
                checked={theme === 'dark'}
                style={{ cursor: 'pointer' }} // Ensures the cursor changes to a pointer when hovering over the switch
            />
            <label className="form-check-label" htmlFor="theme-toggle-checkbox">
                {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
            </label>
        </div>
    );
};
