import React from 'react';

interface HanzSpaciousContainerProps {
    children: React.ReactNode;
}

export function HanzSpaciousContainer({ children }: HanzSpaciousContainerProps) {
    const containerClass = "col-md-8";
    return <div className={containerClass}>{children}</div>;
}
