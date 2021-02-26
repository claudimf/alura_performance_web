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

6. Criar o arquivo [npm-shrinkwrap.json](https://github.com/claudimf/alura_performance_web/blob/main/npm-shrinkwrap.json) com o seguinte conteúdo:
    ```sh
    {
        "dependencies": {
            "graceful-fs": {
                "version": "4.2.4"
            }
        }
    }
    ```
7. Faça o build da sua aplicação para poder seguir com as aulas:
    ```sh
    docker-compose build
    ```

# Aulas

<details>
    <summary>Economizando bytes</summary>
    <ul>
        <li>Porque otimizar o front-end?</li>
        <li>Motivos pra otimização</li>
        <li>Minificação</li>
        <li>Automação com Gulp</li>
        <li>Projeto & Ambiente</li>
        <li>Projeto: Minificação</li>
        <li>Projeto: gulp copy</li>
        <li>Servidor & GZIP</li>
        <li>Tamanho do download</li>
        <li>Servidor HTTP local</li>
        <li>Análise com DevTools</li>
        <li>Projeto: habilitar GZIP</li>
        <li>Revisão do conteúdo</li>
        <li>Para saber mais: Brotli</li>
        <li>Transcrição das aulas</li>
    <ul>
</details>

<details>
    <summary>Otimizações de Imagens</summary>
    <ul>
        <li>O peso das imagens</li>
        <li>Otimizações lossless</li>
        <li>Imagens grandes</li>
        <li>O melhor formato</li>
        <li>O melhor formato 2</li>
        <li>Otimizações lossy</li>
        <li>SVGs otimizados</li>
        <li>Otimização lossless</li>
        <li>Otimização lossy</li>
        <li>Automação das otimizações</li>
        <li>Projeto: redimensionar imagens</li>
        <li>Projeto: otimizar imagens</li>
        <li>Harmonia na equipe</li>
        <li>Para saber mais: ferramentas de otimização de imagens</li>
        <li>Para saber mais: por trás dos formatos de imagens</li>
        <li>Transcrição das aulas</li>
    <ul>
</details>

<details>
    <summary>O custo dos requests</summary>
    <ul>
        <li>Custo dos requests</li>
        <li>Conexões simultâneas</li>
        <li>Análise dos requests no DevTools</li>
        <li>Projeto: diminuindo dependências</li>
        <li>Deploy no Google App Engine</li>
        <li>Mão na massa: deploy no App Engine</li>
        <li>Análise de performance</li>
        <li>WebPageTest</li>
        <li>PageSpeed Insights</li>
        <li>(opcional) Analise outro site</li>
        <li>Transcrição das aulas</li>
    <ul>
</details>

<details>
    <summary>Concatenações & Trade-offs</summary>
    <ul>
        <li>Concatenação do CSS</li>
        <li>Mais concatenação e trade-offs</li>
        <li>Por que?</li>
        <li>Concatenação de CSS</li>
        <li>Concatenação de JS</li>
        <li>Transcrição das aulas</li>
    <ul>
</details>

<details>
    <summary>Sprites</summary>
    <ul>
        <li>Porque Sprites</li>
        <li>Sprites PNG</li>
        <li>Automação de Sprites</li>
        <li>Projeto: sprites CSS</li>
        <li>Sprites em SVG</li>
        <li>Automação de Sprites SVG</li>
        <li>Projeto: sprite SVG</li>
        <li>(opcional) Polyfill para símbolos SVG</li>
        <li>(opcional) Outras sprites SVG</li>
        <li>Transcrição das aulas</li>
    <ul>
</details>

<details>
    <summary>Inline de recursos</summary>
    <ul>
        <li>Inline de recursos</li>
        <li>O tamanho real do HTML</li>
        <li>Tamanho do HTML</li>
        <li>Projeto: inline de JS</li>
        <li>Projeto: inline de SVG</li>
        <li>Transcrição das aulas</li>
    <ul>
</details>

<details>
    <summary>Paralelizando requests</summary>
    <ul>
        <li>Requests paralelos</li>
        <li>Impactos da paralelização</li>
        <li>Porque paralelizar?</li>
        <li>Hostname paralelo</li>
        <li>Análise do impacto</li>
        <li>Transcrição das aulas</li>
    <ul>
</details>

<details>
    <summary>Cache HTTP</summary>
    <ul>
        <li>Cache com Expires</li>
        <li>Prática do cache</li>
        <li>Fingerprint dos assets</li>
        <li>Cache alto nos servidores</li>
        <li>Projeto: revisões com gulp</li>
        <li>Cache no GAE</li>
        <li>Cache no nginx</li>
        <li>Transcrição das aulas</li>
    <ul>
</details>

<details>
    <summary>Conclusão</summary>
    <ul>
        <li>Análise final</li>
        <li>Atalho no gulp</li>
        <li>Sua análise final</li>
        <li>Transcrição das aulas</li>
        <li>Performance é UX</li>
    <ul>
</details>

# Notas das aulas:

* Projeto: Minificação  
    No arquivo [Dockerfile](https://github.com/claudimf/alura_performance_web/blob/main/Dockerfile) adicione o comando de instalação do [gulp-cli](https://www.npmjs.com/package/gulp-cli):
    ```sh
    RUN npm install -g gulp-cli
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

[6° ERRO: primordials is not defined](https://cursos.alura.com.br/forum/topico-erro-primordials-is-not-defined-106764)