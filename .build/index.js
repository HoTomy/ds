"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_koa = __toESM(require("koa"));
var import_koa_router = __toESM(require("koa-router"));
var import_koa_logger = __toESM(require("koa-logger"));
var import_koa_json = __toESM(require("koa-json"));
var import_dogs = require("./routes/dogs");
var import_filter = require("./routes/filter");
var import_user = require("./routes/user");
var import_login = require("./routes/login");
var import_cors = __toESM(require("@koa/cors"));
var import_koa_static_folder = __toESM(require("koa-static-folder"));
const app = new import_koa.default();
const router = new import_koa_router.default();
const welcomeAPI = async (ctx, next) => {
  ctx.body = {
    message: "Welcome to the Dog Shelter !"
  };
  await next();
};
router.get("/api/v1", welcomeAPI);
app.use((0, import_koa_logger.default)());
app.use((0, import_koa_json.default)());
app.use(router.routes());
app.listen(10888);
app.use(import_dogs.router.routes());
app.use(import_filter.router.routes());
app.use(import_user.router.routes());
app.use(import_login.router.routes());
app.use((0, import_cors.default)());
app.use((0, import_koa_static_folder.default)("./docs"));
//# sourceMappingURL=index.js.map
