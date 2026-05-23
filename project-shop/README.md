# Project Shop Frontend

Vue 3 + Vite storefront frontend. The app includes home, catalog, product,
cart, and registration pages with local JSON data from `public/api`.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Docker

```bash
docker build -t project-shop-frontend .
docker run --rm -p 8080:80 project-shop-frontend
```

Open `http://localhost:8080`.

Or with Compose:

```bash
docker compose up --build
```
