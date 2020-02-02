FROM node:alpine AS build

# RUN apk add --no-cache --virtual builds-deps build-base python \

WORKDIR /app
COPY package*.json ./
RUN apk add --no-cache make gcc g++ python && \
  npm install && \
  npm rebuild brcrypt --build-from-source && \
  apk del make gcc g++ python
# RUN npm install node-pre-gyp
# RUN apk --no-cache add --virtual builds-deps build-base python \
#   && npm install \
#   && npm rebuild bcrypt --build-from-source \
#   && apk del .gyp
# RUN npm install
# RUN npm ci --only=production

COPY . ./

# FROM node:alpine

# COPY --from=build /app /app

EXPOSE 4000
CMD ["npm", "run", "start"]