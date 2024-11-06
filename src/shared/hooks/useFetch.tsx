import { useState, useEffect } from "react";
import { IFetchState } from "@/shared/api/types";

export const useFetch = <T,>(baseUrl: string) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [state, setState] = useState<IFetchState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchCN = async (query: string) => {
    if (!query) {
      setState((prev) => ({ ...prev, data: null }));
      return;
    }

    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await fetch(`${baseUrl}?q=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error("Ошибка при получении данных");
      }

      const data = await response.json();
      setState({
        data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: error instanceof Error ? error.message : "Произошла ошибка",
      });
    }
  };

  useEffect(() => {
    fetchCN(searchTerm);
  }, [searchTerm]);

  return {
    ...state,
    searchTerm,
    setSearchTerm,
  };
};
