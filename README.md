# 📦 Sistema de Moderação de Comentários via Gemini

## Sobre a Aplicação
API REST desenvolvida para receber e listar comentários em portais de notícias, com a capacidade de moderar comentários tóxicos via Google Gemini


---

## 🚀 Tecnologias utilizadas

- Node.js + Express (API REST)
- Google Gemini (Moderador de Comentários)
- PostgreSQL

---

## 🧠 Pré-requisitos

Caso não possua, instale os requisitos abaixo:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/download/)
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
```bash
npm install
```

4. Crie um arquivo .env e preencha os dados da API do Gemini e do Banco de Dados conforme o arquivo .env.example:
```.env
DATABASE_URL=postgresql://meu_usuario:minha_senha@localhost:porta/nome_do_banco
GEMINI_API_KEY=minha_chave
JWT_SECRET=Gere um hexadecimal aleatorio
```
<i>Sugestão: utilize o [Browserling]((https://www.browserling.com/tools/random-hex)) para gerar um hexadecimal aleatório</i>.

5. Execute o arquivo ```generate-token.ts``` para gerar um token de autorização JWT para acessar a aplicação:
```bash
npm run generate-token
```
Copie e guarde o token gerado. Ele deverá ser passado como cabeçalho das requisições GET e POST na API.
```HTTP
Authorization Bearer <meu_token>
```
   
6. Rode o projeto
```bash
npm run dev
```
## ↪️ Acesso

Acesse a aplicação através de:
```web
http://localhost:3000/api/comments
```

Utilize ferramentas de terminal como ```cURL``` ou ```httpie``` ou clientes como Insomnia ou Postman para realizar as requisições. <br>
A API possui duas rotas:
- GET: lista todos os comentários
- POST: envia um comentário
  - corpo da requisição GET:
  ```HTTP
  Authorization: Bearer meu_token
  ``` 
  - corpo da requisição POST:
  ```HTTP
  Authorization: Bearer meu_token
  {"name": "meu_nome", "content": "meu_comentário"}
  ```
Conheça também: disponibilizamos uma interface amigável em React, caso você deseje acessar a API via web: Clone o repositório: [sjcc-frontend](https://www.github.com/lucasolima/sjcc-frontend) <br>Todas as instruções de configuração estarão disponíveis lá!