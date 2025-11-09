// src/components/simulador/StepHint.tsx
import { useTutorial } from "../../../context/TutorialController";
import SuccessToast from "./SuccessToast";
import { useNavigate } from "react-router-dom";

export default function StepHint() {
  const navigate = useNavigate();
  const { currentStep, steps, next, skip } = useTutorial();
  const step = steps[currentStep];

  const isLastStep = currentStep === steps.length - 1;

  return (
    <>
      {/* Confetti e toast só no final */}
      {isLastStep && <SuccessToast open />}

      <div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-xl border rounded-xl p-4 w-[480px]"
        style={{ zIndex: 10000 }}
      >
        <h3 className="font-semibold text-lg">{step.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{step.desc}</p>

        <div className="flex justify-between items-center">
          {/* ❌ NÃO EXIBIR BOTÃO "PULAR" NO FINAL */}
          {!isLastStep && (
            <button
              onClick={skip}
              className="text-gray-500 hover:text-gray-700"
            >
              Pular tutorial
            </button>
          )}

          {/* Botão de ação (escrever automaticamente) */}
          {step.action && !isLastStep && (
            <button
              onClick={() => step.action?.()}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Executar ação
            </button>
          )}

          {/* ✅ Se for o último passo → botão de saída */}
          {isLastStep ? (
            <button
              onClick={() => navigate("/")} // ✅ redireciona para home
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Finalizar ✅
            </button>
          ) : (
            <button
              onClick={next}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Avançar →
            </button>
          )}
        </div>
      </div>
    </>
  );
}
