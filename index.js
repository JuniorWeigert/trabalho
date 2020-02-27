const Express = require("express");
const appRouter = require("./routes/app/app");
const apiRouter = require("./routes/api/api");
const bodyParser = require("body-parser");
const app = Express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(Express.static("./public"));
app.use(appRouter);
app.use(apiRouter);

app.set("views", "./public");

app.listen(3000, () => {
  console.log("Rodando");
});
