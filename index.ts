import express from 'express';
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('./public/pages'));

app.set('view engine', 'ejs');

app.use('/', require("./routes/controller/updatePage"));
app.use('/', require("./routes/controller/redirectPage"));
app.use('/', require("./routes/auth/oauth"));

app.listen(8081, () => {
    console.info("Ready!");
});