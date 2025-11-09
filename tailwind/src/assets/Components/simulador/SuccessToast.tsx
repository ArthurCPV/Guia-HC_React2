import React, { useEffect } from "react";
import "./Animations/confetti.css";

export default function SuccessToast({ open = true }: { open?: boolean }) {
  useEffect(() => {
    if (open) {
      document.dispatchEvent(new Event("tutorial:finish"));
    }
  }, [open]);

  if (!open) return null;

  // gera algumas peças de confetti com cores variadas
  const colors = ["#EF4444", "#F59E0B", "#10B981", "#3B82F6", "#A78BFA"];
  const pieces = Array.from({ length: 12 }).map((_, i) => {
    const left = `${10 + (i * 7)}%`;
    const delay = `${(i % 5) * 60}ms`;
    const color = colors[i % colors.length];
    const rotate = `${(i % 4) * 45}deg`;
    return (
      <div
        key={i}
        className="confetti-piece"
        style={{
          left,
          background: color,
          transform: `rotate(${rotate})`,
          animationDelay: delay,
        }}
      />
    );
  });

  return (
    <div aria-live="polite" className="fixed inset-0 flex items-start justify-center pointer-events-none z-[200000]">
      <div className="relative mt-24 w-[320px] bg-white/95 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center shadow-2xl pointer-events-auto">
        {/* checkmark */}
        <div className="checkmark-anim mb-2">
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none" className="mx-auto">
            <circle cx="12" cy="12" r="11" stroke="#10B981" strokeWidth="2" fill="transparent" />
            <path d="M7 13l2.5 2.5L17 8" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h3 className="text-lg font-semibold text-gray-900">Sucesso!</h3>
        <p className="text-sm text-gray-600 mt-1">Cadastro realizado com sucesso.</p>

        {/* confetti absolute layer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {pieces}
        </div>
      </div>
    </div>
  );
}