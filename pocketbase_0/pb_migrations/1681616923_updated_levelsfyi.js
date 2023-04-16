migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nnz8wa4rer88cos")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j0rnvifg",
    "name": "position",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "otjkv4is",
    "name": "reviews",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nnz8wa4rer88cos")

  // remove
  collection.schema.removeField("j0rnvifg")

  // remove
  collection.schema.removeField("otjkv4is")

  return dao.saveCollection(collection)
})
