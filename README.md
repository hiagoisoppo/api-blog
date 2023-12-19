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
    npm run dev
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
    env $(cat .env) npm run dev
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
    npm run dev
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
    env $(cat .env) npm run dev
  ```
  - Now go to "Using HTTP requests to test the API".

### Using HTTP requests to test the API
  - Access a platform of your choice to make HTTP requests, such as [ThunderClient](https://www.thunderclient.com/) or [Insomnia](https://insomnia.rest/).
  - Import the valid HTTP request file for your platform from the `requestCollection` folder.
  - Now you can test this API.
</details>
