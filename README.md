# 📦 Formulário de Solicitação de Insumos — Vallourec

Este é um projeto criado em **Next.js** com o objetivo de facilitar a solicitação de insumos (etiquetas, ribbons, etc.) por parte de diferentes setores da usina.  
As solicitações são preenchidas via formulário e enviadas automaticamente por e-mail ao responsável pelo controle de insumos.

---

## ✨ Funcionalidades

- Formulário com validação de dados
- Envio automático de e-mail com os dados preenchidos
- API integrada com `Nodemailer`
- Projeto pronto para deploy no **Vercel**

---

## 🖥️ Como rodar localmente

### 1. Clone o repositório


```
git clone https://github.com/xCaio/formulario-insumos.git
cd formulario-insumos
```

### 2. Instale as dependências
```
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo .env.local na raiz do projeto e adicione:

EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-app-password-gerada-no-gmail

⚠️ Para usar o Gmail, é necessário ativar a verificação em duas etapas e gerar uma senha de app.

### 4. Inicie o servidor de desenvolvimento
npm run dev

