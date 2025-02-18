/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("vsy07h3np1ayy4u")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "updateRule": null
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("vsy07h3np1ayy4u")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id !=\"\"",
    "deleteRule": "",
    "updateRule": ""
  }, collection)

  return app.save(collection)
})
