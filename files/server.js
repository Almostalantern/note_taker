const express = require("express");
const PORT = 5500;
const path = require("path");
const app = express();
const apiRoutes = require("./routes/api");
const viewRoutes = require("./routes/view");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", viewRoutes);


app.listen(PORT, function () {
    console.log("app listening on PORT:" + PORT);
});