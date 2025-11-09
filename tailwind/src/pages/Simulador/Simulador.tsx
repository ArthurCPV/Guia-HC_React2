import React, { useState } from "react";
import SimForm from "../../assets/Components/simulador/SimForm";
import { TutorialProvider, useTutorial } from "../../context/TutorialController";
import TutorialOverlay from "../../assets/Components/simulador/TutorialOverlay";
import StepHint from "../../assets/Components/simulador/StepHint";
import { getSteps } from "../../tutorial/steps";

// Componente principal que renderiza o provider
export default function Simulador() {
  return (
    <TutorialProvider steps={getSteps}>
      <SimuladorContent />
    </TutorialProvider>
  );
}

// Componente interno que usa o contexto
function SimuladorContent() {
  const { tutorialEnabled } = useTutorial();

  return (
    <>
      <TutorialStartGuard />

      <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl w-full mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Simulador HC</h1>
          <SimForm onSuccess={() => {}} />

          {/* Tutorial overlays */}
          {tutorialEnabled && <TutorialOverlay />}
          {tutorialEnabled && <StepHint />}
        </div>
      </div>
    </>
  );
}

/* BLOQUEIA interação até o usuário decidir se quer tutorial */
function TutorialStartGuard() {
  const { goTo, skip } = useTutorial();
  const [showModal, setShowModal] = useState(true);

  const startTutorial = () => {
    setShowModal(false);
    goTo(0); // agora realmente vai para o primeiro step
  };

  const skipTutorial = () => {
    setShowModal(false);
    skip(); // ✅ agora usa skip() para realmente desativar o tutorial
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[20000]">
      <div className="bg-white p-6 rounded-xl shadow-xl text-center w-[360px] pointer-events-auto">
        <h3 className="text-lg font-bold mb-2">Deseja iniciar o tutorial?</h3>
        <p className="text-gray-600 mb-6">
          Ele dura menos de 30 segundos e te guia no preenchimento.
        </p>

        <button
          onClick={startTutorial}
          className="bg-blue-600 text-white w-full p-3 rounded-lg mb-3 hover:bg-blue-700 transition"
        >
          Sim, quero ver
        </button>

        <button
          onClick={skipTutorial}
          className="w-full text-gray-500 hover:text-gray-800"
        >
          Pular tutorial
        </button>
      </div>
    </div>
  );
}
