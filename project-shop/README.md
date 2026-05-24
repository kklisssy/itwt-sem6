# Project Shop

Vue 3 + Vite storefront with an Express backend, MongoDB and Mongoose.

The frontend renders home, catalog, product, cart, login and registration pages.
Product, catalog, home, cart, user and registration data are served by the
backend API. MongoDB is used for products, users and user carts.

## Local development

```bash
npm install
docker compose up -d mongo
npm run dev:api
npm run dev
```

The frontend runs on `http://localhost:5173` and the backend runs on
`http://localhost:3001`.

## Production build

```bash
npm run build
npm run preview
```

## Environment

Copy `.env.example` values into your local environment if you run the backend
outside Docker:

```env
MONGO_URI=mongodb://localhost:27017/project-shop
JWT_SECRET=project-shop-dev-secret
JWT_EXPIRES_IN=7d
PORT=3001
```

## Docker

```bash
docker compose up --build
```

Open `http://localhost:8080`.

Compose starts three services:

- `frontend` on port `8080`
- `backend` on port `3001` inside the Docker network
- `mongo` on port `27017`

## API

- `GET /api/home`
- `GET /api/catalog`
- `GET /api/product?id=10`
- `GET /api/registration`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/user`
- `GET /api/cart`
