import { fetchRepo } from "../utils/api";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [repo, setRepo] = useState([]); // Initialize as an array
  const [selectedRepo, setSelectedRepo] = useState(""); // Track selected repository
  const [error, setError] = useState(null); // Track fetch errors, if any

  useEffect(() => {
    fetchRepo()
      .then(setRepo)
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch repositories. Please try again.");
      });
  }, []);

  const onSelect = (value) => {
    setSelectedRepo(value); // Update selected repository
    console.log("Selected repository:", value); // Optional: debug logging
  };

  return (
    <div>
      <h2>Select a Repository</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <select onChange={(e) => onSelect(e.target.value)} value={selectedRepo}>
        <option value="">Choose a repository</option>
        {repo.map((repository) => (
          <option key={repository.id} value={repository.name}>
            {repository.name}
          </option>
        ))}
      </select>
      {selectedRepo && <p>You selected: {selectedRepo}</p>}
    </div>
  );
}
