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
var dog_schema_exports = {};
__export(dog_schema_exports, {
  dog: () => dog
});
module.exports = __toCommonJS(dog_schema_exports);
const dog = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "/dog",
  "title": "Dog",
  "description": "A dog in the blog",
  "type": "object",
  "properties": {
    "name": {
      "description": "Name of the dog",
      "type": "string"
    },
    "breeds": {
      "description": "Breeds of the dog",
      "type": "string"
    },
    "gender": {
      "description": "Sex of the dog",
      "type": "string"
    },
    "birth": {
      "description": "Birth of the dog",
      "type": "string"
    },
    "centre": {
      "description": "Centre of the dog",
      "type": "string"
    },
    "imageurl": {
      "description": "URL for main image to show in dog",
      "type": "string"
    },
    "remark": {
      "description": "Remark of the dog",
      "type": "string"
    },
    "status": {
      "description": "Status of the dog",
      "type": "string"
    }
  },
  "required": ["name", "breeds", "gender", "birth", "centre", "status"]
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  dog
});
//# sourceMappingURL=dog.schema.js.map
