const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares");
const { follow } = require("../controllers/user");

/**
 * POST /user/:id/follow
 * follow the user
 */
router.post("/:id/follow", isLoggedIn, follow);

/**
 * POST /user/:id/unfollow
 * unfollow the user
 */
router.post("/:id/unfollow", (req, res) => {});

module.exports = router;
