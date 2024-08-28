import React from 'react';
import { useTheme } from '../ThemeContext';

interface HanzFullWidthContainerProps {
    children: React.ReactNode;
}

export function HanzFullWidthContainer({ children }: HanzFullWidthContainerProps) {
    const { theme } = useTheme();
    const containerClass = `col-md-12 bg-${theme} text-${theme === 'light' ? 'dark' : 'white'}`;
    return <div className={containerClass}>{children}</div>;
}
