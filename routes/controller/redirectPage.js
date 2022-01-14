const express = require("express");

const router = express.Router();

router.get("/main", (req, res) => {
    res.redirect("https://oi.com.br");
});

router.get("/tutorial", (req, res) => {
    res.status(200).render("../public/pages/examples/velox.ejs");
});

router.get("/prepago", (req, res) => {
    res.status(200).render("../public/pages/examples/oipre.ejs");
});

router.get("/oipontos", (req, res) => {
    res.status(200).render("../public/pages/examples/oipontos.ejs");
});

module.exports = router;
