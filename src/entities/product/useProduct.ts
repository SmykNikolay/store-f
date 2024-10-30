import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "./Product.types";

export const useProduct = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${id}`,
        );
        setProduct(response.data);
      } catch (err) {
        setError("Ошибка загрузки продукта: " + err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
};
