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
var login_exports = {};
__export(login_exports, {
  login: () => login
});
module.exports = __toCommonJS(login_exports);
var db = __toESM(require("../helpers/database"));
const login = async (cat) => {
  let keys = Object.keys(cat);
  let values = Object.values(cat);
  let param = "";
  for (let i = 0; i < values.length; i++) {
    param += `${keys[i]} = '${values[i]}' AND `;
  }
  param = param.slice(0, -4);
  let query = `SELECT * FROM public.user WHERE ${param} `;
  let data = await db.run_query(query, values);
  return data;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  login
});
//# sourceMappingURL=login.js.map
