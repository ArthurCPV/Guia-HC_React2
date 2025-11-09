// src/context/TutorialController.tsx
import { createContext, type ReactNode, useContext, useState } from "react";

export interface TutorialStep {
  id: string;
  title: string;
  desc: string;
  selector?: string; // opcional → para destacar componente
  action?: () => void; // ✅ ADICIONE ESTA LINHA
}

interface TutorialContextProps {
  currentStep: number;
  steps: TutorialStep[];
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  skip: () => void;
  typeIntoField: (selector: string, text: string, callback?: () => void) => void;
  focusField: (fieldOrSelector: string) => void;
  tutorialEnabled: boolean;   // ✅ ADICIONE ESSA LINHA
}

const TutorialContext = createContext<TutorialContextProps | undefined>(undefined);

export type TutorialActions = {
  typeIntoField: (selector: string, text: string, callback?: () => void) => void;
  focusField: (fieldOrSelector: string) => void;
  next: () => void;
  prev: () => void;
  goTo: (i: number) => void;
  skip: () => void;
};

export function TutorialProvider({
  children,
  steps,
}: {
  children: ReactNode;
  steps: TutorialStep[] | ((actions: TutorialActions) => TutorialStep[]);
}) {
  const [currentStep, setCurrentStep] = useState(0);

  // we'll compute the actual steps (may be provided as factory) below;
  // declare mutable holder so next/prev can reference its length safely
  let computedSteps: TutorialStep[] = [];

  const [tutorialEnabled, setTutorialEnabled] = useState(true);

  const next = () => setCurrentStep((prev) => Math.min(prev + 1, computedSteps.length - 1));
  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const goTo = (i: number) => setCurrentStep(i);
  
  const skip = () => {
    setTutorialEnabled(false);
    setCurrentStep(-1);  // tutorial realmente finaliza
  };

  function focusField(fieldOrSelector: string) {
    const selector = fieldOrSelector.startsWith("#")
      ? fieldOrSelector
      : `#input_${fieldOrSelector}`;
    const el = document.querySelector(selector) as HTMLElement | null;
    if (!el) return;
    el.focus();
  }

  function typeIntoField(selector: string, text: string, callback?: () => void) {
    const el = document.querySelector(selector) as HTMLInputElement | null;
    if (!el) return;

    // se for um input de data, converte para texto temporariamente
    const originalType = el.type;
    if (originalType === "date") {
      el.type = "text";
    }

    el.focus();
    el.value = "";

    let index = 0;
    const speed = 80; // velocidade da digitação

    function type() {
      if (!el) return;

      if (index < text.length) {
        el.value += text[index];
        el.dispatchEvent(new Event("input", { bubbles: true }));
        index++;
        setTimeout(type, speed);
      } else {
        // ✅ quando terminar, volta para date formatado corretamente
        if (originalType === "date") {
          const isoFormatted = text;
          el.type = "date";
          el.value = isoFormatted;
          el.dispatchEvent(new Event("input", { bubbles: true }));
        }

        callback?.();
      }
    }

    type();
  }

  const actions: TutorialActions = {
    typeIntoField,
    focusField,
    next,
    prev,
    goTo,
    skip,
  };

  computedSteps = typeof steps === "function" ? steps(actions) : steps;

  return (
    <TutorialContext.Provider value={{
      currentStep,
      steps: computedSteps,
      next,
      prev,
      goTo,
      tutorialEnabled,
      skip,
      typeIntoField,
      focusField
    }}>
      {children}
    </TutorialContext.Provider>
  );
}

export function useTutorial() {
  const ctx = useContext(TutorialContext);
  if (!ctx) throw new Error("useTutorial must be used inside <TutorialProvider>");
  return ctx;
}
