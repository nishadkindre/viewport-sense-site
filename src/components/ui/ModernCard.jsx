import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const ModernCard = ({ 
  children, 
  className = '', 
  hover = true,
  animate = false,
  variant = 'default',
  onClick,
  ...props 
}) => {
  const variants = {
    default: 'modern-card',
    elevated: 'modern-card shadow-lg',
    bordered: 'bg-white border-2 border-gray-200 rounded-lg p-6',
    flat: 'bg-gray-50 border border-gray-200 rounded-lg p-6',
  };

  const baseClasses = clsx(
    variants[variant],
    onClick && 'cursor-pointer hover:shadow-lg',
    className
  );

  const CardContent = ({ children, ...cardProps }) => (
    <div
      className={baseClasses}
      onClick={onClick}
      {...cardProps}
    >
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        whileHover={hover ? { 
          y: -2,
          transition: { duration: 0.15 }
        } : {}}
        {...props}
      >
        <CardContent>
          {children}
        </CardContent>
      </motion.div>
    );
  }

  return (
    <CardContent {...props}>
      {children}
    </CardContent>
  );
};

export default ModernCard;