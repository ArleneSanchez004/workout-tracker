const express = require("express");
const mongoose = require("mongoose");
const app = express();
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:workout", 
    { useNewUrlParser: true,
    useFindAndModify: false });

app.use("/", htmlRoutes);
app.use("/exercise", htmlRoutes);
app.use("/stats", htmlRoutes)
//app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => {
    console.log("App running on port http://localhost:" + PORT);
});