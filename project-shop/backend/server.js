import app from "./app.js";
import { connectDatabase } from "./config/db.js";

const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/project-shop";

const startServer = async () => {
  await connectDatabase(MONGO_URI);

  app.listen(PORT, () => {
    console.log(`Backend is running on http://localhost:${PORT}`);
  });
};

startServer();
