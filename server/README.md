# 🤖 AssintentChat

Projeto desenvolvido por **Eduardo Developer**.

## 📚 Tecnologias Utilizadas

### Backend
- **Node.js** + **TypeScript**
- **Fastify**: Framework web rápido e eficiente
- **Drizzle ORM**: ORM moderno para TypeScript
- **PostgreSQL**: Banco de dados relacional
- **Zod**: Validação de esquemas e tipos
- **Drizzle Kit**: Migrações e seed do banco
- **@fastify/cors**: Suporte a CORS

### Frontend
- **React** + **TypeScript**
- **Vite**: Bundler moderno e rápido
- **TailwindCSS**: Utilitários de CSS
- **React Query**: Gerenciamento de dados assíncronos
- **React Hook Form**: Formulários reativos
- **Radix UI**: Componentes acessíveis
- **Zod**: Validação de dados

## 🏗️ Padrões de Projeto
- **Monorepo**: Separação clara entre front e back
- **API REST**: Backend expõe rotas RESTful (ex: `/rooms`)
- **Validação com Zod**: Tipagem e validação de dados em todas as camadas
- **Design System**: Componentes reutilizáveis (ex: Card, Button, Badge)
- **Arquitetura modular**: Separação por domínio (ex: `db/`, `http/routes/`)

## ⚙️ Setup e Configuração

### Pré-requisitos
- Node.js 18+
- Docker (para banco de dados local)

### 1. Clone o repositório
```bash
git clone <repo-url>
cd AssintentChat
```

### 2. Suba o banco de dados com Docker
```bash
docker-compose up -d
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do backend com:
```
PORT=3333
DATABASE_URL=postgresql://root:root@localhost:5432/agentschat
```

### 4. Instale as dependências
```bash
cd server && npm install
cd ../front && npm install
```

### 5. Rode as migrações e seed do banco
```bash
cd server
npx drizzle-kit migrate # ou conforme documentação drizzle
npm run db:seed
```

### 6. Inicie o backend
```bash
npm run dev
```

### 7. Inicie o frontend
```bash
cd ../front
npm run dev
```

---

- Acesse o frontend em: http://localhost:5173
- A API estará em: http://localhost:3333

## 📂 Estrutura de Pastas
```
server/
  src/
    db/         # Schema, conexão e seed do banco
    http/       # Rotas da API
    env.ts      # Validação de variáveis de ambiente
    server.ts   # Inicialização do servidor
front/
  src/
    components/ # Componentes reutilizáveis (UI)
    http/       # Hooks de consumo da API
    index.css   # Tailwind e customizações
```

## 💡 Observações
- O projeto utiliza componentes e hooks customizados para garantir reuso e padronização.
- O backend segue boas práticas de validação e modularização.
- O frontend utiliza design system próprio baseado em Tailwind e Radix UI.

---

Feito com 💙 por Eduardo Developer 