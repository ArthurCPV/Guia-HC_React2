import type { TutorialStep } from "../context/TutorialController";

type TutorialActions = {
  typeIntoField: (selector: string, text: string, callback?: () => void) => void;
  next: () => void;
};

export function getSteps(actions: TutorialActions): TutorialStep[] {
  return [
    {
      id: "campo-nome",
      title: "Nome completo",
      desc: "Digite seu nome completo.",
      selector: "#input_nome",
      action: () => {
        actions.typeIntoField("#input_nome", "Fulano da Silva", actions.next);
      },
    },
    {
      id: "campo-email",
      title: "E-mail",
      desc: "Digite seu e-mail.",
      selector: "#input_email",
      action: () => {
        actions.typeIntoField("#input_email", "fulano@email.com", actions.next);
      },
    },
    {
      id: "campo-cpf",
      title: "CPF",
      desc: "Digite seu CPF.",
      selector: "#input_cpf",
      action: () => {
        actions.typeIntoField("#input_cpf", "123.456.789-10", actions.next);
      },
    },
    {
      id: "campo-datanasc",
      title: "Data de nascimento",
      desc: "Selecione sua data de nascimento.",
      selector: "#input_data",
      action: () => {
        actions.typeIntoField("#input_data", "2000-01-01", actions.next);
      },
    },
    {
      id: "campo-telefone",
      title: "Telefone",
      desc: "Digite seu telefone.",
      selector: "#input_telefone",
      action: () => {
        actions.typeIntoField("#input_telefone", "(11) 98765-4321", actions.next);
      },
    },
    {
      id: "campo-senha",
      title: "Senha",
      desc: "Escolha sua senha.",
      selector: "#input_senha",
      action: () => {
        actions.typeIntoField("#input_senha", "senha123", actions.next);
      },
    },
    {
      id: "campo-confirmar",
      title: "Confirmar senha",
      desc: "Confirme sua senha.",
      selector: "#input_confirmarSenha",
      action: () => {
        actions.typeIntoField("#input_confirmarSenha", "senha123", actions.next);
      },
    },
    {
      id: "concluido",
      title: "Cadastro concluído!",
      desc: "Parabéns! Você finalizou o tutorial com sucesso ✅",
      action: () => console.log("Tutorial finished")
    },
  ];
}
