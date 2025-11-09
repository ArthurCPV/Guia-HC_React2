import React from 'react';
import './confetti.css';

interface ConfettiProps {
  active?: boolean;
}

const Confetti: React.FC<ConfettiProps> = ({ active = true }) => {
  if (!active) return null;

  return (
    <div className="confetti-container">
      {[...Array(50)].map((_, i) => (
        <div key={i} className="confetti" style={{
          '--delay': `${Math.random() * 3}s`,
          '--rotation': `${Math.random() * 360}deg`,
          '--position': `${Math.random() * 100}%`,
        } as React.CSSProperties} />
      ))}
    </div>
  );
};

export default Confetti;