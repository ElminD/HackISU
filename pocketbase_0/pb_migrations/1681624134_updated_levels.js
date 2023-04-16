migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wmo6v0559bq54fv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yrjjeiqx",
    "name": "tag",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tqhsfd9t",
    "name": "company",
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
  const collection = dao.findCollectionByNameOrId("wmo6v0559bq54fv")

  // remove
  collection.schema.removeField("yrjjeiqx")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
