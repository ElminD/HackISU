migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kdy8lpt9fvs2bhf")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kdy8lpt9fvs2bhf")

  // remove
  collection.schema.removeField("lttmcgln")

  return dao.saveCollection(collection)
})
