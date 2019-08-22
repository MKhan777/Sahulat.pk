const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Products = require("./schemaModals/Products");

router.get("/getProducts", (req, res) => {
  Products.find({}, (err, result) => {
    if (err) {
      console.log("Something went Wrong");
    } else {
      res.send(result);
    }
  });
});
router.post("/addProducts", (req, res) => {
  const sample = new Products({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    value: req.body.value,
    amount: req.body.amount,
    price: req.body.price,
    category: req.body.category,
    sub_category: req.body.sub_category,
    imageUrl: req.body.imageUrl,
    body: req.body.body
  });
  sample
    .save()
    .then(result => {
      console.log(result);
      res.send(result);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
  // Array of JSON Objects
  // if (req.body.products) {
  //   Products.create(req.body.products, function(err) {
  //     if (err) res.send(err);
  //     else res.json(req.body);
  //   });
  // }
  // Single JSON Object
  // else {
  // const sample = new Products({
  //   _id: new mongoose.Types.ObjectId(),
  //   title: req.body.title,
  //   value: req.body.value,
  //   amount: req.body.amount,
  //   price: req.body.price,
  //   category: req.body.category,
  //   sub_category: req.body.sub_category,
  //   imageUrl: req.body.imageUrl,
  //   body: req.body.body
  // });
  // sample
  //   .save()
  //   .then(result => {
  //     console.log(result);
  //     res.send(result);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.send(err);
  //   });
  // }
});
router.delete("/deleteProducts", (req, res) => {
  Products.findByIdAndRemove(req.body.id)
    .exec()
    .then(response => {
      if (!response) {
        return res.status(404).end();
      }
      return res.status(204).end();
    })
    .catch(err => {
      res.send(err);
    });
});
router.put("/updateProducts/:id", (req, res) => {
  var id = req.params.id;
  Products.findOne({ _id: id }, function(err, foundObject) {
    if (err) {
      res.status(500).send();
    } else {
      if (!foundObject) {
        res.status(404).send();
      } else {
        if (req.body.title) {
          foundObject.title = req.body.title;
        }
        if (req.body.value) {
          foundObject.value = req.body.value;
        }
        if (req.body.amount) {
          foundObject.amount = req.body.amount;
        }
        if (req.body.price) {
          foundObject.price = req.body.price;
        }
        if (req.body.category) {
          foundObject.category = req.body.category;
        }
        if (req.body.sub_category) {
          foundObject.sub_category = req.body.sub_category;
        }
        if (req.body.imageUrl) {
          foundObject.imageUrl = req.body.imageUrl;
        }
        if (req.body.body) {
          foundObject.body = req.body.body;
        }
        foundObject.save(function(err, updatedObject) {
          if (err) {
            res.send("Not saved ");
          } else {
            res.send(updatedObject);
          }
        });
      }
    }
  });
});
module.exports = router;
