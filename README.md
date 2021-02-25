# Projeto do [Curso de Otimização de Performance Web do Alura](https://cursos.alura.com.br/course/otimizacao-performance-web)

## Sobre o projeto:

Clone o [projeto](https://github.com/alura-cursos/performance-web) e faça `npm install` para instalar as dependências.

### Permissões de arquivos:

Ao se criar migrações, adicionar libs ou qualquer outro comando que crie arquivos dentro do contâiner Docker o proprietário para edição se torna o contâiner, sendo assim você precisará rodar o comando abaixo para alterar essas permissões e você poder editar:

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

Para acessar a instância do banco de dados, execute:

```sh
docker exec-it [nome do db] bash
```

Para derrubar e subir a instância do docker novamente, execute:

```sh
docker-compose down && docker-compose up
```

🚀 :clap: Para visualizar o sistema basta acessar no navegador no endereço: [localhost:8000](localhost:8000)

# Referências utilizadas

[1° Repositório para clonar o projeto inicial](https://github.com/alura-cursos/performance-web)

[2° Performance Web I: otimizando o front-end](https://cursos.alura.com.br/course/otimizacao-performance-web)

[3° Criar um projeto com Node + Docker](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)