"use client";

import { forwardRef } from "react";
import { motion, MotionProps } from "framer-motion";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "accent" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionProps> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  href?: string;
  external?: boolean;
  motionProps?: MotionProps;
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      fullWidth = false,
      className = "",
      href,
      external = false,
      motionProps = {},
      ...props
    },
    ref
  ) => {
    const baseStyles = "btn inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
    
    const variantStyles = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
      accent: "bg-accent text-accent-foreground hover:bg-accent/90",
      outline: "border border-input bg-background hover:bg-muted hover:text-foreground",
    };
    
    const sizeStyles = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6",
      lg: "h-12 px-8 text-lg",
    };
    
    const widthStyle = fullWidth ? "w-full" : "";
    
    const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;

    const content = (
      <>
        {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
      </>
    );

    const defaultMotionProps = {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      transition: { duration: 0.2 },
    };

    const combinedMotionProps = { ...defaultMotionProps, ...motionProps };

    if (href) {
      return (
        <motion.div {...combinedMotionProps}>
          <Link
            href={href}
            className={buttonStyles}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            {content}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button ref={ref} className={buttonStyles} {...props} {...combinedMotionProps}>
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button }; 