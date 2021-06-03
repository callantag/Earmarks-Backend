const router = require("express").Router();
const Category = require("./../models/Category");
const { verifyUser } = require("./../utils");

// Create Category
router.post("/", verifyUser, (req, res, next) => {
    Category.create({
        ...req.body,
        user: req.user._id,
    })
        .then((category) => {
            category.user = req.user;
            res.send(category);
        })
        .catch(next);
});

// Update Single Category
router.put("/:id", verifyUser, (req, res, next) => {
    Category.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((category) => {
            res.send(category);
        })
        .catch(next);
});

// Delete Single Category
router.delete("/:id", verifyUser, (req, res, next) => {
    Category.findByIdAndDelete(req.params.id)
        .then((category) => {
            res.send(category);
        })
        .catch(next);
});

// Get All Entries
router.get("/", verifyUser, (req, res, next) => {
    Category.find()
        .then((entries) => {
            res.send(entries);
        })
        .catch(next);
});

// Get Specific Category
router.get("/:id", verifyUser, (req, res, next) => {
    Category.findById(req.params.id)
        .then((category) => {
            res.send(category);
        })
        .catch(next);
});

module.exports = router;
