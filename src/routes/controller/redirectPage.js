const express = require("express");

const router = express.Router();

router.get("/main", (req, res) => {
    res.redirect("https://oi.com.br");
});

module.exports = router;
