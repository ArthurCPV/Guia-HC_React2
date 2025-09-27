// src/components/ui/Card.tsx
import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  image?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

export default function Card({ title, subtitle, image, onClick, children }: Props) {
  return (
    <article
      className="bg-[#121212] rounded-lg border border-gray-800 p-4 cursor-pointer hover:scale-[1.03] transition-transform"
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-3" />}
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      {subtitle && <p className="text-sm text-gray-300">{subtitle}</p>}
      {children}
    </article>
  );
}
