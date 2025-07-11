# 🎤 Wiki I.A - Sala de Perguntas Inteligente

<div align="center">

![Wiki I.A Logo](https://img.shields.io/badge/Wiki%20I.A-🎤-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

</div>

## 🚀 Sobre o Projeto

O **Wiki I.A** é uma plataforma inovadora de salas de perguntas que combina a simplicidade de um chat com o poder da inteligência artificial! 🧠✨

Imagine um ambiente onde você pode:
- 🏠 **Criar salas temáticas** para diferentes tópicos
- 🎤 **Gravar áudio** diretamente no navegador
- 🤖 **Receber respostas inteligentes** baseadas em IA
- 💬 **Interagir** com perguntas e respostas em tempo real
- 📱 **Usar uma interface moderna** e responsiva

É como ter um assistente virtual sempre disponível para responder suas dúvidas! 🎯

---

## 🛠️ Stack Tecnológica

### Frontend 🎨
- **[React 19](https://react.dev/)** - Biblioteca JavaScript para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Vite](https://vitejs.dev/)** - Build tool ultra-rápido para desenvolvimento
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[React Router DOM](https://reactrouter.com/)** - Roteamento declarativo para React
- **[React Hook Form](https://react-hook-form.com/)** - Biblioteca para formulários performáticos
- **[TanStack Query](https://tanstack.com/query/latest)** - Gerenciamento de estado do servidor
- **[Zod](https://zod.dev/)** - Validação de esquemas TypeScript-first
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones bonitos e consistentes
- **[Day.js](https://day.js.org/)** - Biblioteca de manipulação de datas leve

### Backend ⚡
- **[Fastify](https://www.fastify.io/)** - Framework web rápido e de baixo overhead
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM TypeScript-first para Node.js
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional robusto
- **[pgvector](https://github.com/pgvector/pgvector)** - Extensão para embeddings e busca por similaridade
- **[Zod](https://zod.dev/)** - Validação de esquemas e tipos

### Ferramentas de Desenvolvimento 🔧
- **[Biome](https://biomejs.dev/)** - Linter e formatter rápido (sucessor do ESLint + Prettier)
- **[Ultracite](https://ultracite.dev/)** - CLI para configuração rápida de projetos
- **[Docker](https://www.docker.com/)** - Containerização para PostgreSQL
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** - CLI para migrações e gerenciamento do banco

---

## 🏗️ Arquitetura e Padrões de Projeto

### Estrutura do Projeto 📁
```
AssistentChat/
├── front/                 # Frontend React + Vite
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── http/          # Hooks e tipos para API
│   │   └── lib/           # Utilitários e configurações
│   └── public/            # Assets estáticos
└── server/                # Backend Fastify
    ├── src/
    │   ├── db/            # Configuração do banco de dados
    │   ├── http/          # Rotas e handlers
    │   └── env.ts         # Configuração de ambiente
    └── docker/            # Configuração Docker
```

### Padrões Implementados 🎯

#### Frontend
- **Component-Based Architecture** - Componentes modulares e reutilizáveis
- **Custom Hooks** - Lógica de negócio reutilizável (`use-*.ts`)
- **Type-Safe API** - Tipagem completa para todas as requisições
- **Form Validation** - Validação com Zod + React Hook Form
- **State Management** - TanStack Query para cache e sincronização

#### Backend
- **RESTful API** - Endpoints bem estruturados e semânticos
- **Type-Safe Routes** - Validação automática com Zod
- **Database Migrations** - Controle de versão do esquema
- **Environment Configuration** - Configuração segura de variáveis
- **CORS Configuration** - Configuração adequada para desenvolvimento

---

## 🚀 Como Instalar e Executar

### Pré-requisitos 📋
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Docker](https://www.docker.com/) e Docker Compose
- [Git](https://git-scm.com/)

### 1. Clone o Repositório 📥
```bash
git clone https://github.com/eduardotecnologo/AssistentChat.git
cd AssistentChat
```

### 2. Configure o Backend 🔧

```bash
cd server

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações

# Inicie o PostgreSQL com Docker
docker-compose up -d

# Execute as migrações do banco
npm run db:migrate

# (Opcional) Execute o seed para dados de exemplo
npm run db:seed

# Inicie o servidor de desenvolvimento
npm run dev
```

### 3. Configure o Frontend 🎨

```bash
cd front

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### 4. Acesse a Aplicação 🌐
- Frontend: http://localhost:5173
- Backend: http://localhost:3333
- Drizzle Studio: http://localhost:4983 (após `npx drizzle-kit studio`)

---

## 📖 Como Usar

### Criando uma Sala 🏠
1. Acesse a página inicial
2. Preencha o formulário com nome e descrição da sala
3. Clique em "Criar Sala"
4. Você será redirecionado para a sala criada

### Fazendo Perguntas 💬
1. Dentro de uma sala, use o formulário de perguntas
2. Digite sua pergunta no campo de texto
3. Clique em "Enviar Pergunta"
4. A resposta será exibida na lista de perguntas

### Gravando Áudio 🎤
1. Na sala, clique no botão "Gravar Áudio"
2. Permita o acesso ao microfone
3. Clique em "Gravar áudio" para iniciar
4. O áudio será enviado automaticamente a cada 5 segundos
5. Clique em "Pausar gravação" para parar

---

## 🔧 Scripts Disponíveis

### Backend
```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run start        # Inicia o servidor de produção
npm run db:generate  # Gera novas migrações
npm run db:migrate   # Executa migrações pendentes
npm run db:seed      # Popula o banco com dados de exemplo
```

### Frontend
```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Visualiza o build de produção
```

---

## 🗄️ Estrutura do Banco de Dados

### Tabelas Principais

#### `rooms` - Salas de Perguntas
- `id` (UUID) - Identificador único
- `name` (TEXT) - Nome da sala
- `description` (TEXT) - Descrição da sala
- `createdAt` (TIMESTAMP) - Data de criação

#### `questions` - Perguntas e Respostas
- `id` (UUID) - Identificador único
- `roomId` (UUID) - Referência à sala
- `question` (TEXT) - Texto da pergunta
- `answer` (TEXT) - Resposta da IA
- `createdAt` (TIMESTAMP) - Data de criação

---

## 🌟 Funcionalidades Principais

### ✅ Implementadas
- [x] Criação de salas temáticas
- [x] Sistema de perguntas e respostas
- [x] Gravação de áudio no navegador
- [x] Interface responsiva e moderna
- [x] Validação de formulários
- [x] Cache inteligente com TanStack Query
- [x] Migrações de banco de dados
- [x] Configuração Docker para PostgreSQL

### 🚧 Em Desenvolvimento
- [ ] Integração com IA para respostas automáticas
- [ ] Sistema de autenticação
- [ ] Compartilhamento de salas
- [ ] Histórico de conversas
- [ ] Notificações em tempo real

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Eduardo Developer** - [GitHub](https://github.com/eduardotecnologo)

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela! ⭐**

</div>