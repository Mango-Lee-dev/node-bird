const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares");
const { follow, unfollow } = require("../controllers/user");

/**
 * POST /user/:id/follow
 * follow the user
 */
router.post("/:id/follow", isLoggedIn, follow);

/**
 * POST /user/:id/unfollow
 * unfollow the user
 */
router.post("/:id/unfollow", isLoggedIn, unfollow);

module.exports = router;
