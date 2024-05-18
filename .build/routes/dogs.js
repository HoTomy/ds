"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var dogs_exports = {};
__export(dogs_exports, {
  router: () => router
});
module.exports = __toCommonJS(dogs_exports);
var import_koa_router = __toESM(require("koa-router"));
var import_koa_bodyparser = __toESM(require("koa-bodyparser"));
var model = __toESM(require("../models/dogs"));
var import_auth = require("../controllers/auth");
const router = new import_koa_router.default({ prefix: "/api/v1/dogs" });
const getAll = async (ctx, next) => {
  let dogs = await model.getAll();
  if (dogs.length) {
    ctx.body = dogs;
  } else {
    ctx.body = {};
  }
  await next();
};
const getById = async (ctx, next) => {
  let id = ctx.params.id;
  let dog = await model.getById(id);
  if (dog.length) {
    ctx.body = dog[0];
  } else {
    ctx.status = 404;
  }
  await next();
};
const createDogs = async (ctx, next) => {
  const body = ctx.request.body;
  let result = await model.add(body);
  if (result.status == 201) {
    ctx.status = 201;
    ctx.body = body;
  } else {
    ctx.status = 500;
    ctx.body = { err: "insert data failed" };
  }
  await next();
};
const updateDogs = async (ctx, next) => {
  let id = ctx.params.id;
  let context = ctx.request.body;
  let update_dogs = await model.updateById(context, id);
  let dog = await model.getById(id);
  ctx.body = dog;
  ctx.status = 200;
  if (dog.length) {
    ctx.body = dog;
  } else {
    ctx.body = {};
  }
  await next();
};
const deleteDogs = async (ctx, next) => {
  let id = ctx.params.id;
  await model.deleteById(id);
  let dog = await model.getById(id);
  ctx.body = dog;
  ctx.status = 200;
  if (dog.length) {
  } else {
    ctx.body = `id:${id} deleted success`;
  }
  await next();
};
router.get("/", getAll);
router.get("/:id([0-9]{1,})", getById);
router.post("/", import_auth.basicAuth, (0, import_koa_bodyparser.default)(), createDogs);
router.put("/:id([0-9]{1,})", import_auth.basicAuth, (0, import_koa_bodyparser.default)(), updateDogs);
router.del("/:id([0-9]{1,})", import_auth.basicAuth, deleteDogs);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  router
});
//# sourceMappingURL=dogs.js.map
