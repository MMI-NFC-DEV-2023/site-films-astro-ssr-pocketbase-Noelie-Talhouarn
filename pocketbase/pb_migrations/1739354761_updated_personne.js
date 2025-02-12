/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vsy07h3np1ayy4u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5hubqddx",
    "name": "date_deces",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kfsvq60a",
    "name": "nationalite",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "fr",
        "en"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vsy07h3np1ayy4u")

  // remove
  collection.schema.removeField("5hubqddx")

  // remove
  collection.schema.removeField("kfsvq60a")

  return dao.saveCollection(collection)
})
