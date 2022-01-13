import * as express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('./public/pages'));

app.set('view engine', 'ejs');

app.use('/', require("./src/routes/controller/updatePage"));
app.use('/', require("./src/routes/controller/redirectPage"));
app.use('/', require("./src/routes/auth/oauth"));

app.listen(8081, () => {
    console.info("Ready!");
});