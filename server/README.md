# Backend Setup

## Environment variables

```
Set the environment variable PRISMA_MANAGEMENT_API_SECRET in bash or server environment
```

## Prisma Docker setup

```
docker-compose up -d
```

## Prisma Intialization

```
prisma init --endpoint http://localhost:4466
```

## Prisma Schema & Data seeding

Install Prisma CLI first

Reset Prisma Data

```
prisma reset
```

Deploy Prisma Schema

```
prisma deploy
```

Seed Data

```
npm run seed
```
