migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wmo6v0559bq54fv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3xfzvfh3",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "nnz8wa4rer88cos",
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

  // remove
  collection.schema.removeField("3xfzvfh3")

  return dao.saveCollection(collection)
})
