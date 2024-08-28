import React from 'react';
import { useTheme } from '../ThemeContext';

interface HanzContainerProps {
    children: React.ReactNode;
}

export function HanzContainer({ children }: HanzContainerProps) {
    const { theme } = useTheme();
    const containerClass = `container shadow-sm hanz-container ${theme === 'light' ? 'hanz-container-light' : 'hanz-container-dark'}`;
    return <div className={containerClass}>{children}</div>;
}
