# 📦 Sistema de Moderação de Comentários via Gemini

## Sobre a Aplicação
> Uma API Node.js + Express conectada a um banco de dados PostgreSQL hospedado no Railway,
usada para interceptar comentários e analisá-los via Google Gemini, buscando rejeitar conteúdos 
tóxicos antes de armazená-los no banco de dados.


---

## 🚀 Tecnologias usadas

- Node.js + Express (API REST)
- Google Gemini (Moderador de Comentários)
- PostgreSQL (via Railway)

---

## 🧠 Pré-requisitos

Antes de rodar o projeto, você precisa ter:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- Conta no [Railway](https://railway.app/)
- Banco de Dados [PostgresSQL](https://www.postgresql.org/download/)
- Chave da API do [Google Gemini](https://ai.google.dev/gemini-api/docs?hl=pt-br)

---

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/lucasolima/sjcc/
cd sjcc
```

2. Crie o banco de dados Postgres
```SQL
CREATE DATABASE comments;
CREATE TABLE comments VALUES(
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at DATE NOT NULL,
    status TEXT NOT NULL;
```

3. Instale as dependências do projeto
```npm
npm install
```

4. Crie um arquivo .env e preencha os dados da API do Gemini e do Banco de Dados conforme o arquivo .env.example
```.env
DATABASE_URL=postgresql://meu_usuario:minha_senha@host:porta/nome_do_banco
GEMINI_API_KEY=minha_chave
```
   
5. Rode o projeto
```ǹpm
npm run dev
```
## ↪️ Acesso

Acesse a aplicação através de:
```web
http://localhost:3000/api/comments
```