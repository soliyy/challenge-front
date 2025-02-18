
Projeto Challenge Front

Descrição: 

Este projeto é composto por um sistema front-end em React integrado a uma API back-end desenvolvida em Spring Boot, com operações CRUD para gerenciamento de endereços. A API está conectada a um banco de dados Oracle, e o front-end consome essa API para exibir e manipular dados de endereços.

Estrutura do Projeto:

Front-End: Desenvolvido em React, com navegação usando React Router e estilização baseada nas cores da Porto Seguro.
Back-End: Construído com Spring Boot, com endpoints REST para operações CRUD no banco de dados Oracle.

Funcionalidades:

Listagem, adição e exclusão de endereços.
Conexão com banco de dados Oracle para persistência de dados.
Interface responsiva e estilizada com componentes Sobre, Header, e uma página inicial.

Configuração do Ambiente de Desenvolvimento:
Pré-requisitos:

Node.js: Necessário para o front-end.
Next.js: para a funcionalidades das paginas
Java e Maven: Necessários para o back-end com Spring Boot.
Banco de Dados Oracle: Configurado no Spring Boot para persistência dos dados.

Passos para Configuração:

Clone o Repositório
bash
git clone <https://github.com/soliyy/challenge-front>
cd challenge-front
Configuração do Front-End

Instale as dependências:

bash
npm install

Execute o front-end localmente:

bash
npm run dev

Configuração do Back-End:

Navegue até a pasta src/backend do projeto.
Configure o banco de dados no arquivo application.properties, com as credenciais do banco Oracle:
properties
spring.datasource.url=jdbc:oracle:thin:@//localhost:1521/seubanco
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha

Execute o back-end com Maven:

bash
mvn spring-boot:run
Executar o Projeto Completo

Com o back-end e o front-end em execução, o front-end se conectará à API para realizar operações de CRUD em endereços.

Estrutura de Pastas:

challenge-front/
├── src/
│   ├── backend/                # Projeto Spring Boot (back-end)
│   └── frontend/               # Projeto React/next(front-end)
└── README.md                   # Documentação do projeto

Deploy:

O deploy do front-end foi feito no Vercel, enquanto o back-end deve ser hospedado em um servidor que suporte Java, para conexão com o banco de dados Oracle.

Tecnologias Utilizadas:

React, next.js e Vite para o front-end.
Java com Spring Boot para o back-end.
Oracle Database para persistência dos dados.
Vercel para deploy do front-end.

