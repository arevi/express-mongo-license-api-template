import express from "express";
import helmet from "helmet";
import { handlers } from "./routes/index";
import { connectDatabase } from "./service/database";

// Express intiialization
const app = express();

// Defining listening port for Express
const port: number = Number(process.env.PORT) || 8080;

// Express Configuration
app.use(helmet());
app.use(express.json());

// Route handlers
app.use("/auth", handlers.AuthRouter);

/**
 * Start listening on specified port
 */
const startServer = async () => {
  try {
    app.listen(port);
    console.log(`[✅] Express listening on ${port}`);
  } catch (err) {
    console.error(`[❌] Express error: ${err}`);
  }
};

(async () => {
  startServer();
  connectDatabase();
})();
