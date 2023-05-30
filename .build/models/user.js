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
  deleteByUserId: () => deleteByUserId,
  findByUsername: () => findByUsername,
  getAlluser: () => getAlluser,
  getByUserId: () => getByUserId,
  register: () => register,
  updateByUserId: () => updateByUserId
});
module.exports = __toCommonJS(user_exports);
var db = __toESM(require("../helpers/database"));
const findByUsername = async (username) => {
  const query = `SELECT * FROM public.user WHERE USERNAME = ?`;
  const user = await db.run_query(query, [username]);
  return user;
};
const getAlluser = async () => {
  let query = "SELECT * FROM public.user order by id";
  let data = await db.run_query(query, null);
  return data;
};
const getByUserId = async (id) => {
  let query = "SELECT * FROM public.user WHERE ID = ?";
  let values = [id];
  let data = await db.run_query(query, values);
  return data;
};
const register = async (user) => {
  let keys = Object.keys(user);
  let values = Object.values(user);
  let key = keys.join(",");
  let param = "";
  for (let i = 0; i < values.length; i++) {
    param += "?,";
  }
  param = param.slice(0, -1);
  let query = `INSERT INTO public.user (${key}) VALUES (${param})`;
  try {
    await db.run_insert(query, values);
    return { status: 201 };
  } catch (err) {
    return err;
  }
};
const updateByUserId = async (user, id) => {
  let aid = [id];
  let keys = Object.keys(user);
  let values = Object.values(user);
  let param = "";
  for (let i = 0; i < values.length; i++) {
    param += `${keys[i]}= '${values[i]}',`;
  }
  param = param.slice(0, -1);
  let query = `UPDATE public.user SET ${param} WHERE id = ?`;
  try {
    await db.run_update(query, aid);
    return { status: 201 };
  } catch (err) {
    return err;
  }
};
const deleteByUserId = async (id) => {
  let values = [id];
  let query = `DELETE FROM public.user WHERE id='${values}';`;
  try {
    await db.run_delete(query, values);
    return { status: 201 };
  } catch (err) {
    return err;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  deleteByUserId,
  findByUsername,
  getAlluser,
  getByUserId,
  register,
  updateByUserId
});
//# sourceMappingURL=user.js.map
