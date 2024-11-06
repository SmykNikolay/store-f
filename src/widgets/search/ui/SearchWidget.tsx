import { useFetch } from "@/shared/hooks/useFetch";
import { IPost } from "@/shared/api/types";

export const SearchWidget = () => {
  const { data, loading, error, searchTerm, setSearchTerm } = useFetch<IPost>(
    "https://api.example.com/posts",
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Поиск..."
      />

      {loading && <div>Загрузка...</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}

      {data && (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
