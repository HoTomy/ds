export const cat = {
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
    },
  },"required": ["name", "breeds", "gender","birth", "centre","status"]
}

