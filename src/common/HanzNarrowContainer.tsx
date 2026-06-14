import React from 'react';

interface HanzNarrowContainerProps {
    children: React.ReactNode;
}

export function HanzNarrowContainer({ children }: HanzNarrowContainerProps) {
    const containerClass = "col-md-4";
    return <div className={containerClass}>{children}</div>;
}
