# MEMEME

## About

MEMEME is a GIF-based message board that sources from the GIPHY API. This project was built as a learning exercise to explore some of the technologies and concepts that I have been wanting to learn for awhile:

- Typescript
- React Hooks
- GraphQL
- Styled components
- Testing for React
- CSS Grid
- Folder structure and organization

## Screenshots

![Home](/client/public/Screenshots/Home.png)
![Topics](/client/public/Screenshots/Topics.png)
![Topic](/client/public/Screenshots/Topic.png)
![Reply](/client/public/Screenshots/Reply.png)
![NewTopic](/client/public/Screenshots/New Topic.png)

## Tech Stack

### Frontend

- Built off Create React App (Typescript)
- CSS grid, Bulma and Styled components for positioning and styling of components
- Apollo Client - The GraphQL client used for fetching all the GraphQL data from the backend
- Jest for testing

### Backend

- GraphQL-Yoga - Express.js based GraphQL server
- Prisma, Nexus, Prisma-Nexus - GraphQL infrastructure
- JSON Web Token & GraphQL Shield - Authentication
- Docker

### Issues

There are some minor issues with the preset user login and showing authenticated actions such as responding to a topic.

### What's next

- Deployment - set up as a Docker container
- Continuous integration setup
