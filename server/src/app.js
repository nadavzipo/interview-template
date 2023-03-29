"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/health", function (req, res) {
    return res.json({
        status: "okay",
    });
});
app.use(function (error, req, res, next) {
    console.error("Route failed for %s", req.url, { error: error });
    var errorMessage = "General Error Occurred!";
    if (error.message) {
        errorMessage = error.message;
    }
    res.status(500).send(errorMessage);
});
//For local development set the port to 4000
var port = process.env.PORT ? parseInt(process.env.PORT) : 4000;
app.listen(port, function () {
    console.log("App listening on port ".concat(port));
});
