import React from "react";

type Props = {
  id: string;
  pergunta: string;
  resposta: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  alinhamento?: "left" | "right"; // controla alinhamento do bloco (desktop)
};

export default function FaqItem({ id, pergunta, resposta, isOpen, onToggle, alinhamento = "left" }: Props) {
  // alignment classes: centered on mobile, left or right on md+

  const wrapperAlignment =
    alinhamento === "left"
      ? "md:mr-auto md:pl-4 md:justify-start"
      : "md:ml-auto md:pr-4 md:justify-end";

  return (
    <div className={`w-full md:w-1/2 flex ${wrapperAlignment} mb-6`}>
      <div className="w-full max-w-[500px]">

        {/* Pergunta */}
        <button
          id={`faq-btn-${id}`}
          aria-controls={`faq-panel-${id}`}
          aria-expanded={isOpen}
          onClick={onToggle}

        //   Acessibilidade para teclado - doideira
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onToggle();
            }
          }}

          className="
            w-full text-left px-6 py-3.5 rounded-t-lg
            bg-gradient-to-r from-[#007694] via-[#3e60f7] to-[#3826fc]
            text-white font-semibold
            shadow-md
            focus:outline-none focus:ring-4 focus:ring-[#007694]/40
            transform-gpu transition-transform duration-200
            hover:scale-[1.02]
          "
        >
          {pergunta}
        </button>

        {/* Resposta */}
        <div
          id={`faq-panel-${id}`}
          role="region"
          aria-labelledby={`faq-btn-${id}`}
          className={`
            overflow-hidden rounded-b-lg
            bg-[#007694] text-white
            border border-black
            transition-[max-height,opacity] duration-500 ease-in-out
            ${isOpen ? "max-h-[800px] opacity-100 py-4 px-6" : "max-h-0 opacity-0 px-6"}
          `}
        >
          <p className="text-sm leading-7">{resposta}</p>
        </div>
      </div>
    </div>
  );
}
