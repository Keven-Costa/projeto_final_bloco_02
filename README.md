<p align="center">
  <img src="./assets/prateleira-digital.png" alt="Banner">
</p>

## 📌 Índice

- [📋 Sobre o Projeto](#sobre-o-projeto)
- [🛠️ Tecnologias Utilizadas](#tecnologias-utilizadas)
- [📦 Requisitos e Downloads](#requisitos-e-download)
- [📁 Estrutura do Projeto](#estrutura-do-projeto)
- [🗄️ Modelo de Dados](#modelo-de-dados)
<!-- - [📝 Funcionalidades Implementadas](#funcionalidades-implementadas)
- [📝 Acessar a Aplicação](#acessar-a-aplicacao)
- [🧪 Testando a Aplicação](#testando-a-aplicacao)
- [⚠️ Problemas Conhecidos e Soluções](#problemas-conhecidos)
- [📜 Scripts SQL](#scripts) -->

## API - Prateleira Digital

## <a id="sobre-o-projeto"></a> 📋 Sobre o Projeto

**Funcionalidades principais:**
### ✅ Gestão de Usuários

* [x] Cadastro de usuários com validação de e-mail e senha forte.
* [x] Armazenamento seguro de senhas (criptografia).
* [x] Upload de link para foto de perfil.

### ✅ Catálogo de Produtos

* [x] CRUD completo de produtos.
* [x] Controle de estoque (quantidade e preço decimal).
* [x] Relacionamento com categorias (exclusão em cascata configurada).

### ✅ Categorização

* [x] Cadastro e listagem de categorias únicas.
* [x] Visualização de todos os produtos vinculados a uma categoria específica.

## <a id="tecnologias-utilizadas"></a> 🛠️ Tecnologias Utilizadas

### Core
- **Node.js** - Ambiente de execução que permite rodar JavaScript no lado do servidor.

- **TypeScript** - Superconjunto de JavaScript que adiciona tipagem estática e recursos avançados ao desenvolvimento.

- **NestJS** - Framework progressivo para Node.js, focado em arquitetura modular, escalabilidade e facilidade de manutenção.

### Banco de Dados
- **TypeORM** - ORM (Object-Relational Mapper) para persistência e mapeamento de dados entre o código e o banco.

- **MySQL** - Banco de dados relacional utilizado para armazenamento dos dados em produção.

- **SQLite** - Banco de dados em memória utilizado para agilizar a execução de testes automatizados.

### Segurança

- **JWT (JSON Web Token)** - Padrão utilizado para a criação de tokens de acesso seguros para autenticação de usuários.

- **Passport** - Middleware de autenticação modular para Node.js, facilitando a implementação da estratégia JWT.

- **Bcrypt** - Biblioteca utilizada para a criptografia e hashing de senhas, garantindo a segurança dos dados sensíveis.

### Utilitários
- **Swagger (OpenAPI)** - Ferramenta para documentação interativa da API, permitindo testar os endpoints diretamente pelo navegador.

- **class-validator** - Utilizado para a validação de dados de entrada (DTOs) através de decorators, garantindo a integridade dos dados.

- **Jest** - Framework de testes em JavaScript com foco na simplicidade, utilizado para garantir a qualidade do código através de testes unitários.

### IDE e Ferramentas

- **Visual Studio Code** - Ambiente de desenvolvimento principal, utilizando extensões para suporte ao TypeScript, ESLint e NestJS.
- **MySQL Workbench** - Ferramenta visual para modelagem de dados, administração do banco de dados MySQL e execução de queries SQL.
- **Insomnia** - Cliente HTTP utilizado para testar os endpoints da API, validar o envio de JSON e verificar as respostas do servidor.
- **Git** - Sistema de controle de versões utilizado para o gerenciamento de branches e histórico de commits.

## <a id="requisitos-e-download"></a> 📦 Requisitos e Downloads

Pré-requisitos
Antes de executar o projeto, você precisará instalar as seguintes ferramentas:

| Ferramenta | Versão | Link de Download |
|------------|--------|-------------------|
| **Node.js** | 18 ou superior | [Node.js Official](https://nodejs.org/) |
| **npm** | 9.0+ | (Vem instalado com o Node) |
| **Nest CLI** | Mais recente | `npm install -g @nestjs/cli` |
| **MySQL** | 8.0+ | [MySQL Community](https://downloads.mysql.com/archives/workbench/)
| **VS Code** | Latest | [Visual Studio Code](https://code.visualstudio.com/) |
| **Insomnia** | Latest | [Insomnia](https://insomnia.rest/) |

### Instalação Rápida

1. **Node.js & npm**:
   - Baixe e instale a versão **LTS** do Node.js (v18 ou superior).
   - O `npm` será instalado automaticamente junto com o Node.
   - Verifique as versões: `node -v` e `npm -v`.

2. **NestJS CLI**:
   - Instale a interface de linha de comando do NestJS globalmente para gerenciar o projeto.
   - Comando: `npm install -g @nestjs/cli`
   - Verifique: `nest --version`

3. **Banco de Dados**:


4. **Dependências do Projeto**:
   - Navegue até a pasta raiz do projeto no terminal.
   - Instale todas as bibliotecas listadas no `package.json`:
   - Comando: `npm install`

5. **Variáveis de Ambiente**:
    -Crie um ar
    - Copie o arquivo `.env.example` para um novo arquivo chamado `.env`.
    - Configure as credenciais do banco de dados (DB_USER, DB_PASSWORD, JWT_SECRET).

## <a id="estrutura-do-projeto"></a> 📁 Estrutura do Projeto

```
prateleira-digital/
├── src
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── auth
│   │   ├── auth.module.ts
│   │   ├── bcrypt
│   │   │   └── bcrypt.ts
│   │   ├── constants
│   │   │   └── constants.ts
│   │   ├── controller
│   │   │   └── auth.controller.ts
│   │   ├── entities
│   │   │   └── usuariologin.entity.ts
│   │   ├── guard
│   │   │   ├── jwt-auth.guard.ts
│   │   │   └── local-auth.guard.ts
│   │   ├── services
│   │   │   └── auth.service.ts
│   │   └── strategy
│   │       ├── jwt.strategy.ts
│   │       └── local.strategy.ts
│   ├── categoria
│   │   ├── categoria.module.ts
│   │   ├── controller
│   │   │   └── categoria.controller.ts
│   │   ├── entities
│   │   │   └── categoria.entity.ts
│   │   └── services
│   │       └── categoria.service.ts
│   ├── main.ts
│   ├── produto
│   │   ├── controller
│   │   │   └── produto.controller.ts
│   │   ├── entities
│   │   │   └── produto.entity.ts
│   │   ├── produto.module.ts
│   │   └── services
│   │       └── produto.service.ts
│   └── usuario
│       ├── controller
│       │   └── usuario.controller.ts
│       ├── entities
│       │   └── usuario.entity.ts
│       ├── services
│       │   └── usuario.service.ts
│       └── usuario.module.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
```

## <a id="modelo-de-dados"></a> 🗄️ Modelo de Dados

### MER
### DER

Abaixo estão detalhadas as entidades do sistema, seus tipos de dados e restrições.

Com certeza! Segui exatamente o modelo que você enviou para estruturar as três entidades.

---

### 👤 Entidade Usuário (`tb_usuarios`)

*Responsável pelo acesso ao sistema.*

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `id` | int | Chave primária (Gerada automaticamente) |
| `nome` | String(255) | Nome completo do usuário (obrigatório) |
| `usuario` | String | E-mail para login (obrigatório, único) |
| `senha` | String | Senha com no mínimo 8 caracteres (obrigatório) |
| `foto` | String(5000) | URL ou Base64 da foto de perfil |

---

### 📦 Entidade Produto (`tb_produtos`)

*O item central do catálogo.*

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `id` | int | Chave primária (Gerada automaticamente) |
| `nome` | String(255) | Nome do produto (obrigatório) |
| `descricao` | String(1000) | Descrição detalhada do item (opcional) |
| `preco` | decimal(10,2) | Valor unitário do produto (obrigatório) |
| `quantidade` | int | Quantidade em estoque (obrigatório) |
| `categoriaId` | int | Chave estrangeira - Relacionamento ManyToOne |

---

### 📂 Entidade Categoria (`tb_categorias`)

*Agrupamento lógico de produtos.*

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `id` | int | Chave primária (Gerada automaticamente) |
| `nome` | String | Nome da categoria (obrigatório, único) |
| `descricao` | String | Descrição da categoria (obrigatório) |

---


<!-- ## <a id="funcionalidades-implementadas"></a> 📝 Funcionalidades Implementadas

### ✅ Usuário
### ✅ Categoria
### ✅ Produto


## <a id="acessar-a-aplicacao"></a> Acessar a Aplicação

## <a id="testando-a-aplicacao"></a> 🧪 Testando a Aplicação

## <a id="problemas-conhecidos"></a> ⚠️ Problemas Conhecidos e Soluções

## <a id="scripts"></a> 📜 Scripts SQL
### Criação Manual das Tabelas (se necessário) -->