## Backend Setup

# Prisma Docker setup

```
docker compose up -d
```

# Prisma Intialization

```
prisma init --endpoint http://localhost:4466
```

# Reset all DB Data

Need to install Prisma CLI first

```
prisma reset
```

# Deploy Prisma Schema

```
prisma deploy
```

# Seed data

```
npm run seed
```
