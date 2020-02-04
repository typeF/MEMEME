FROM node:alpine AS build

WORKDIR /app

COPY package*.json ./

RUN apk add --no-cache make gcc g++ python && \
  npm install && \
  npm rebuild brcrypt --build-from-source && \
  apk del make gcc g++ python

COPY . ./

EXPOSE 4000
CMD ["npm", "run", "start"]