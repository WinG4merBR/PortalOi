import express from 'express';

const router = express.Router();

router.get("/main", (req: any, res: any) => {
    res.redirect("https://oi.com.br");
});

router.get("/tutorial", (req: any, res: any) => {
    res.status(200).render("../public/pages/examples/velox.ejs");
});

router.get("/prepago", (req: any, res: any) => {
    res.status(200).render("../public/pages/examples/oipre.ejs");
});

router.get("/oipontos", (req: any, res: any) => {
    res.status(200).render("../public/pages/examples/oipontos.ejs");
});

export = router;
