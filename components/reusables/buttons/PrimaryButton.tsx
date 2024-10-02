"use client";
import React, { ReactNode, FC } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

// Define the types for the Button Props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    onClick?: () => void;
    className?: string;
    isOutlineAnimation?: boolean;
    type?: "button" | "submit" | "reset";
}

const PrimaryButton: FC<ButtonProps> = ({
    children,
    onClick,
    iconLeft,
    iconRight,
    className,
    isOutlineAnimation = false,
    ...props
}) => {
    // Define animation props separately
    const animations = {
        whileTap: { scale: 0.95 },
        whileHover: { scale: 1.1 },
        transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.3 },
    }

   
        return (
          <motion.button
            {...animations}
            className={cn(
              `className="flex items-center gap-2 bg-primary text-black px-4 md:px-8 py-[6px] md:py-2 rounded-2xl font-medium shadow-lg hover:bg-yellow-600 transition"`,
              className
            )}
            onClick={onClick}
            {...(props as any)}
          >
            {!!iconLeft && iconLeft}
            <span>{children}</span>
            {!!iconRight && iconRight}
          </motion.button>
        );
    
};

export default PrimaryButton;
