const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();
require("./db");

const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/users", require("./routes/users"));
app.use("/api/entries", require("./routes/entries"));
app.use("/api/categories", require("./routes/categories"));

// error handling middleware
app.use((err, req, res, next) => {
    if (res.statusCode == 200) res.status(400);
    res.send({
        error: {
            message: err.message,
        },
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
