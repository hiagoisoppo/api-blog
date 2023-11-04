<img src="/public/Preview.png" alt="Application Preview" />

# :floppy_disk: [API Blog](projectlink.com)

An API and a database for producing content on a blog! For this, an application was developed in Node.js using the sequelize package to create a CRUD of posts, in addition to this, user validation was implemented using the JsonWebToken library.

## <summary>:bomb: Features</summary>

- Endpoints that will be connected to the database following REST principles.
- User control through JWT validation.
- User and post relationship, since to make a post you need a user and login.
- Relationship of posts to categories and categories to posts, as it will be necessary to use categories for posts.

## <summary>:file_folder: Technologies</summary>

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [JsonWebToken](https://jwt.io/)
- [Nodemon](https://nodemon.io/)
- [NodeJs](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [Joi](https://joi.dev/)
- [Jest](https://jestjs.io/pt-BR/)
- [Docker](https://www.docker.com/)
- [Docker-Compose](https://docs.docker.com/compose/)

## <summary>🐋 How to access with Docker</summary>
  **:warning: Before you begin, your docker-compose needs to be at version 1.29 or higher. [Look here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) or [in the documentation](https://docs.docker.com/compose/install/) how to install it. In the first article, you can replace where it is with `1.26.0` with `1.29.2`.**

  - Open the terminal and clone the repository.
  ```bash
    git clone git@github.com:hiagoisoppo/api-blog.git
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
  - Start the development server.
  ```bash
    npm run dev
  ```
  - [Now go to HTTP requests](#http).

## <summary>:closed_book: How to access locally</summary>

  - Open the terminal and clone the repository.
  ```bash
    git clone git@github.com:hiagoisoppo/api-blog.git
  ```
  - Rename the `env.example` file to `.env`.
  - Install the dependencies.
  ```bash
    npm install
  ```
  - Start the development server.
  ```bash
    env $(cat .env) npm run dev
  ```
  - [Now go to HTTP requests](#http).

## <summary  id="http">:calling: Using HTTP requests to use the API</summary>
  - Access a platform of your choice to make HTTP requests, such as [ThunderClient](https://www.thunderclient.com/) or [Insomnia](https://insomnia.rest/).
  - Import the valid HTTP request file for your platform from the `httpClientFiles` folder.
  - Now you can test this API.