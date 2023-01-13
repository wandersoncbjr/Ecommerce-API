import Express from "express";

import cors from "cors";

const app = Express();

import middlewaresPadrao from "./middlewares/ConfigMiddlewares.js";
middlewaresPadrao(app, Express, cors)

import bd from "./database/sqlite.js";

import indexController from "./controllers/indexControllers.js";

indexController(app, bd)

export default app;

