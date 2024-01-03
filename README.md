<img src="/public/Preview.png" alt="Application Preview" />

# API Blog

![Static Badge](https://img.shields.io/badge/JavaScript-yellow)
![Static Badge](https://img.shields.io/badge/NodeJs-16.0.0-green)
![Static Badge](https://img.shields.io/badge/MySQL-8.0.23-darkblue)
![Static Badge](https://img.shields.io/badge/Sequelize-6.30.0-blue)
![Static Badge](https://img.shields.io/badge/JsonWebToken-9.0.0-white)
![Static Badge](https://img.shields.io/badge/Nodemon-2.0.22-green)
![Static Badge](https://img.shields.io/badge/Express-4.18.2-white)
![Static Badge](https://img.shields.io/badge/Joi-17.6.0-yellow)
![Static Badge](https://img.shields.io/badge/Jest-26.0.1-red)
![Static Badge](https://img.shields.io/badge/Mocha-8.4.0-darkred)
![Static Badge](https://img.shields.io/badge/Chai-4.3.4-red)
![Static Badge](https://img.shields.io/badge/Sinon-11.1.1-lightgreen)
![Static Badge](https://img.shields.io/badge/Docker-23.0.3-blue)
![Static Badge](https://img.shields.io/badge/DockerCompose-1.29-blue)

<details>
  <summary><strong>Português</strong></summary>

### Descrição:
A Blog API é uma REST API desenvolvida com o objetivo de gerenciar através de um CRUD as postagens de um blog e armazenalas em um banco de dados, com as seguranças e validações necessarias. Durante o desenvolvimento foi utilizado as seguintes tecnologias:  JavaScript, MySQL, Sequelize, JsonWebToken, NodeJs, Nodemon, Express, Joi, Jest, Docker, Docker-Compose, Mocha, Chai, Sinon.
  
### Funcionalidades:
- Endpoints que serão conectados ao banco de dados seguindo princípios REST.
- Controle de usuários através de validação JWT.
- Relacionamento usuário e postagem, pois para fazer uma postagem é necessário um usuário e login.
- Relacionamento de postagens com categorias e categorias com postagens, pois será necessário utilizar categorias para postagens.

### Como acessar com Docker
  **:warning: Antes de começar, seu docker-compose precisa estar na versão `1.29` ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está `1.26.0` por`1.29.2`.**

  - Abra o terminal e faça um clone do repositório.
  ```bash
    git clone git@github.com:hiagoisoppo/api-blog.git
  ```
 - Acesse a pasta clonada do repositório, e instale as dependências.
  ```bash
    cd api-blog
    npm install
  ```
  - Execute os serviços `node` e`db`.
  ```bash
    docker-compose up -d --build
  ```
  - Anexe ao `container` executado no comando anterior.
  ```bash
    docker exec -it blogs_api bash
  ```
  - Instale as dependências dentro do container.
  ```bash
    npm install
  ```
  - Inicie o servidor de desenvolvimento dentro do container.
  ```bash
    npm run drop
    npm run prestart
    npm run seed
    npm run start
  ```
  - Agora vá em “Usando solicitações HTTP para testar a API”.

### Como acessar a aplicação localmente:
  - Abra o terminal e faça um clone do repositório.
  ```bash
    git clone git@github.com:hiagoisoppo/api-blog.git
  ```
  - Acesse a pasta clonada do repositório, e instale as dependências.
  ```bash
    cd api-blog
    npm install
  ```
  - Rename the `env.example` file to `.env`.
  - Inicie o servidor de desenvolvimento.
  ```bash
    npm run drop
    npm run prestart
    npm run seed
    env $(cat .env) npm run start
  ```
  - - Agora vá em “Usando solicitações HTTP para testar a API”.

### Usando solicitações HTTP para testar a API
   - Acesse uma plataforma de sua preferência para fazer solicitações HTTP, como [ThunderClient](https://www.thunderclient.com/) ou [Insomnia](https://insomnia.rest/).
   - Importe o arquivo de solicitação HTTP válido para sua plataforma da pasta `requestCollection`.
   - Agora você pode testar esta API.
</details>

<details>
  <summary><strong>English</strong></summary>

### Description:
The Blog API is a REST API developed with the aim of managing blog posts through CRUD and storing them in a database, with the necessary security and validations. During development, the following technologies were used: JavaScript, MySQL, Sequelize, JsonWebToken, NodeJs, Nodemon, Express, Joi, Jest, Docker, Docker-Compose, Mocha, Chai, Sinon.
  
### Functionalities:
- Endpoints that will be connected to the database following REST principles.
- User control through JWT validation.
- User and post relationship, since to make a post you need a user and login.
- Relationship of posts to categories and categories to posts, as it will be necessary to use categories for posts.

### How to access with Docker
  **:warning: Before you begin, your docker-compose needs to be at version `1.29` or higher. [Look here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) or [in the documentation](https://docs.docker.com/compose/install/) how to install it. In the first article, you can replace where it is with `1.26.0` with `1.29.2`.**

  - Open the terminal and clone the repository.
  ```bash
    git clone git@github.com:hiagoisoppo/api-blog.git
  ```
 - Access the cloned repository and install the dependencies.
  ```bash
    cd api-blog
    npm install
  ```
  - Run the `node` and `db` services.
  ```bash
    docker-compose up -d --build
  ```
  - Attach to the `container` executed in the previous command.
  ```bash
    docker exec -it blogs_api bash
  ```
  - Install the dependencies inside the container.
  ```bash
    npm install
  ```
  - Start the development server inside the container.
  ```bash
    npm run drop
    npm run prestart
    npm run seed
    npm run start
  ```
  - Now go to "Using HTTP requests to test the API".

### How to access the application locally:
  - Open the terminal and clone the repository.
  ```bash
    git clone git@github.com:hiagoisoppo/api-blog.git
  ```
  - Access the cloned repository and install the dependencies.
  ```bash
    cd api-blog
    npm install
  ```
  - Rename the `env.example` file to `.env`.
  - Start the development server.
  ```bash
    npm run drop
    npm run prestart
    npm run seed
    env $(cat .env) npm run start
  ```
  - Now go to "Using HTTP requests to test the API".

### Using HTTP requests to test the API
  - Access a platform of your choice to make HTTP requests, such as [ThunderClient](https://www.thunderclient.com/) or [Insomnia](https://insomnia.rest/).
  - Import the valid HTTP request file for your platform from the `requestCollection` folder.
  - Now you can test this API.
</details>

<details>
  <summary><strong>API REST - Endpoints</strong></summary>
  
  ### `GET` /
  - Health Check response whitout body, just a http status 200.

  ### `POST` /login
  - Send Body:
  ```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```
  - Response:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImVtYWlsIjoibGV3aXNoYW1pbHRvbkBnbWFpbC5jb20iLCJpbWFnZSI6Imh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMS8xOC9MZXdpc19IYW1pbHRvbl8yMDE2X01hbGF5c2lhXzIuanBnIiwiaWF0IjoxNzA0MzE0MDA0fQ.Kg50LS-pBr5n1o3lhTRT7PewymAYX367rZebuiHNxZ4"
  }
  ```

  ### `GET` /user
  - Send Header:
  ```json
  {
    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImVtYWlsIjoibGV3aXNoYW1pbHRvbkBnbWFpbC5jb20iLCJpbWFnZSI6Imh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMS8xOC9MZXdpc19IYW1pbHRvbl8yMDE2X01hbGF5c2lhXzIuanBnIiwiaWF0IjoxNzA0MzE0MDA0fQ.Kg50LS-pBr5n1o3lhTRT7PewymAYX367rZebuiHNxZ4"
  }
  ```
  - Response:
  ```json
  [
    {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    {
      "id": 2,
      "displayName": "Michael Schumacher",
      "email": "MichaelSchumacher@gmail.com",
      "image": "https://sportbuzz.uol.com.br/media/_versions/gettyimages-52491565_widelg.jpg"
    },
    ...
  ]
  ```

  ### `GET` /user/:id
  - Send Header:
  ```json
  {
    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImVtYWlsIjoibGV3aXNoYW1pbHRvbkBnbWFpbC5jb20iLCJpbWFnZSI6Imh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMS8xOC9MZXdpc19IYW1pbHRvbl8yMDE2X01hbGF5c2lhXzIuanBnIiwiaWF0IjoxNzA0MzE0MDA0fQ.Kg50LS-pBr5n1o3lhTRT7PewymAYX367rZebuiHNxZ4"
  }
  ```
  - Response:
  ```json
  {
    "id": 1,
    "displayName": "Lewis Hamilton",
    "email": "lewishamilton@gmail.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  }
  ```

  ### `DELETE` /user/me
  - Send Header:
  ```json
  {
    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImVtYWlsIjoibGV3aXNoYW1pbHRvbkBnbWFpbC5jb20iLCJpbWFnZSI6Imh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMS8xOC9MZXdpc19IYW1pbHRvbl8yMDE2X01hbGF5c2lhXzIuanBnIiwiaWF0IjoxNzA0MzE0MDA0fQ.Kg50LS-pBr5n1o3lhTRT7PewymAYX367rZebuiHNxZ4"
  }
  ```
  - Delete response whitout body, just a http status 204.

  ### `POST` /user
  - Send Body:
  ```json
  {
    "displayName": "Felipe Wiltshire",
    "email": "lipe@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```
  - Response:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZGlzcGxheU5hbWUiOiJGZWxpcGUgV2lsdHNoaXJlIiwiZW1haWwiOiJsaXBlQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaW1hZ2UiOiJodHRwOi8vNC5icC5ibG9nc3BvdC5jb20vX1lBNTBhZFEtN3ZRL1MxZ2ZSXzZ1ZnBJL0FBQUFBQUFBQUFrLzFFckpHZ1JXWkRnL1M0NS9icmV0dC5wbmciLCJpYXQiOjE3MDQzMTQ0OTJ9._tBFpBGufKqSuCRvB2KF8ztBaq-ZrjoI_XBbygjP8gU"
  }
  ```
  ### `GET` /categories
  - Send Header:
  ```json
  {
    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImVtYWlsIjoibGV3aXNoYW1pbHRvbkBnbWFpbC5jb20iLCJpbWFnZSI6Imh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMS8xOC9MZXdpc19IYW1pbHRvbl8yMDE2X01hbGF5c2lhXzIuanBnIiwiaWF0IjoxNzA0MzE0MDA0fQ.Kg50LS-pBr5n1o3lhTRT7PewymAYX367rZebuiHNxZ4"
  }
  ```
  - Response:
  ```json
  [
    {
      "id": 1,
      "name": "Inovação"
    },
    {
      "id": 2,
      "name": "Escola"
    },
    ...
  ]
  ```

  ### `POST` /categories
  - Send Header:
  ```json
  {
    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImVtYWlsIjoibGV3aXNoYW1pbHRvbkBnbWFpbC5jb20iLCJpbWFnZSI6Imh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMS8xOC9MZXdpc19IYW1pbHRvbl8yMDE2X01hbGF5c2lhXzIuanBnIiwiaWF0IjoxNzA0MzE0MDA0fQ.Kg50LS-pBr5n1o3lhTRT7PewymAYX367rZebuiHNxZ4"
  }
  ```
  - Send Body:
  ```json
  {
    "name": "Typescript"
  }
  ```
  - Response:
  ```json
  {
    "id": 3,
    "name": "Typescript"
  }
  ```

  ### `POST` /post
  - Send Header:
  ```json
  {
    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImVtYWlsIjoibGV3aXNoYW1pbHRvbkBnbWFpbC5jb20iLCJpbWFnZSI6Imh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMS8xOC9MZXdpc19IYW1pbHRvbl8yMDE2X01hbGF5c2lhXzIuanBnIiwiaWF0IjoxNzA0MzE0MDA0fQ.Kg50LS-pBr5n1o3lhTRT7PewymAYX367rZebuiHNxZ4"
  }
  ```
  - Send Body:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1]
  }
  ```
  - Response:
  ```json
  {
    "id": 3,
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "userId": 3,
    "published": "2024-01-03T20:47:14.296Z",
    "updated": "2024-01-03T20:47:14.296Z"
  }
  ```

  ### `GET` /post
  ##### `Search by text option` /post/search?q=`string`
  - Send Header:
  ```json
  {
    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImVtYWlsIjoibGV3aXNoYW1pbHRvbkBnbWFpbC5jb20iLCJpbWFnZSI6Imh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMS8xOC9MZXdpc19IYW1pbHRvbl8yMDE2X01hbGF5c2lhXzIuanBnIiwiaWF0IjoxNzA0MzE0MDA0fQ.Kg50LS-pBr5n1o3lhTRT7PewymAYX367rZebuiHNxZ4"
  }
  ```
  - Response:
  ```json
  [
    {
      "id": 3,
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "published": "2024-01-03T20:47:14.000Z",
      "updated": "2024-01-03T20:47:14.000Z",
      "userId": 3,
      "user": {
        "id": 3,
        "displayName": "Felipe Wiltshire",
        "email": "lipe@email.com",
        "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
      },
      "categories": [
        {
          "id": 1,
          "name": "Inovação"
        }
      ]
    },
    {
      "id": 4,
      "title": "Old updates, May 1st",
      "content": "its me mario in the blog",
      "published": "2024-01-03T20:48:43.000Z",
      "updated": "2024-01-03T20:48:43.000Z",
      "userId": 3,
      "user": {
        "id": 3,
        "displayName": "Felipe Wiltshire",
        "email": "lipe@email.com",
        "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
      },
      "categories": [
        {
          "id": 1,
          "name": "Inovação"
        }
      ]
    },
    ...
  ]
  ```

  ### `GET` /post/:id
  - Send Header:
  ```json
  {
    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImVtYWlsIjoibGV3aXNoYW1pbHRvbkBnbWFpbC5jb20iLCJpbWFnZSI6Imh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMS8xOC9MZXdpc19IYW1pbHRvbl8yMDE2X01hbGF5c2lhXzIuanBnIiwiaWF0IjoxNzA0MzE0MDA0fQ.Kg50LS-pBr5n1o3lhTRT7PewymAYX367rZebuiHNxZ4"
  }
  ```
  - Response:
  ```json
  {
    "id": 3,
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "published": "2024-01-03T20:47:14.000Z",
    "updated": "2024-01-03T20:47:14.000Z",
    "userId": 3,
    "user": {
      "id": 3,
      "displayName": "Felipe Wiltshire",
      "email": "lipe@email.com",
      "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    },
    "categories": [
      {
        "id": 1,
        "name": "Inovação"
      }
    ]
  }
  ```

   ### `PUT` /post/:id
  - Send Header:
  ```json
  {
    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImVtYWlsIjoibGV3aXNoYW1pbHRvbkBnbWFpbC5jb20iLCJpbWFnZSI6Imh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMS8xOC9MZXdpc19IYW1pbHRvbl8yMDE2X01hbGF5c2lhXzIuanBnIiwiaWF0IjoxNzA0MzE0MDA0fQ.Kg50LS-pBr5n1o3lhTRT7PewymAYX367rZebuiHNxZ4"
  }
  ```
  - Send Body:
  ```json
  {
    "title": "Latest updates, August 111111st",
    "content": "The whole text for the blog post goes here in this key"
  }
  ```
  - Response:
  ```json
  {
    "id": 3,
    "title": "Latest updates, August 111111st",
    "content": "The whole text for the blog post goes here in this key",
    "published": "2024-01-03T20:47:14.000Z",
    "updated": "2024-01-03T20:47:14.000Z",
    "userId": 3,
    "user": {
      "id": 3,
      "displayName": "Felipe Wiltshire",
      "email": "lipe@email.com",
      "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    },
    "categories": [
      {
        "id": 1,
        "name": "Inovação"
      }
    ]
  }
  ```

  ### `DELETE` /post/:id
  - Send Header:
  ```json
  {
    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZGlzcGxheU5hbWUiOiJMZXdpcyBIYW1pbHRvbiIsImVtYWlsIjoibGV3aXNoYW1pbHRvbkBnbWFpbC5jb20iLCJpbWFnZSI6Imh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvMS8xOC9MZXdpc19IYW1pbHRvbl8yMDE2X01hbGF5c2lhXzIuanBnIiwiaWF0IjoxNzA0MzE0MDA0fQ.Kg50LS-pBr5n1o3lhTRT7PewymAYX367rZebuiHNxZ4"
  }
  ```
  - Delete response whitout body, just a http status 204.

</details>