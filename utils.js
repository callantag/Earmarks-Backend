const e = require("express");
const jwt = require("jsonwebtoken");
const privateKey = process.env.PRIVATE_KEY;
const User = require("./models/User");

module.exports.verifyUser = (req, res, next) => {
    let authorization = req.headers.authorization;

    if (!authorization) {
        res.status(403);
        throw { message: "Unauthorized" };
    }

    let token = authorization.slice(7, authorization.length);

    let decoded = jwt.verify(token, privateKey);

    User.findById(decoded.userId)
        .select({ password: 0 })
        .then((user) => {
            if (!user) {
                res.status(403);
                next(new Error("Unauthorized"));
            } else {
                req.user = user;
                next();
            }
        })
        .catch(next);
};

module.exports.verifyAdmin = (req, res, next) => {
    this.verifyUser(req, res, () => {
        if (!req.user.isAdmin) {
            throw { message: "Unauthorized" };
        } else {
            next();
        }
    })
};
