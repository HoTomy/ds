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
var import_globals = require("@jest/globals");
var import_koa = __toESM(require("koa"));
var import_koa_json = __toESM(require("koa-json"));
var import_koa_passport = __toESM(require("koa-passport"));
var import_cats = require("../routes/cats");
var import_supertest = __toESM(require("supertest"));
const app = new import_koa.default();
app.use((0, import_koa_json.default)());
app.use(import_koa_passport.default.initialize());
app.use(import_cats.router.middleware());
(0, import_globals.describe)("Get / - a simple api endpoint", () => {
  (0, import_globals.test)("Get all cat", async () => {
    const result = await (0, import_supertest.default)(app.callback()).get("/api/v1/cats");
    (0, import_globals.expect)(result.statusCode).toEqual(200);
  });
});
//# sourceMappingURL=dogs.test.js.map
