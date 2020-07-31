const express = require("express");
const router = express.Router();
// model is import
const TodoModel = require("../models/todo");

// get TodoList
router.get("/", (req, res) => {
  TodoModel.find((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json({ data });
  }).select("name emailupdated created");
});
// add TodoList
router.post("/addData", (req, res) => {
  const newToDo = new TodoModel({
    name: req.body.name,
  });
  //   newToDo.save();
  newToDo.save().then((result) => {
    res.status(200).json({
      post: result,
    });
  });
  //   mongoDb save method
});
// delete todo

router.delete("/delete/:id", (req, res) => {
  console.log("req", req.params.id);
  TodoModel.findById(req.params.id).then(
    (data) => {
      // if (err) {
      //   return res.status(404).json({ error: err });
      // }
      data
        .remove()
        .then(() => res.json({ success: true }))
        .catch(() => res.json({ sucess: false }));
    }
    // data
    //   .remove()
    //   .then(() => res.json({ sucess: true }))
    //   .catch(() => res.json({ sucess: false }).status(404))
  );
});
module.exports = router;
