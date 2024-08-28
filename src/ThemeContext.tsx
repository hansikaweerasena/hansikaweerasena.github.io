import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the context type
type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
};

// Define props type for ThemeProvider
type ThemeProviderProps = {
    children: ReactNode;
};

// Create context with a default value
const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {}
});

// Custom hook for consuming the context
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    // Initialize theme from local storage or default to 'light'
    const [theme, setTheme] = useState<string>(() => localStorage.getItem('theme') || 'light');

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? '#ffffff' : '#202123';
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
