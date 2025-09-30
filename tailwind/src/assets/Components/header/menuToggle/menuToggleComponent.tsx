import React from "react";

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

export default function MenuToggleComponent({ isOpen, onToggle }: Props) {
  return (
    <button
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      onClick={onToggle}
      className="p-2 rounded border-2 border-white/40 text-white mr-2"
    >
      {/* simples ícone, você pode trocar por svg */}
      <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
    </button>
  );
}
