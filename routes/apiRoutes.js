const express = require("express");
const router = express.Router();
const db = require("../models");

// get all todos
router.get("/all", (req, res) => {
  db.Todo.findAll().then((todos) => res.send(todos));
});

// get a todo by id
router.get("/find/:id", (req, res) => {
  db.Todo.findAll({
    where: {
      id: req.params.id,
    },
  }).then((todo) => res.send(todo));
});

// post new todo
router.post("/new", (req, res) => {
  db.Todo.create({
    text: req.body.text,
  }).then((submitedTodo) => res.send(submitedTodo));
});

// delete todo
router.delete("/delete/:id", (req, res) => {
  db.Todo.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send("Successfully Deleted"));
});

// edit todo
router.put("/edit", (req, res) => {
  db.Todo.update(
    {
      text: req.body.text,
    },
    {
      where: { id: req.body.id },
    }
  ).then(() => res.send("Successfully Updated"));
});

module.exports = router;
