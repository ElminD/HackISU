migrate((db) => {
  const collection = new Collection({
    "id": "nnz8wa4rer88cos",
    "created": "2023-04-16 03:33:58.563Z",
    "updated": "2023-04-16 03:33:58.563Z",
    "name": "levelsfyi",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lhnojmzd",
        "name": "company_name",
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
        "id": "cnka3qh6",
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
        "id": "vibbo1hq",
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
        "id": "m7hh7dbu",
        "name": "salary",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nnz8wa4rer88cos");

  return dao.deleteCollection(collection);
})
