FROM node:alpine as builder
WORKDIR '/'
COPY package.json .
RUN npm install
COPY . .
RUN npm run start