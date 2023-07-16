/** @format */

const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

// Middlewares
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

// Data
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

// Create
app.post("/transactions", (req, res) => {
	let { id, item_name, amount, date, from, category } = req.body;

	if (!id) {
		id = Date.now();
	} else {
		if (transactions.find((t) => t.id === Number(id))) {
			return res.status(400).json({ error: "That id is already in use" });
		}
	}

	if (!item_name || !amount || !date || !from || !category) {
		return res.status(400).json({ error: "Missing required fields" });
	}

	const newTransaction = { id, item_name, amount, date, from, category };
	transactions.push(newTransaction);
	res.sendStatus(201);
});

// Read
app.get("/transactions", (req, res) => {
	res.json(transactions);
});

app.get("/transactions/:id", (req, res) => {
	const { id } = req.params;
	const transaction = transactions.find((t) => t.id === Number(id));
	if (!transaction) {
		return res.status(404).json({ error: "Transaction not found" });
	}
	res.json(transaction);
});

// Update
app.put("/transactions/:id", (req, res) => {
	const { id } = req.params;
	const { item_name, amount, date, from, category } = req.body;
	const transaction = transactions.find((t) => t.id === Number(id));
	if (!transaction) {
		return res.status(404).json({ error: "Transaction not found" });
	}
	if (!item_name || !amount || !date || !from || !category) {
		return res.status(400).json({ error: "Missing required fields" });
	}
	transaction.item_name = item_name;
	transaction.amount = amount;
	transaction.date = date;
	transaction.from = from;
	transaction.category = category;

	res.sendStatus(200);
});

// Delete
app.delete("/transactions/:id", (req, res) => {
	const { id } = req.params;
	const transactionIndex = transactions.findIndex((t) => t.id === Number(id));
	if (transactionIndex === -1) {
		return res.status(404).json({ error: "Transaction not found" });
	}
	transactions.splice(transactionIndex, 1);
	res.sendStatus(200);
});

// Error handling
app.use((req, res) => {
	res.status(404).json({ error: "Route not found" });
});

app.listen(port, () => {
	console.log("The server is running on port " + port);
});
