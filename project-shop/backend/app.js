import cors from "cors";
import express from "express";

import cartRoutes from "./routes/cart.route.js";
import catalogRoutes from "./routes/catalog.route.js";
import productRoutes from "./routes/product.route.js";
import userRoutes from "./routes/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/cart", cartRoutes);
app.use("/api/catalog", catalogRoutes);
app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);

export default app;
