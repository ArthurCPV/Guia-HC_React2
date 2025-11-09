import React, { useEffect, useState } from 'react';

interface TutorialControllerProps {
  currentStep: number;
  onStepChange: (step: number) => void;
}

export const tutorialSteps = [
  {
    id: 'welcome',
    target: '#welcome-message',
    title: 'Bem-vindo ao Tutorial',
    content: 'Vamos começar nossa jornada pelo HC.',
  },
  {
    id: 'profile',
    target: '#profile-section',
    title: 'Seu Perfil',
    content: 'Aqui você pode ver e editar suas informações.',
  },
  {
    id: 'projects',
    target: '#projects-list',
    title: 'Projetos',
    content: 'Explore os projetos disponíveis.',
  },
  {
    id: 'favorites',
    target: '#favorites-section',
    title: 'Favoritos',
    content: 'Marque projetos como favoritos para acesso rápido.',
  },
];

const TutorialController: React.FC<TutorialControllerProps> = ({
  currentStep,
  onStepChange,
}) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentStep >= tutorialSteps.length) {
      setIsComplete(true);
    }
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      onStepChange(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      onStepChange(currentStep - 1);
    }
  };

  const handleSkip = () => {
    setIsComplete(true);
    onStepChange(tutorialSteps.length);
  };

  if (isComplete) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex gap-2">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === tutorialSteps.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
        >
          Próximo
        </button>
        <button
          onClick={handleSkip}
          className="px-4 py-2 bg-gray-300 rounded-md"
        >
          Pular Tutorial
        </button>
      </div>
    </div>
  );
};

export default TutorialController;