/** @format */

let express = require("express");
let app = express();
require("dotenv").config();
let cors = require("cors");

//middlewares
app.use(cors());
app.use(express.json());

let port = process.env.PORT;

//data
let transactions = [
	{
		id: 1,
		item_name: "income",
		amount: 1000,
		date: "2023-07-14",
		from: "employer",
		category: "income",
	},
	{
		id: 2,
		item_name: "cat food",
		amount: -20,
		date: "2023-07-15",
		from: "pet store",
		category: "pets",
	},
];

//create
app.post("/transactions", (req, res) => {
	const { item_name, amount, date, from, category } = req.body;
	const id = Date.now();
	const newTransaction = { id, item_name, amount, date, from, category };
	transactions.push(newTransaction);
	res.sendStatus(201);
});

//read
app.get("/transactions", (req, res) => {
	res.json(transactions);
});
app.get("/transactions/:id", (req, res) => {
	const { id } = req.params;
	const transaction = transactions.find((t) => t.id === Number(id));
	if (!transaction) {
		res.sendStatus(404);
	} else {
		res.json(transaction);
	}
});

//error 404
app.use((req, res) => {
	res.sendStatus(404);
});

//update
app.put("/transactions/:id", (req, res) => {
	const { id } = req.params;
	const { item_name, amount, date, from, category } = req.body;
	const transaction = transactions.find((t) => t.id === Number(id));
	if (!transaction) {
		res.sendStatus(404);
	} else {
		transaction.item_name = item_name;
		transaction.amount = amount;
		transaction.date = date;
		transaction.from = from;
		transaction.category = category;
		res.sendStatus(200);
	}
});

//delete
app.delete("/transactions/:id", (req, res) => {
	const { id } = req.params;
	const transactionIndex = transactions.findIndex((t) => t.id === Number(id));
	if (transactionIndex === -1) {
		res.sendStatus(404);
	} else {
		transactions.splice(transactionIndex, 1);
		res.sendStatus(200);
	}
});

app.listen(port, () => {
	console.log("The server is running on the port " + port);
});
