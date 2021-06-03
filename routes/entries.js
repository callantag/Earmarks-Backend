const router = require("express").Router();
const Entry = require("./../models/Entry");
const { verifyUser, verifyAdmin } = require("./../utils");

// Get all Entry as admin
router.get("/all", verifyAdmin, (req, res, next) => {
    Entry.find().populate('user')
        .then((entries) => {
            res.send(entries);
        })
        .catch(next);
});

// Create Entry
router.post("/", verifyUser, (req, res, next) => {
    Entry.create({
        ...req.body,
        user: req.user._id,
    })
        .then((entry) => {
            res.send(entry);
        })
        .catch(next);
});

// Update Single Entry
router.put("/:id", verifyUser, (req, res, next) => {
    Entry.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((entry) => {
            res.send(entry);
        })
        .catch(next);
});

// Delete Single Entry
router.delete("/:id", verifyUser, (req, res, next) => {
    Entry.findByIdAndDelete(req.params.id)
        .then((entry) => {
            res.send(entry);
        })
        .catch(next);
});

// Get All Entries
router.get("/", verifyUser, (req, res, next) => {
    Entry.find({ user: req.user })
        .then((entries) => {
            res.send(entries);
        })
        .catch(next);
});

// Get Specific Entry
router.get("/:id", verifyUser, (req, res, next) => {
    Entry.findById(req.params.id)
        .then((entry) => {
            res.send(entry);
        })
        .catch(next);
});

// Get All Users Entries
router.get("/", verifyUser, (req, res, next) => {
    Entry.find({ user: req.user })
        .then((entries) => {
            res.send(entries);
        })
        .catch(next);
});
module.exports = router;
