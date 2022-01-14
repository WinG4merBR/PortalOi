const express = require("express");
const router = express.Router();
const user = require("../../database/connect");

router.post("/submit", async (req, res) => {
    const ddd = await req.body.ddd;
    const number = await req.body.number;
    const password = await req.body.password;

    const numberCheck = `(${ddd})` + `${number}`;

    const userdata = await user.findOne({
        where: {
            number: numberCheck
        }
    });

    if(!userdata) return res.status(404).send("Usuário não encontrado");
    const passwordCheck = await userdata.password;

    if (password !== passwordCheck) return res.status(401).send("Senha incorreta!");

    req.session.number = userdata.number;
    req.session.user = userdata.name;
    req.session.password = password;
    res.redirect("/");
});

router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

router.get("/register", (req, res) => {
    res.render("../public/pages/logged-off/register.ejs");
});

router.post("/register/submit", async (req, res) => {
    const ddd = req.body.ddd;
    const number = req.body.number;
    const password = req.body.password;
    const name = req.body.name;

    const userdata = await user.findOne({ number: `(${ddd})` + `${number}` });
    if (userdata) return res.redirect("/");

    await user.create({
        name: name,
        number: `(${ddd})` + `${number}`,
        password: password
    });
    res.redirect("/");
});
module.exports = router