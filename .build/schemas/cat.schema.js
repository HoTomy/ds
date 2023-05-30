"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var cat_schema_exports = {};
__export(cat_schema_exports, {
  cat: () => cat
});
module.exports = __toCommonJS(cat_schema_exports);
const cat = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "/cat",
  "title": "Cat",
  "description": "A cat in the blog",
  "type": "object",
  "properties": {
    "name": {
      "description": "Name of the cat",
      "type": "string"
    },
    "breeds": {
      "description": "Breeds of the cat",
      "type": "string"
    },
    "gender": {
      "description": "Sex of the cat",
      "type": "string"
    },
    "birth": {
      "description": "Birth of the cat",
      "type": "string"
    },
    "centre": {
      "description": "Centre of the cat",
      "type": "string"
    },
    "imageurl": {
      "description": "URL for main image to show in cat",
      "type": "string"
    },
    "remark": {
      "description": "Remark of the cat",
      "type": "string"
    },
    "status": {
      "description": "Status of the cat",
      "type": "string"
    }
  },
  "required": ["name", "breeds", "gender", "birth", "centre", "status"]
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cat
});
//# sourceMappingURL=cat.schema.js.map
