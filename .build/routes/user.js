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
var user_exports = {};
__export(user_exports, {
  router: () => router
});
module.exports = __toCommonJS(user_exports);
var import_koa_router = __toESM(require("koa-router"));
var import_koa_bodyparser = __toESM(require("koa-bodyparser"));
var model = __toESM(require("../models/user"));
const router = new import_koa_router.default({ prefix: "/api/v1/user" });
const getAlluser = async (ctx, next) => {
  let user = await model.getAlluser();
  if (user.length) {
    ctx.body = user;
  } else {
    ctx.body = {};
  }
  await next();
};
const getByUserId = async (ctx, next) => {
  let id = ctx.params.id;
  let user = await model.getByUserId(id);
  if (user.length) {
    ctx.body = user[0];
  } else {
    ctx.status = 404;
  }
  await next();
};
const register = async (ctx, next) => {
  const body = ctx.request.body;
  let result = await model.register(body);
  if (result.status == 201) {
    ctx.status = 201;
    ctx.body = body;
  } else {
    ctx.status = 500;
    ctx.body = { err: "insert data failed" };
  }
  await next();
};
const updateUser = async (ctx, next) => {
  let id = ctx.params.id;
  let context = ctx.request.body;
  let update_user = await model.updateByUserId(context, id);
  let user = await model.getByUserId(id);
  ctx.body = user;
  ctx.status = 200;
  if (user.length) {
    ctx.body = user;
  } else {
    ctx.body = {};
  }
  await next();
};
const deleteUser = async (ctx, next) => {
  let id = ctx.params.id;
  await model.deleteByUserId(id);
  let user = await model.getByUserId(id);
  ctx.body = user;
  ctx.status = 200;
  if (user.length) {
  } else {
    ctx.body = `id:${id} deleted success`;
  }
  await next();
};
router.get("/", getAlluser);
router.get("/:id([0-9]{1,})", getByUserId);
router.post("/", (0, import_koa_bodyparser.default)(), register);
router.put("/:id([0-9]{1,})", (0, import_koa_bodyparser.default)(), updateUser);
router.del("/:id([0-9]{1,})", deleteUser);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  router
});
//# sourceMappingURL=user.js.map
