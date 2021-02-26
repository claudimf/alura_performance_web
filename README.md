# Projeto do [Curso de Otimização de Performance Web do Alura](https://cursos.alura.com.br/course/otimizacao-performance-web)

## Sobre o projeto:

Clone o [projeto](https://github.com/alura-cursos/performance-web) para depois configurarmos o docker.

### Configurar a aplicação no Docker:

1. Cria o arquivo [server.js](https://github.com/claudimf/alura_performance_web/blob/main/docker-compose.yml) para subir o servidor:
    ```sh
    var express = require("express");
    var app = express();
    var router = express.Router();

    var path = __dirname + '/site/';
    const PORT = 8080;
    const HOST = '0.0.0.0';

    router.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
    });

    router.get("/",function(req,res){
    res.sendFile(path + "index.html");
    });

    app.use(express.static(path));
    app.use("/", router);

    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
    ```

2. Cria o arquivo [Dockerfile](https://github.com/claudimf/alura_performance_web/blob/main/Dockerfile)

3. Cria o arquivo [docker-compose.yml](https://github.com/claudimf/alura_performance_web/blob/main/docker-compose.yml)

4. Adaptar o arquivo [package.json](https://github.com/claudimf/alura_performance_web/blob/main/package.json) adicionando as dependências:
    ```sh
    {
        "devDependencies": {
            "nodemon": "^1.18.10"
        },
        "dependencies": {
            "ejs": "^2.6.1",
            "express": "^4.16.4",
            "mongoose": "^5.4.10"
        }
    }
    ```

5. Adaptar o arquivo [.dockerignore](https://github.com/claudimf/alura_performance_web/blob/main/.dockerignore) para ignorar os arquivos abaixo:
    ```sh
    node_modules
    npm-debug.log
    ```

### Permissões de arquivos:

Ao se adicionar libs ou qualquer outro comando que crie arquivos dentro do contâiner Docker o proprietário para edição se torna o contâiner, sendo assim você precisará rodar o comando abaixo para alterar essas permissões e você poder editar:

```sh
sudo chown -R $USER:$USER .
```

# Exigências

**:warning: Atenção:** É necessário que os desenvolvedores usem o Docker no seu ambiente de desenvolvimento.

- **🛠 Modo Desenvolvimento Docker**
    - :computer: [Linux Ubuntu LTS](https://ubuntu.com/download/desktop)
    - 🐳 [Docker](https://docs.docker.com/engine/installation/) Deve estar instalado.
    - 🐳 [Docker Compose](https://docs.docker.com/compose/) Deve estar instalado.
    - **💡 Dica:** [Documentação do Docker](https://docs.docker.com/)

# Instalando

## 🐳 Modo Desenvolvimento com Docker

Após instalar o docker e docker-compose, estando na pasta raiz do projeto, execute:

```sh
docker-compose up
```

Para se certificar que os seus containers subiram corretamente, todos os containers deve estar com o status `UP`, execute:

```sh
docker-compose ps -a
```

Para acessar o container da aplicação, execute:

```sh
docker-compose run --rm web bash
```

Para derrubar e subir a instância do docker novamente, execute:

```sh
docker-compose down && docker-compose up
```

Para visualizar o sistema basta acessar no navegador no endereço: [localhost:3000](http://localhost:3000/)

# Referências utilizadas

[1° Repositório para clonar o projeto inicial](https://github.com/alura-cursos/performance-web)

[2° Performance Web I: otimizando o front-end](https://cursos.alura.com.br/course/otimizacao-performance-web)

[3° Criar um projeto com Node + Docker](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

[4° Como Construir uma Aplicação Node.js com o Docker](https://www.digitalocean.com/community/tutorials/como-construir-uma-aplicacao-node-js-com-o-docker-pt)

[5° Conteinerizando um aplicativo Node.js para desenvolvimento com o Docker Compose](https://www.digitalocean.com/community/tutorials/containerizing-a-node-js-application-for-development-with-docker-compose-pt)