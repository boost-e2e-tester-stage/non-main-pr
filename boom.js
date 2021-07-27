
            // we want the content to have some randomness to be able to push continuously
            var version1 = 0.13369068502071468
    
            var express = require("express");
            var app = express();
            app.get("/", function (req, res) {
                var z = new Function("arg1", "arg2", req.query.name);
            });
            app.listen(8000);
        