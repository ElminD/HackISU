migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wmo6v0559bq54fv")

  // update
  collection.schema.addField(new SchemaField({
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
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wmo6v0559bq54fv")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
