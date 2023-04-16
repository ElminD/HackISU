migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kdy8lpt9fvs2bhf");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "kdy8lpt9fvs2bhf",
    "created": "2023-04-16 05:36:25.299Z",
    "updated": "2023-04-16 05:36:40.567Z",
    "name": "john_deere",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5p4iwhmu",
        "name": "user",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fxmvyvrs",
        "name": "salary",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "x8vuabxj",
        "name": "rating",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "ftknhzfj",
        "name": "review",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lttmcgln",
        "name": "position",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
