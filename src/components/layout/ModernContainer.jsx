import React from 'react';
import { motion } from 'framer-motion';

const ModernContainer = ({ 
  children, 
  className = '', 
  maxWidth = '6xl',
  padding = true,
  animate = false,
  ...props 
}) => {
  const baseClasses = `modern-container ${padding ? '' : 'px-0'}`;
  const widthClasses = {
    'sm': 'max-w-sm',
    'md': 'max-w-md',
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    'full': 'max-w-full',
    'none': '',
  };

  const containerClass = `${baseClasses} ${widthClasses[maxWidth]} ${className}`;

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={containerClass}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={containerClass} {...props}>
      {children}
    </div>
  );
};

export default ModernContainer;