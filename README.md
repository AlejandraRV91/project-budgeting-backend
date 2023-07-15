<!-- @format -->

# Transaction Management Project

This project is a transaction management application that allows you to create, read, update, and delete transactions. It provides an API for interacting with transactions through HTTP routes.

## Requirements

-   Node.js (version 18.16.0)
-   NPM (version 9.6.6)

## Installation

1. Clone this repository to your local machine:

```shell
git clone https://github.com/AlejandraRV91/project-budgeting-backend.git
```

2. Navigate to the project directory:

```shell
cd project-budgeting-backend
```

3. Install project dependencies:

```shell
npm install
```

If you decide to use nodemon for development:

Make sure nodemon is installed globally by running:

```shell
npm install -g nodemon
```

Start the server with the following command:

```shell
nodemon server.js
```

## Configuration

1. Create a `.env` file in the root directory of the project.

2. Add the following environment variables to the `.env` file:

```shell
PORT = 5000;
```

## Usage

1. Start the server:

```shell
npm start
```

2. The server will start running at `http://localhost:5000` (or the port specified in the `.env` file).

3. You can use a tool like Postman or cURL to interact with the API endpoints:

-   `POST /transactions`: Create a new transaction.
-   `GET /transactions`: Get all transactions.
-   `GET /transactions/:id`: Get a specific transaction by ID.
-   `PUT /transactions/:id`: Update a specific transaction by ID.
-   `DELETE /transactions/:id`: Delete a specific transaction by ID.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
