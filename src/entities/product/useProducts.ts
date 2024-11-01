import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "./Product.types";

const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get("http://localhost:3000/products", {
    headers: {
      Authorization: `Bearer token1`,
    },
  });
  return response.data;
};

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (err) {
        setError("Ошибка загрузки продуктов: " + err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, loading, error };
};
