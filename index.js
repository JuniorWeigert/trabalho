const Express = require("express");
const appRouter = require("./routes/app/app");
const apiRouter = require("./routes/api/api");
const bodyParser = require("body-parser");
const inMemoryDatabase = require('./infrastructure/data/in_memory');

const app = Express();

inMemoryDatabase.initialize();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(Express.static("./public"));
app.use(appRouter);
app.use(apiRouter);
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.set("views", "./public/views");

app.listen(3435, () => {
  console.log("Rodando");
});
