export const fetchRepo = async () => {
    const token = localStorage.getItem('token');
    console.log("Token from localStorage:", token);  // Log for debugging

    if (!token) {
        throw new Error("Token not found in localStorage");
    }

    try {
        const response = await fetch('http://localhost:5000/repos', {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || "Failed to fetch repositories.");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching repositories:", error);
        throw error; // Rethrow error for further handling (e.g., in the component)
    }
};
