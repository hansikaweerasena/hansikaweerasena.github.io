import React from 'react';
import { useTheme } from '../ThemeContext';

interface HanzSpaciousContainerProps {
    children: React.ReactNode;
}

export function HanzSpaciousContainer({ children }: HanzSpaciousContainerProps) {
    const { theme } = useTheme();
    const containerClass = `col-md-8 bg-${theme} text-${theme === 'light' ? 'dark' : 'white'}`;
    return <div className={containerClass}>{children}</div>;
}
