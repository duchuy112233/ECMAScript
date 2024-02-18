// api.js
export const addProductToDB = async (newProduct) => {
    try {
        const response = await fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        });

        if (!response.ok) {
            throw new Error("Failed to add product to database");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
