# Next Level Week 4

Esse projeto é resultado da quarta **Next Level Week** da equipe RocketSeat. Nele foi construida uma API com objetivo de cadastrar pessoas, pesquisas, enviar e-mails com uma pesquisa escolhida e listar o cálculo de NPS (Net Promoter Score) de uma pesquisa específica. Utilizou-se neste projeto Node.Js, testes de integração com Jest, Nodemailer como biblioteca para envio de e-mail, banco de dados Sqlite em conjunto com TypeORM e yup para validação de entrada de dados.

## Requisitos

* [NodeJs] - Nodejs 10 ou superior;
* [Postman] ou [Insomnia] - Cliente HTTP para efetuar requisiçõs à API;

## Instalação

Após clonar este projeto, crie um arquivo *.env* na raíz deste, seguindo o exemplo de variáveis de ambiente e seus valores no arquivo *.env.example* também na raíz do projeto. Em seguida, no seu terminal de comandos execute o comando `npm install` para instalação das dependências necessárias ao projeto, depois deste comando, execute também *npm run typeorm migration:run*, para que o arquivo do banco de dados, o próprio banco e suas tabelas sejam criados. Quase pronto, ainda em segu terminal, execute o comando *npm run dev* para que o servidor comece a executar e fique disponível na porta **3001** (esta porta pode ser alterada no arquivo src/server.ts).

## Utilização
Caso esteja usando o [Postman], pode acessar [este link] para baixar uma collection contendo as rotas possíveis para uso da api.

### <u>Criar um usuário</u>

**Tipo de requisição**: POST

**URL**: http://localhost:3001/users

**Parâmetros**: -

**Corpo**: 
```json
{
  "name": "example",
  "email": "example@email.com"
}
```

**Retorno**: 
```json
{
    "id": "adbc80a2-c821-4215-bda3-fe0755e7e7d9",
    "name": "Welington Fidelis",
    "email": "welingtonfidelis@gmail.com",
    "created_at": "2021-02-27T20:21:06.000Z"
}
```

### <u>Listar usuários</u>

**Tipo de requisição**: GET

**URL**: http://localhost:3001/users

**Parâmetros**: -

**Corpo**: -

**Retorno**: 
```json
[
    {
        "id": "19af4a1b-c07a-4c36-ba61-c98c21f2165c",
        "name": "Welington fidelis",
        "email": "welingtonfidelis@gmail.com",
        "created_at": "2021-02-25T22:49:38.000Z"
    },
    {
        "id": "6ae91433-cf18-4916-af39-b534624f45c9",
        "name": "Welington fidelis",
        "email": "welingtonfidelis2@gmail.com",
        "created_at": "2021-02-27T17:45:17.000Z"
    },
]
```

### <u>Criar uma pesquisa</u>

**Tipo de requisição**: POST

**URL**: http://localhost:3001/surveys

**Parâmetros**: -

**Corpo**: 
```json
{
  "title": "example",
  "description": "example"
}
```

**Retorno**: 
```json
{
    "id": "5c13f9cd-45e5-414d-82a1-4e8d40b2d72f",
    "title": "pesquisa 1",
    "description": "Pesquisa 1",
    "created_at": "2021-02-27T20:27:53.000Z"
}
```

### <u>Listar pesquisas</u>

**Tipo de requisição**: GET

**URL**: http://localhost:3001/surveys

**Parâmetros**: -

**Corpo**: -

**Retorno**: 
```json
[
     {
        "id": "c213512d-db7a-424b-9219-491ae45ade65",
        "title": "pesquisa 1",
        "description": "Pesquisa tope 1",
        "created_at": "2021-02-25T22:49:47.000Z"
    },
    {
        "id": "dd77bd45-3bb2-4560-b31f-6fc38b6629ef",
        "title": "pesquisa 2",
        "description": "Pesquisa tope 2",
        "created_at": "2021-02-27T17:45:51.000Z"
    }
]
```

### <u>Enviar um email com pesquisa</u>

**Tipo de requisição**: POST

**URL**: http://localhost:3001/send-mail

**Parâmetros**: -

**Corpo**: 
```json
{
    "email": "example@email",
    "survey_id": "5c13f9cd-45e5-414d-82a1-4e8d40b2d72f"
}
```

**Retorno**: 
```json
{
    "id": "d608b92a-0e2b-4656-b886-77718a028ac4",
    "user_id": "adbc80a2-c821-4215-bda3-fe0755e7e7d9",
    "survey_id": "5c13f9cd-45e5-414d-82a1-4e8d40b2d72f",
    "created_at": "2021-02-27T20:31:25.000Z"
}
```

### <u>Dar nota à uma pesquisa</u>

**Tipo de requisição**: GET

**URL**: http://localhost:3001/answers/6?u=survey_users_id

**Parâmetros**: 
```json
  u: id de uma pesquisa vinculada à um usuário (surveys_users) através do envio de email de uma pesquisa
```

**Corpo**: -

**Retorno**: 
```json
{
    "id": "d608b92a-0e2b-4656-b886-77718a028ac4",
    "user_id": "adbc80a2-c821-4215-bda3-fe0755e7e7d9",
    "survey_id": "5c13f9cd-45e5-414d-82a1-4e8d40b2d72f",
    "value": 6,
    "created_at": "2021-02-27T20:31:25.000Z"
}
```

### <u>Visualizar NPS de uma pesquisa</u>

**Tipo de requisição**: GET

**URL**: http://localhost:3001/nps/survey_id

**Parâmetros**: -

**Corpo**: -

**Retorno**: 
```json
{
    "passives": 1,
    "promoters": 3,
    "detractors": 2,
    "totalAnswers": 6,
    "nps": 16.67
}
```

## Contato
welingtonfidelis@gmail.com
<br>
Sugestões e pull requests são sempre bem vindos 🤓 

License
----

MIT

**Free Software, Hell Yeah!**

[Expo]: <https://expo.io/>
[NodeJs]: <https://nodejs.org/en/>
[knex]: <http://knexjs.org/>
[Sequelize]: <https://sequelize.org/>
[Postman]: <https://www.postman.com/downloads/>
[Insomnia]: <https://insomnia.rest/download/core/?&ref=>
[este link]: <https://www.getpostman.com/collections/9fe29fdf47350614cc8e>