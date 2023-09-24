import express from "express";
import morgan from "morgan";
import  listEndpoints  from 'express-list-endpoints'

const app = express();

// Import routes
import projectRoutes from "./routes/survey.routes.js";


// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/post", projectRoutes);
console.log(listEndpoints(app));



export default app;
