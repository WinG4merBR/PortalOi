const express = require("express");
const router = express.Router();

router.use(require("express-session")({
    secret: "celoiqua",
    resave: false,
    saveUninitialized: false
}))
router.get("/", (req, res) => {
     if (!req.session.user) {
        res.status(200).render("../public/pages/logged-off/index.ejs");
    } else {
        res.status(200).render("../public/pages/logged/index.ejs", {
            user: req.session.user,
            number: req.session.number
        });
    }
});

router.get("/modem", (req, res) => {
    if(!req.session.user) {
        res.status(401).redirect("/");
    } else {
        res.status(200).render("../public/pages/modem/modem.ejs", {
            user: req.session.user,
        });
    }
});

module.exports = router;