migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("entd5rusm790lqx");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "entd5rusm790lqx",
    "created": "2023-04-16 05:41:43.133Z",
    "updated": "2023-04-16 05:41:43.133Z",
    "name": "workiva",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fgdpx018",
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
        "id": "btaynxqv",
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
        "id": "i7lcd4mh",
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
        "id": "ohlywzl3",
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
        "id": "qlxrxpcy",
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
