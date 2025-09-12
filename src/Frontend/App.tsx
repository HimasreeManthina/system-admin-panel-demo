import React, { useState, useEffect } from "react";

interface Status {
  service: string;
  status: string;
}

function App() {
  const [statuses, setStatuses] = useState<Status[]>([]);

  useEffect(() => {
    // Fetch from backend API
    fetch("/api/status")
      .then((res) => res.json())
      .then((data) => setStatuses(data))
      .catch((err) => console.error("Error fetching status:", err));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>System Admin Panel (Demo)</h1>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Service</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {statuses.map((s, i) => (
            <tr key={i}>
              <td>{s.service}</td>
              <td>{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
