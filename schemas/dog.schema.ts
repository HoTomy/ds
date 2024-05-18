export const dog = {
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
    },
  },"required": ["name", "breeds", "gender","birth", "centre","status"]
}

