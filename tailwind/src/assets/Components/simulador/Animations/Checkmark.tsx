import React from 'react';

interface CheckmarkProps {
  className?: string;
}

const Checkmark: React.FC<CheckmarkProps> = ({ className = '' }) => {
  return (
    <svg
      className={`animate-checkmark ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
};

export default Checkmark;