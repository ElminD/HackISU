migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nnz8wa4rer88cos")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l1nmhjfh",
    "name": "logo",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nnz8wa4rer88cos")

  // remove
  collection.schema.removeField("l1nmhjfh")

  return dao.saveCollection(collection)
})
