const moment = require("moment");
module.exports = (app) => {
  let tasks = [];
  app.locals.tasks = tasks;
  app.get("/", (req, res) => {
    //   res.send("Hola mundo");
    res.render("index", { title: "Task List Ejs" });
  });
  app.get("/new-entry", (req, res) => {
    //   res.send("Hola mundo");
    res.render("new-entry", { title: "Nueva entrada" });
  });
  app.post("/new-entry", (req, res) => {
    if (!req.body.taskTitle || !req.body.taskBody) {
      res.status(400).send("Entries must have a title and body");
      return;
    }

    var newTask = {
      title: req.body.taskTitle,
      content: req.body.taskBody,
      published: moment().format("L, LT"),
    };
    console.log(newTask);
    tasks.push(newTask);
    res.redirect("/");
  });
};
