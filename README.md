# Refund App

Refund App é um sistema que permite aos usuários solicitarem reembolsos de despesas como tarefas, viagens, serviços e transportes. Para isso, o usuário deve se cadastrar e fazer login na plataforma. Cada solicitação deve conter um comprovante anexado. Os administradores podem visualizar todas as solicitações de reembolso para aprovação ou rejeição.

## Tecnologias Utilizadas
- React 19 (com Vite)
- TypeScript
- React Router
- React Hook Form
- Tailwind CSS

## Como Executar o Projeto Localmente
Siga os passos abaixo para rodar o Refund App na sua máquina:

### 1. Clonar o Repositório
```sh
git clone https://github.com/seu-usuario/refund-app.git
cd refund-app
```

### 2. Instalar as Dependências
```sh
npm install
```

### 3. Iniciar a Aplicação
```sh
npm run dev
```
O Vite rodará por padrão na porta `5173`. Caso esteja ocupada, ele indicará outra disponível.

### 4. Acessar no Navegador
Abra:
```
http://localhost:5173
```
para visualizar a aplicação.

---

# API do Refund App
Este projeto depende de uma API backend para autenticação e armazenamento das solicitações de reembolso. O código da API está disponível no repositório:
[Refund API](https://github.com/mauricioyansen/22-refund-api-2.0)

## Como Executar a API Localmente

### 1. Clonar o Repositório da API
```sh
git clone https://github.com/mauricioyansen/22-refund-api-2.0.git
cd 22-refund-api-2.0
```

### 2. Instalar as Dependências
```sh
npm install
```

### 3. Configurar as Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto e defina as credenciais necessárias, por exemplo:
```
PORT=3001
DATABASE_URL="url-do-seu-banco"
JWT_SECRET="sua-chave-secreta"
```

### 4. Rodar a API
```sh
npm run dev
```
A API rodará por padrão na porta `3001`.

### 5. Testar a API
Acesse:
```
http://localhost:3001/api
```
para verificar se a API está rodando corretamente.

---
Agora você pode testar o Refund App localmente com a API em funcionamento! 🚀

