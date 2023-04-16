migrate((db) => {
  const collection = new Collection({
    "id": "wmo6v0559bq54fv",
    "created": "2023-04-16 05:37:08.387Z",
    "updated": "2023-04-16 05:37:08.387Z",
    "name": "levels",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tqhsfd9t",
        "name": "tag",
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
        "id": "qere0png",
        "name": "img",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "b34c94ce",
        "name": "company",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "kdy8lpt9fvs2bhf",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("wmo6v0559bq54fv");

  return dao.deleteCollection(collection);
})
