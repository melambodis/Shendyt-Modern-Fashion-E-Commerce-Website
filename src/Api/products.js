
const BASE_URL = "https://raw.githubusercontent.com/melambodis/Shendyt-ecommerce-db/refs/heads/main/db.json";
export const fetchProducts = async () => {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return{products: data.products || [],
    categories:data.categories || []
}
};







