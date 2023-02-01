<h1 align="center"> Receips REST API </h1>

<p align="center">
Esse projeto foi desenvolvido com propósitos pessoais de estudo e aprofundamento nas tecnologias: Node.js, TypeScript, Express, PrismaORM e SQLite.
Todo o conteúdo disponível nesse repositório foi feito com base nos conteúdos disponíveis nas documentações das tecnologias utilizadas.
</p>

<p align="center">
<a href="#executando-o-projeto">Executar projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
  
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

## 💿 Executando o projeto

Instale as dependências do projeto com o comando:

<pre> npm install </pre>


- Execute o comando `npm run dev`

    <pre>npm run dev</pre>

A API pode ser acessada em [http://localhost:3030](http://localhost:3030).
<br><br>


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/) 19.5.0
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [Insomnia](https://insomnia.rest/)
- [Vite](https://vitejs.dev/)

## 💻 Projeto

Essa é uma API escrita com os conceitos arquiteturais REST, ela realiza chamadas HTTP em diferentes rotas utilizando o framework Express do Node. Cada rota e método
HTTP é responsavel por realizar uma query diferente através do PrismaClient. O PrismaClient é a instância que se conecta ao banco de dados através do ORM Prisma e
realiza diferentes operações SQL através dos Models definidos no schema do Prisma (prisma.schema). Essa API pode, por exemplo, criar um novo autor (author) e uma nova nota fiscal (receipt) no nome desse autor, e registrá-los no banco de dados através do Prisma. É possível ver quais relações authors e receipts possuem nos Models definidos no schema do Prisma. O Client API utilizado nesse projeto para desenvolvimento e debugging foi o Insomnia, fica a critério do usuário escolher seu API Client de preferência como por exemplo, o Postman.

## :memo: Licença

Esse projeto está sob a licença MIT.
