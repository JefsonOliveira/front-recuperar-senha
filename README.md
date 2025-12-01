# 🔐 Front – Recuperação de Senha

Frontend responsável pelo fluxo de **recuperação e redefinição de senha**, consumindo uma API de autenticação.  
Pode ser usado como módulo separado ou integrado a um sistema maior de login.

---

## 🚀 Tecnologias

- React
- JavaScript
- Vite (ou CRA – ajuste conforme o projeto)
- React Router
- Axios (para chamadas HTTP)
- CSS Modules / Styled Components / Tailwind (ajuste conforme o projeto)

---

## 🔁 Fluxo principal

- **Tela 1 – Solicitação de redefinição de senha**  
  - Usuário informa o e-mail cadastrado.  
  - Sistema envia requisição para API (`/auth/forgot-password` ou similar).  
  - Exibição de feedback (sucesso/erro).

- **Tela 2 – Redefinição de senha**  
  - Acessada via link enviado por e-mail (token na URL, ex: `?token=XYZ`).  
  - Usuário define uma nova senha (e confirmação).  
  - Envio para API (`/auth/reset-password`).  
  - Exibição de mensagem de sucesso e redirecionamento para login.

---

## 🛠️ Como rodar o projeto

### ✅ Pré-requisitos

- Node.js instalado
- Git

---

### ▶️ Rodando localmente

```bash
git clone https://github.com/JefsonOliveira/front-recuperar-senha.git
cd front-recuperar-senha

cp .env.example .env   # cria o arquivo de variáveis de ambiente

npm install
npm run dev
