const Express = require("express");
const appRouter = require("./routes/app/app");
const apiRouter = require("./routes/api/api");
const bodyParser = require("body-parser");

// let axios = require("axios");
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

// ultima função do app
app.listen(3000, () => {
  console.log("Rodando");
});
