import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "./model/types";

import { env } from "@/shared/config/env";

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

const fetchProducts = async (): Promise<ApiResponse<Product[]>> => {
  const response = await axios.get(`${env.VITE_API_URL}/products`, {
    headers: {
      Authorization: `Bearer ${env.VITE_API_KEY}`,
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
        setProducts(productsData.data);
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
