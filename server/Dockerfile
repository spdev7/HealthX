# Use an offical node.js runtime as a parent image
FROM node:22-alpine

WORKDIR /app 

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5003

CMD ['node', './server.js']