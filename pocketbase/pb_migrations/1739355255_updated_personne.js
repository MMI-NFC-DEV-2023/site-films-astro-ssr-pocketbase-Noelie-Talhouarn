/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vsy07h3np1ayy4u")

  collection.name = "personnes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vsy07h3np1ayy4u")

  collection.name = "personne"

  return dao.saveCollection(collection)
})
