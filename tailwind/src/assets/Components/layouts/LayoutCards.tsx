// src/components/layouts/CardsLayout.tsx
import React from "react";

type Props = {
  title?: string;
  children: React.ReactNode;
};

export default function CardsLayout({ title, children }: Props) {
  return (
    <section className="w-full min-h-screen flex flex-col items-center py-12">
      {title && <h2 className="text-3xl md:text-4xl text-white mb-8 text-center">{title}</h2>}
      <div className="w-full max-w-5xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {children}
        </div>
      </div>
    </section>
  );
}
