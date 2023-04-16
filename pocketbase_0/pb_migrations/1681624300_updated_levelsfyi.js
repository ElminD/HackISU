migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nnz8wa4rer88cos")

  collection.name = "records"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nnz8wa4rer88cos")

  collection.name = "levelsfyi"

  return dao.saveCollection(collection)
})
