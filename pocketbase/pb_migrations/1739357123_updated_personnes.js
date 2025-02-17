/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("vsy07h3np1ayy4u")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select3130199401",
    "maxSelect": 1,
    "name": "profession",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "realisateur",
      "acteur",
      "scenariste"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("vsy07h3np1ayy4u")

  // remove field
  collection.fields.removeById("select3130199401")

  return app.save(collection)
})
