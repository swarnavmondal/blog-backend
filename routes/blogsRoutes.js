const express = require("express");
var router = express();
const create = require("../controllers/blogControllers.js");
const view = require("../controllers/blogControllers.js");
const singleview = require("../controllers/blogControllers.js");
const update = require("../controllers/blogControllers.js");
const distroy = require("../controllers/blogControllers.js");

const bodyparser = require("body-parser");

router.use(bodyparser.json());
router.post("/", create.create);
router.get("/", view.view);
router.get("/:id",singleview.singleview);
router.patch("/:id", update.update);
router.delete("/:id", distroy.distroy);


module.exports = router;
