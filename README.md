# Next JS - Arquitetura Limpa ![Em Andamento](https://img.shields.io/badge/status-andamento-yellow)

O projeto **Next JS - Arquitetura Limpa** é uma aplicação de catálogo online desenvolvida com foco em boas práticas de organização, escalabilidade e performance. O principal objetivo é estruturar um projeto front-end moderno utilizando **React Query** e **Next.js**, com separação clara de responsabilidades, integração eficiente com o backend e estratégias avançadas de gerenciamento de dados.

A proposta é oferecer uma base sólida e reutilizável para sistemas web que demandem listagem, filtragem, cadastro e manipulação de dados, aproveitando ao máximo os recursos da stack **React + TypeScript + Tailwind + React Query**, com foco em produtividade e código limpo.

## Tecnologias
![Tecnologias](https://skillicons.dev/icons?i=typescript,nextjs,docker,postgres,react,nodejs,tailwind)

## Índice

- [Next JS - Arquitetura Limpa ](#next-js---arquitetura-limpa-)
  - [Tecnologias](#tecnologias)
  - [Índice](#índice)
  - [Sobre](#sobre)
  - [Funcionalidades](#funcionalidades)
  - [Instalação](#instalação)
  - [Uso](#uso)
  - [Resultados](#resultados)
  - [Contato](#contato)

## Sobre

Este projeto foi idealizado para estudar e aplicar:
- Estrutura de pastas e organização de código com base em arquitetura limpa;
- Data fetching eficiente com **React Query**, incluindo cache, refetch e loading states;
- Mutations otimizadas com **atualizações otimistas** e gerenciamento de erros;
- Filtros persistentes via parâmetros de URL, facilitando o compartilhamento de estados;
- Paginação e scroll infinito com atualização dinâmica dos dados;
- Boas práticas em escalabilidade e manutenibilidade com **TypeScript**.

## Funcionalidades

- 🔍 Filtros dinâmicos por categoria, preço e ordenação via parâmetros de URL;
- 📦 Listagem de produtos com paginação ou scroll infinito;
- ➕ Cadastro, edição e exclusão de produtos usando `mutations`;
- 🔄 Refetch e atualização otimista com React Query;
- 💾 Cache automático e invalidação inteligente;
- 🌐 Separação entre camadas de domínio, dados e apresentação;
- 🧪 Ambiente Docker configurado para simular backend com PostgreSQL (opcional).

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/nextjs-arquitetura-limpa.git
cd nextjs-arquitetura-limpa
npm install
```

Para rodar o ambiente com backend:

```bash
docker-compose up -d
npm run dev
```

## Uso

Após iniciar a aplicação, acesse:

```
http://localhost:3000
```

Você poderá:
- Navegar por produtos e aplicar filtros;
- Ver os dados refletidos na URL (deep linking);
- Cadastrar e gerenciar produtos (CRUD);
- Analisar logs e cache para entender o fluxo do React Query.

## Resultados

O projeto demonstra domínio em:

- ✅ React Query: queries, mutations, cache, refetch, optimistic updates;
- ✅ Next.js: rotas dinâmicas, server-side rendering e arquitetura modular;
- ✅ Gerenciamento de estado de dados com filtros por URL;
- ✅ Interface moderna com Tailwind CSS;
- ✅ Arquitetura limpa, separando camadas como `services`, `hooks`, `components`, e `pages`.

## Contato

📧 Email: [pedro.oliveira@monteirodev.com]  
🔗 LinkedIn: [linkedin.com/in/opedro-monteiro](https://linkedin.com/in/opedro-monteiro)
