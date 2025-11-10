# 📱 Guia HC — Aplicação com Tutorial Assistido

Aplicação desenvolvida com o objetivo de **ajudar idosos e pessoas com baixa familiaridade com tecnologia** a utilizarem um aplicativo real (Hospital das Clínicas).  
Nosso foco é **ensinar fazendo**, por meio de um *tutorial interativo com destaque visual* nos campos.

---

## 🎯 Objetivo do Projeto

O Guia HC simula o cadastro dentro do aplicativo do Hospital das Clínicas e:

- Destaca automaticamente os campos que o usuário deve preencher.
- Explica cada passo do formulário.
- Possui preenchimento automático (animação escrevendo no campo).
- Valida e envia os dados para uma **API Java (backend real)**.
- Verifica a força da senha em tempo real usando **API Python**.

O usuário aprende **fazendo**, com acessibilidade, foco visual e sem distrações.

---

## 🧠 Funcionalidades Principais

| Funcionalidade | Descrição |
|----------------|----------|
| ✅ Tutorial interativo (cadastro assistido) | Guias que destacam campos e executam ações automaticamente. |
| ✅ Autofill com animação de digitação | O assistente “digita sozinho” preenchendo o campo. |
| ✅ Confirmação visual com confetti 🎉 | Exibido ao final do tutorial ou após cadastro manual. |
| ✅ CRUD completo com API Java | Listagem, cadastro, edição e exclusão de usuários. |
| ✅ Verificação de senha com API Python | Exibe relatório de segurança em tempo real. |
| ✅ UX para idosos | Tela escura, letras grandes, foco visual e navegação guiada. |

---

## 🚀 Como usar o *Cadastro Assistido*

1. Entre em **Simulação → Cadastro - Guia HC**
2. Um pop-up perguntará: *"Deseja usar o tutorial?"*
3. Escolha:
   - **Sim** → o assistente começa o passo a passo
   - **Não** → o usuário preenche manualmente

Durante o tutorial:

➡️ O campo atual fica **destacado e ampliado**  
➡️ O botão “Executar Ação” **digita automaticamente** no campo  
➡️ Após a digitação, o tutorial passa para o próximo passo sozinho

No final:

✨ aparece a animação de check + confetti  
🚀 o usuário é redirecionado para a página inicial do guia

---

## 🗃 Integração com API

### 🔵 Backend Java (CRUD de usuários)

| Método | Rota | Ação |
|--------|------|------|
| `POST` | `/usuarios` | Cadastra usuário |
| `GET` | `/usuarios` | Lista todos |
| `GET` | `/usuarios/{id}` | Busca um específico |
| `PUT` | `/usuarios/{id}` | Atualiza informações |
| `DELETE` | `/usuarios/{id}` | Remove usuário |


# Estrutura de pasta



tailwind/   
│   
├── public/  
│   └── img/   
│       ├── Arthur.png     
│       ├── BrunoDias.png   
│       ├── Gabriel.jpg  
│       ├── LogoGuiaHC.png    
│       ├── github.png      
│       ├── linkedin.png      
│       └── info.avif      
│
└── src/
    ├── assets/
    │   └── Components/
    │       ├── header/
    │       ├── footer/
    │       ├── contato/
    │       ├── faq/
    │       ├── integrantes/
    │       ├── main/
    │       ├── menuNav/
    │       ├── simulador/
    │       └── projeto/
    │
    ├── components/
    ├── context/
    ├── lib/
    ├── tutorial/
    ├── simulador/
    │   ├── Animations/
    │   │   ├── Checkmark.tsx
    │   │   ├── Confetti.tsx
    │   │   └── confetti.css
    │   ├── components/
    │   │   ├── StepHint.tsx
    │   │   ├── SuccessToast.tsx
    │   │   └── TutorialOverlay.tsx
    │   ├── context/
    │   │   └── TutorialController.tsx
    │   ├── tutorial/
    │   │   └── steps.ts
    │   └── SimForm.tsx
    │
    ├── pages/
    │   ├── Home/
    │   ├── Projeto/
    │   ├── Simulador/
    │   ├── Integrantes/
    │   ├── Login/
    │   ├── NotFound/
    │   ├── Contato/
    │   ├── Faq/
    │   └── Usuarios/
    │       └── Usuarios.tsx
    │
    ├── App.tsx
    ├── main.tsx
    └── index.css






## ✔️ Tecnologias utilizadas

### Linguagens e Frameworks
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)   
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)   
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)   
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)   

### Bibliotecas  
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)  
![React HookForm](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)  

### Ferramentas e Padrões
![Git](https://img.shields.io/badge/Git-F05033?style=for-the-badge&logo=git&logoColor=white)  
![GitHub](https://img.shields.io/badge/GitHub-121011?style=for-the-badge&logo=github&logoColor=white)  
![LocalStorage](https://img.shields.io/badge/LocalStorage-FFA500?style=for-the-badge&logo=google-chrome&logoColor=white)  

### Ambiente
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)  
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)  
![yarn](https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)  


## Colaboradores

| Nome                      | GitHub                                                              | LinkedIn | RM |
|---------------------------|---------------------------------------------------------------------|----------|----|
| Arhtur dos Santos Cabral    |  [ArthurCPV](https://github.com/ArthurCPV)                                                                     |    [Arthur LinkedIn](https://www.linkedin.com/in/arthur-cabral2101/)      | RM566515 |
| Vitor Fria Dalmagro                   | [VitorDalmagro](https://github.com/VitorDalmagro)                                                                     |  [Vitor LinkedIn](https://www.linkedin.com/in/vitor-fria-dalmagro-474524379)        | RM566052 |
| Gabriel Cedraz                   | [GabrielCedraz](https://github.com/austrolopithecus)                                                                     |  [Gabriel LinkedIn](https://www.linkedin.com/in/gabriel-cedraz-9b971a354)        | RM565911 |


## 📁 Acesso ao projeto
Você pode acessar os arquivos do projeto clicando [aqui](https://github.com/ArthurCPV/Guia-HC_React2).

##  Vídeo Youtube
Clique [aqui](https://youtu.be/8PGvLEvhsh0) para acessar o vídeo
