// index.js

const express = require("express");
const db = require("./db/database");
const transactionRoutes = require("./routes/transactions");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use("/transactions", transactionRoutes);

// Server Listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
