const express = require("express");
const config = require("../../../config.json");
const router = express.Router();

router.use(require("express-session")(config.session));

router.get("/", (req, res) => {
    if (!req.session.bearer_token) {
        res.status(200).render("../public/pages/logged-off/index.ejs");
    } else {
        res.status(200).render("../public/pages/logged/index.ejs", {
            user: req.session.user_info,
        });
    }
});

module.exports = router;