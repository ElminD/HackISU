migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nnz8wa4rer88cos")

  // remove
  collection.schema.removeField("lhnojmzd")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nnz8wa4rer88cos")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
