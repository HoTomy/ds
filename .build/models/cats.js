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
var cats_exports = {};
__export(cats_exports, {
  add: () => add,
  deleteById: () => deleteById,
  getAll: () => getAll,
  getById: () => getById,
  updateById: () => updateById
});
module.exports = __toCommonJS(cats_exports);
var db = __toESM(require("../helpers/database"));
const getById = async (id) => {
  let query = "SELECT * FROM cats WHERE ID = ?";
  let values = [id];
  let data = await db.run_query(query, values);
  return data;
};
const getAll = async () => {
  let query = "SELECT * FROM cats order by id";
  let data = await db.run_query(query, null);
  return data;
};
const add = async (cat) => {
  let keys = Object.keys(cat);
  let values = Object.values(cat);
  let key = keys.join(",");
  let param = "";
  for (let i = 0; i < values.length; i++) {
    param += "?,";
  }
  param = param.slice(0, -1);
  let query = `INSERT INTO cats (${key}) VALUES (${param})`;
  try {
    await db.run_insert(query, values);
    return { status: 201 };
  } catch (err) {
    return err;
  }
};
const updateById = async (cat, id) => {
  let aid = [id];
  let keys = Object.keys(cat);
  let values = Object.values(cat);
  let param = "";
  for (let i = 0; i < values.length; i++) {
    param += `${keys[i]}= '${values[i]}',`;
  }
  param = param.slice(0, -1);
  let query = `UPDATE cats SET ${param} WHERE id = ?`;
  try {
    await db.run_update(query, aid);
    return { status: 201 };
  } catch (err) {
    return err;
  }
};
const deleteById = async (id) => {
  let values = [id];
  let query = `DELETE FROM cats WHERE id='${values}';`;
  try {
    await db.run_delete(query, values);
    return { status: 201 };
  } catch (err) {
    return err;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  add,
  deleteById,
  getAll,
  getById,
  updateById
});
//# sourceMappingURL=cats.js.map
