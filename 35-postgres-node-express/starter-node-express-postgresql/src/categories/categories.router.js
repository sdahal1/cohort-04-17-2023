const router = require("express").Router({ mergeParams: true });
const controller = require("./categories.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);
router.route("/:categoryId").all(methodNotAllowed);

module.exports = router;
