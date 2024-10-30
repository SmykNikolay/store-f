import ProductCard from "@/features/CatalogList/CatalogCard";
import { useProducts } from "@/entities/product/useProducts";
import styles from "./CatalogList.module.css";

const CatalogList: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CatalogList;
