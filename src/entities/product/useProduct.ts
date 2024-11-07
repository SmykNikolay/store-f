import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "./model/types";
import { env } from "@/shared/config/env";

const fetchProductById = async (id: string): Promise<Product> => {
  const response = await axios.get(`${env.VITE_API_URL}/products/${id}`, {
    headers: {
      Authorization: `Bearer ${env.VITE_API_KEY}`,
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
