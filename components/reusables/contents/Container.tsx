import { cn } from '@/utils/cn';
import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, className = '', ...attributes }) => {
    return (
        <div className={cn(`w-full max-w-7xl mx-auto p-2 sm:p-4 lg:p-6 `, className)} {...attributes}>
            {children}
        </div>
    );
};

export default Container;
