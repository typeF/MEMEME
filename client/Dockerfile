# Stage 1 - Build
FROM node:12.14.1-alpine AS build-deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - Production
FROM nginx:1.17.8-alpine
COPY --from=build-deps /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
