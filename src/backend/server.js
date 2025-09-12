// Simple Express.js API for demo
const express = require("express");
const app = express();
const PORT = 4000;

// Demo status data
const services = [
  { service: "Database", status: "Running" },
  { service: "API Gateway", status: "Healthy" },
  { service: "Auth Service", status: "Running" },
  { service: "Cache", status: "Degraded" }
];

// GET endpoint to return system status
app.get("/api/status", (req, res) => {
  res.json(services);
});

// Root check
app.get("/", (req, res) => {
  res.send("System Admin Panel Backend (Demo)");
});

app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});
