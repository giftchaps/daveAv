'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  external?: boolean;
}

export function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className = '',
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group';

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variants = {
    primary:
      'bg-[#B2081B] text-white hover:bg-[#8e0615] focus-visible:outline-[#B2081B] uppercase tracking-wide',
    secondary:
      'bg-white text-[#071E55] hover:bg-gray-100 focus-visible:outline-white uppercase tracking-wide',
    outline:
      'border-2 border-[#071E55] text-[#071E55] hover:bg-[#071E55] hover:text-white focus-visible:outline-[#071E55] uppercase tracking-wide',
    ghost:
      'text-[#071E55] hover:text-[#1265B7] focus-visible:outline-[#1265B7] uppercase tracking-wide',
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          size={size === 'lg' ? 20 : size === 'sm' ? 14 : 16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {content}
    </button>
  );
}
