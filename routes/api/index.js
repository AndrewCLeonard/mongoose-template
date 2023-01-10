const router = require("express").Router();
const commentRoutes = require("./comment-routes");

// add prefix of '/comments' to routes created in `comments-routes.js`
router.use("/comments", commentRoutes);

module.exports = router;
