const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req,res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get('/about', (req,res) => {
    var color = req.query.color;

    res.send("<h1 style='color:"+color+";'>Patrick Guichon</h1>");
});

app.get('/cat/:id', (req,res) => {

    var cat = req.params.id;

    if (cat == 1) {
        res.send("Fluffy: <img src='/fluffy.gif' style='width:250px;'>");
    }
    else if (cat == 2) {
        res.send("Socks: <img src='/socks.gif' style='width:250px;'>");
    }
    else {
        res.send("Invalid cat id: "+cat);
    }
});


app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
	console.log("Node application listening on port "+port);
}); 