import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const ModernButton = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '', 
  disabled = false,
  loading = false,
  animate = false,
  onClick,
  href,
  target,
  rel,
  ...props 
}) => {
  const variants = {
    primary: 'modern-button',
    secondary: 'modern-button modern-button--secondary',
    accent: 'modern-button modern-button--accent',
    ghost: 'bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-none',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50',
  };

  const sizes = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg',
  };

  const baseClasses = clsx(
    'inline-flex items-center justify-center font-medium rounded-md transition-all duration-150',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    // Override size for modern-button variants since they have built-in sizing
    !variants[variant].includes('modern-button') && sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    loading && 'cursor-wait',
    className
  );

  const buttonProps = {
    className: baseClasses,
    disabled: disabled || loading,
    onClick: onClick,
    ...props
  };

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </>
  );

  if (href) {
    const LinkComponent = animate ? motion.a : 'a';
    const linkProps = animate ? {
      whileHover: { y: -1 },
      whileTap: { y: 0 },
      transition: { duration: 0.15 }
    } : {};

    return (
      <LinkComponent
        href={href}
        target={target}
        rel={rel}
        {...buttonProps}
        {...linkProps}
      >
        {content}
      </LinkComponent>
    );
  }

  if (animate) {
    return (
      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ y: 0 }}
        transition={{ duration: 0.15 }}
        {...buttonProps}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <button {...buttonProps}>
      {content}
    </button>
  );
};

export default ModernButton;