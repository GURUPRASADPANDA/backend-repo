import express from "express";

const app = express();

// Middleware and routes here
app.use(express.json());

export { app };
