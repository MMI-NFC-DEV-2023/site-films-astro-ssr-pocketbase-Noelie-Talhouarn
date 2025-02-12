/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vsy07h3np1ayy4u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ssq38nbc",
    "name": "lieu_naissance",
    "type": "text",
    "required": false,
    "presentable": false,
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
  const collection = dao.findCollectionByNameOrId("vsy07h3np1ayy4u")

  // remove
  collection.schema.removeField("ssq38nbc")

  return dao.saveCollection(collection)
})
