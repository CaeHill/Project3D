# 🃏 Calculadora de Truco 3D (Full-Stack)

Projeto de uma calculadora de pontos inovadora com temática de Truco, utilizando modelos de cartas 3D iterativas. O repositório segue a arquitetura de **Monorepo**, contendo tanto o cliente visual (Frontend) quanto a API de dados (Backend).

---

## 🏗️ Arquitetura do Monorepo

O ecossistema é dividido em dois ambientes isolados, cada um com suas próprias dependências, motor e responsabilidades.

## 🌐 1. Frontend (`/frontend`)
Aplicação cliente renderizada no navegador do usuário.
* **Tecnologias:** React, Vite, TypeScript, Three.js (via React Three Fiber).
* **Responsabilidade:** Renderizar a mesa 3D, gerenciar a interação do usuário com as cartas, calcular a matemática em tempo real e comunicar-se com o backend quando necessário.

### 📁 Estrutura de Pastas Detalhada

* **`public/`** (Arquivos Estáticos "Brutos"):
    * 📁 **`fonts/`**: Tipografias `.json` ou `.ttf` que o Three.js precisa para carregar texto em 3D.
    * 📁 **`models/`**: Onde vivem os modelos 3D brutos (ex: `carta.glb`, `mesa.glb`).
    * 📁 **`sounds/`**: Arquivos de áudio para efeitos sonoros (clique, virar carta, grito de truco).
    * 📁 **`textures/`**: Imagens (`.jpg`, `.png`) usadas para "pintar" e dar detalhes aos modelos 3D.
    * `favicon.svg` e `icons.svg`: Ícones que aparecem na aba do navegador.
* **`src/`** (Código-Fonte Processado):
    * 📁 **`assets/`**: Imagens 2D tradicionais (logos, ícones) importadas via código `.tsx`.
    * 📁 **`components/`**: As "peças de Lego" visuais do projeto, divididas em dois mundos:
        * 📁 **`3D/`**: Componentes que vivem *dentro* do Canvas 3D (malhas, luzes, materiais).
        * 📁 **`UI/`**: Componentes 2D tradicionais em HTML/CSS (HUD, Menu, Placar) que flutuam sobre o 3D.
    * 📁 **`styles/`**: Todos os arquivos CSS de estilização do frontend.
    * 📁 **`types/`**: Definições de Tipos do TypeScript (os "contratos" que definem o que é um `Jogador` ou uma `Carta`).
    * 📁 **`utils/`**: Funções matemáticas e lógicas puras (código que calcula coisas sem gerar visual na tela).
    * `App.tsx`: O componente "Maestro", responsável por unir a interface 2D (`UI`) com a cena 3D (`3D`).
    * `main.tsx`: O arquivo que injeta o React no navegador.

---

## ⚙️ 2. Backend (`/backend`)
Servidor API REST para persistência de dados e gamificação futura.
* **Tecnologias:** Java 21, Spring Boot, Spring Data JPA.
* **Infraestrutura:** PostgreSQL rodando via Docker (`truco-db`).
* **Responsabilidade:** Gerenciar a segurança, regras do ranking (Leaderboard) e o histórico de pontuações de forma confiável no banco de dados.

### 📁 Estrutura de Pastas Detalhada (MVC Corporativo)

A estrutura dentro de `src/main/java/Project3D/backend/` segue a separação rigorosa de camadas de responsabilidade:

* **📁 `controllers/`** (Os Garçons):
    * **O que fazem:** São a "boca" da API. Eles expõem os endpoints (URLs) que o frontend chama (ex: `/api/ranking`).
    * **Responsabilidade:** Recebem as requisições HTTP do React, validam os dados básicos e repassam a ordem para a camada de `Service`. Quando o `Service` devolve o resultado, o Controller formata a resposta (JSON) e envia de volta ao navegador.
* **📁 `services/`** (O Cérebro):
    * **O que fazem:** É aqui que mora a lógica de negócio pesada.
    * **Responsabilidade:** Realizam cálculos complexos, validações de regras de segurança e manipulam os dados antes de salvar no banco ou devolver ao controller. Eles **não** sabem o que é HTTP.
* **📁 `repositories/`** (Os Bibliotecários):
    * **O que fazem:** São interfaces mágicas que usam o Spring Data JPA.
    * **Responsabilidade:** Conversam direto com o banco de dados PostgreSQL. Elas traduzem comandos simples do Java (ex: `rankingRepository.save(jogador)`) em comandos SQL complexos para o Docker.
* **📁 `models/`** (O Molde/Entidade):
    * **O que fazem:** São classes Java simples (`POJOs`) anotadas.
    * **Responsabilidade:** Elas representam fisicamente a estrutura das tabelas no banco de dados. Ao criar a classe `Jogador.java` aqui, o JPA cria automaticamente a tabela `jogador` no PostgreSQL.
* **📁 `resources/`**:
    * `application.properties`: O arquivo de configuração principal (o "fio do telefone" que mapeia o banco de dados e as senhas do Docker).

---

## 🚀 Como Rodar o Projeto (Full-Stack)

### 1. Iniciar o Banco de Dados (Docker)
Abra o Docker Desktop e garanta que o contêiner `truco-db` está rodando. Se não estiver, rode o comando no terminal:
`docker run --name truco-db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=senha123 -e POSTGRES_DB=truco_db -p 5432:5432 -d postgres:16`

### 2. Iniciar a API Backend (Spring Boot)
1. Navegue para o backend: `cd backend`
2. Inicie o servidor Maven: `.\mvnw spring-boot:run`
3. A API estará escutando em `http://localhost:8080`.

### 3. Iniciar a Interface Visual (React)
1. Abra um *novo* terminal na raiz do projeto.
2. Navegue para o frontend: `cd frontend`
3. Instale as dependências (na primeira vez): `npm install`
4. Inicie o servidor Vite: `npm run dev`
5. O site estará escutando em `http://localhost:5173`.