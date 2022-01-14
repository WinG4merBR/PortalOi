const express = require("express");
const router = express.Router();
const user = require("../../database/connect");

router.post("/submit", async (req:any, res:any) => {
    const ddd: string = await req.body.ddd;
    const number: string = await req.body.number;
    const password: string = await req.body.password;

    const numberCheck: string = `(${ddd})` + `${number}`;

    const userdata = await user.findOne({
        where: {
            number: numberCheck
        }
    });

    if(!userdata) return res.status(404).send("Usuário não encontrado");
    const passwordCheck: string = await userdata.password;

    if (password !== passwordCheck) return res.status(401).send("Senha incorreta!");

    req.session.number = userdata.number;
    req.session.user = userdata.name;
    req.session.password = password;
    res.redirect("/");
});

router.get("/logout", (req: any, res: any) => {
    req.session.destroy();
    res.redirect("/");
});

router.get("/register", (req: any, res: any) => {
    res.render("../public/pages/logged-off/register.ejs");
});

router.post("/register/submit", async (req: any, res: any) => {
    const ddd: string = req.body.ddd;
    const number: string = req.body.number;
    const password: string = req.body.password;
    const name: string = req.body.name;

    const userdata = await user.findOne({ number: `(${ddd})` + `${number}` });
    if (userdata) return res.redirect("/");

    await user.create({
        name: name,
        number: `(${ddd})` + `${number}`,
        password: password
    });
    res.redirect("/");
});
export = router