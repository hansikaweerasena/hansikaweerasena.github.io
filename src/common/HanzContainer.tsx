import React from 'react';
import { useTheme } from '../ThemeContext';

interface HanzContainerProps {
    children: React.ReactNode;
}

export function HanzContainer({ children }: HanzContainerProps) {
    const { theme } = useTheme();
    const containerClass = `container shadow-sm hanz-container bg-${theme} text-${theme === 'light' ? 'dark' : 'white'}`;
    return <div className={containerClass}>{children}</div>;
}
