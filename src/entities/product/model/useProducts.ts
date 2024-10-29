import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "./Product.types";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Ошибка загрузки продуктов: " + err);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};
