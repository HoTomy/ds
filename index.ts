import Koa from "koa";
import Router, {RouterContext} from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
import {router as cats} from "./routes/cats";
import {router as filter} from "./routes/filter";
import {router as user} from "./routes/user";
import {router as login} from "./routes/login";
import cors from "@koa/cors";

const app: Koa = new Koa();
const router: Router = new Router();
const welcomeAPI = async (ctx: RouterContext, next: any) => {
 ctx.body = {
 message: "Welcome to the Cat Shelter !"
 };
 await next();
}

const corsOptions = {
  origin: [
    "*",
  ],
};

router.get('/api/v1', welcomeAPI);
app.use(logger());
app.use(json());
app.use(router.routes());
app.listen(10888);

app.use(cats.routes());
app.use(filter.routes());
app.use(user.routes());
app.use(login.routes());
app.use(cors(corsOptions));