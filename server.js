let express = require("express");
let app = express();
require("dotenv").config();
let cors=require("cors")
app.use(cors())

let port = process.env.PORT;

app.post("/", (req, res) => {
    
	res.sendStatus(201);
});


app.get("/", (req, res) => {
	res.json();
});


app.get("//:id", (req, res) => {
	res.json();
});


app.put("/", (req, res) => {
    
	res.sendStatus(201);
});

app.delete("/", (req, res) => {
    
	res.sendStatus(201);
});

app.listen(port, () => {
	console.log("The server is running on the port " + port);
});
