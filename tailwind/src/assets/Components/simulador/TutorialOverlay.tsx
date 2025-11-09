// src/components/simulador/TutorialOverlay.tsx
import { useEffect, useState } from "react";
import { useTutorial } from "../../../context/TutorialController";

export default function TutorialOverlay() {
  const { currentStep, steps } = useTutorial();
  const step = steps[currentStep];
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function positionAndMeasure() {
      setActive(false);
      setRect(null);

      if (!step?.selector) return;

      const el = document.querySelector(step.selector) as HTMLElement | null;
      if (!el) return;


      // impedir scroll durante o tutorial
      document.body.style.overflow = "hidden";

      el.scrollIntoView({ behavior: "smooth", block: "center" });

      await new Promise((resolve) => setTimeout(resolve, 350));
      if (!mounted) return;

      const r = el.getBoundingClientRect();
      setRect(r);

      setTimeout(() => mounted && setActive(true), 80);
    }

    positionAndMeasure();
    return () => {
      mounted = false;
      document.body.style.overflow = "auto";
    };
  }, [currentStep, step?.selector]);

  if (!rect) return null;

  return (
    <>
      {/* Máscara escura sem blur (REMOVIDO backdrop-filter) */}
      <div
        className="fixed inset-0"
        style={{
          zIndex: 9998,
          pointerEvents: "none",
          background: "rgba(0,0,0,0.65)", // escurece o fundo
        }}
      />

      {/* DESTACAR O CAMPO SEM EMBASSAR E SEM PULSAÇÃO */}
      <div
        className="fixed rounded-2xl"
        style={{
          top: rect.top - 16,
          left: rect.left - 16,
          width: rect.width + 32,
          height: rect.height + 32,
          boxShadow: `
            0 0 0 9999px rgba(0,0,0,0.75),     /* fundo escuro */
            0 0 12px 4px rgba(0,255,140,0.9)   /* borda brilhando */
          `,
          background: "rgba(255, 255, 255, 0.35)", // 🔥 deixa o campo mais claro
          backdropFilter: "none",                 // 🔥 remove blur dentro do destaque
          pointerEvents: "none",
          zIndex: 9999,
          transition: "all 0.25s ease"
        }}

      />
    </>
  );
}
