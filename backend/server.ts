import express from "express";
import { join } from "node:path";

const app = express();

app.use(express.static(join(__dirname, "..", "frontend", "dist", "spa")));

const server = app.listen(8000, () => {
  console.info("Server listening on", server.address());
});
