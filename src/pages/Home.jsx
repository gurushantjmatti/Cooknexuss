import { useEffect, useState } from "react";
import axios from "../utils/axios";

const Home = () => {
    const [products, setProducts] = useState([]);

    const getproduct = async () => {
        try {
            // Simulate fetching kitchen products
            const kitchenProducts = [
                { id: 1, name: "Non-Stick Frying Pan", desc: "Perfect for eggs, pancakes, and more." },
                { id: 2, name: "Chef's Knife", desc: "Sharp and durable for all your chopping needs." },
                { id: 3, name: "Mixing Bowls Set", desc: "Stainless steel bowls for mixing and prepping." },
                { id: 4, name: "Measuring Cups & Spoons", desc: "Accurate measurements for baking and cooking." },
                { id: 5, name: "Cutting Board", desc: "Bamboo board for safe and easy cutting." },
            ];
            setProducts(kitchenProducts);
            // If you want to use the API, uncomment below:
            // const response = await axios.get("/products");
            // setProducts(response.data);
            // console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getproduct();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-5xl font-extrabold mb-4 text-blue-400 drop-shadow">Welcome to CookNexuss!</h1>
            <p className="text-lg md:text-xl max-w-2xl text-center mb-8 text-gray-200">
                Discover, create, and share your favorite recipes with the world. Browse our collection, add your own, and enjoy delicious meals every day. Whether you're a home cook or a professional chef, CookNexuss Recipes is your go-to place for culinary inspiration.
            </p>
            <button
                onClick={getproduct}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-6 py-3 transition-colors shadow mb-4"
            >
                Get Products
            </button>
            {products.length > 0 && (
                <div className="mt-6 w-full max-w-xl bg-gray-800 rounded-lg shadow p-6">
                    <h2 className="text-2xl font-bold mb-4 text-blue-300">Kitchen Products</h2>
                    <ul className="space-y-3">
                        {products.map((prod) => (
                            <li key={prod.id} className="bg-gray-700 rounded-md p-4 flex flex-col gap-1">
                                <span className="font-semibold text-lg text-white">{prod.name}</span>
                                <span className="text-gray-300 text-sm">{prod.desc}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="mt-8 text-gray-400 text-sm">
                <span>Tip: Use the navigation bar to explore recipes, add new ones, or learn more about us!</span>
            </div>
        </div>
    );
};

export default Home;
// we have to add fav functionality at last
