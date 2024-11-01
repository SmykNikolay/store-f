import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "./Product.types";

const fetchProductById = async (id: string): Promise<Product> => {
  const response = await axios.get(`http://localhost:3000/products/${id}`, {
    headers: {
      Authorization: `Bearer token1`,
    },
  });
  return response.data;
};

export const useProduct = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await fetchProductById(id);
        setProduct(productData);
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
