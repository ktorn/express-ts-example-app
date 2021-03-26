# Express + PostgreSQL + TypeScript example integration

1. Install dependencies via `yarn` or `npm install`
2. Run `docker-compose up -d` to start PostgreSQL and Adminer web GUI
3. Access Adminer on `http://localhost:8032`, login to postgres db with username and password `postgres`
4. Create database `mikro-orm-express-ts`
5. Create initial schema with `npx mikro-orm migration:create --initial`
6. Apply initial schema to database with `npx mikro-orm migration:up`
7. Run via `yarn start` or `yarn start:dev` (watch mode)
8. Example API is running on localhost:3000

Available routes:

```
GET     /author        finds all authors
GET     /author/:id    finds author by id
POST    /author        creates new author
PUT     /author/:id    updates author by id
```

```
GET     /book          finds all books
GET     /book/:id      finds book by id
POST    /book          creates new book
PUT     /book/:id      updates book by id
```
