# Bem-vindos ao repositório do Trade App

## Contexto

---

Esse projeto foi desenvolvido para meu portifólio.

A proposta era desenvolver uma aplicação de trade de moedas, onde o usuário pode se cadastrar, fazer login e efetuar seus trades.
O app conta com atualização em tempo real da cotação das moedas USD e GBP.

---

## Como instalar

Pre-requisitos para rodar o projeto: 
- mongoDB
- NPM

Copie o ssh do projeto `git@github.com:pedrodelicoli/trade-app.git`

* Abra um terminal no seu computador e utilize os comandos a baixo na ordem que são apresentados:

  * `git clone git@github.com:pedrodelicoli/trade-app.git`
  * `cd trade-app`
  * `npm install`
  Acesse as pastas /frontend/ e /backend para rodar a aplicação e o servidor http respectivamente.
  * `npm start`

  O backend está configurado para rodar na porta local 3001. Caso deseje utilizar outra porta utilize o arquivo `.env` para trocar para a porta desejada.

---

### Tecnologias

---

Foi utilizado para o desenvolvimento desse projeto o NodeJS com Express para a criação básica, Mocha/Chai para a criação dos teste unitários e de integração. No frontend foram utilizados React com ContextAPI para gerenciamento de estado.

---

### Banco de dados

O banco escolhido para a aplicação foi `Mongodb`, pela agilidade no desenvolvimento, facilidade de adição de novas informações sem necessitar re-estruturar toda a estrutura e pela robustes para lidar com grande volume de requisições.

---

## Próximos passos

* Deploy no Heroku

---

## Contato

<div style="display: flex; align-items: center; justify-content: space-between;">
  <div>
    <h2> Pedro Delicoli </h2>
  <div style="display: flex;align-items: center;">
    <img src="./frontend/images/github-logo.png" alt="LinkedIn" style="width:20px;"/> https://github.com/pedrodelicoli
  </div>
  <div style="display: flex;align-items: center;">
    <img src="./frontend/images/linkedin-logo.png" alt="LinkedIn" style="width:20px;"/> https://www.linkedin.com/in/pedrodelicoli/
  </div>
  <br/>
  Email: pedrodelicoli@hotmail.com  
<br/>

---
