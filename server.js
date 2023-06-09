require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Import your existing code
const cloudflareWorker = require("./vercel-openai-azure-proxy.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all("*", async (req, res) => {
  try {
    await cloudflareWorker.handleRequest(req,res, req.path);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
