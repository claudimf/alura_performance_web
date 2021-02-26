FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

COPY npm-shrinkwrap.json ./

RUN npm install -g gulp-cli

RUN npm install 

COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]