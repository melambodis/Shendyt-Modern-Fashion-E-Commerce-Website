import { useEffect, useState } from "react";
import { fetchProducts } from "../Api/products"; 
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);   // ⏳ عشان تعرف لو لسه بيجيب داتا
  const [error, setError] = useState(null);       // ⚠️ عشان تمسك أي خطأ
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const { products, categories } = await fetchProducts();
        setProducts(products);
        setCategories(categories);
      } catch (err) {
        setError(err.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);
  return { products, categories, loading, error };
};
export default useProducts;
