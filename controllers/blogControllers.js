const BLOG = require("../models/blog");


//item create
function create(req, res, next) {
  let title = req.body.title;
  let content = req.body.content;

  let blog = new BLOG({
    title,
    content,
  });
  blog.save().then((data) => {
    res.send(data);
  });
}

//item view
function view(req, res, next) {
  BLOG.find({}).then((data) => {
    res.send(data);

  });
}

//Sigle View
function singleview(req, res, next) {
  BLOG.findOne({_id: req.params.id}).then((data) => {
   
    res.send(data);
  });
}

//item update
function update(req, res, next) {
  BLOG.findByIdAndUpdate(req.params.id, req.body, (err, blog) => {
   if (err) {
      return res.status(500).send({ error: "Unable to update Item " });
    }
    res.send(blog);
  });
}

// Article delete

function distroy(req, res, next) {
  BLOG.findByIdAndDelete(req.params.id, req.body, (err, blog) => {
    if (err) {
       return res.status(500).send({ error: "Unable to delete Item " });
     }
     res.send("delete successfully");
   });
 }
module.exports.create = create;
module.exports.view = view;
module.exports.singleview = singleview;
module.exports.update = update;
module.exports.distroy = distroy;
