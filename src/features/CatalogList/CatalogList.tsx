import { motion } from "framer-motion";
import ProductCard from "@/features/CatalogList/CatalogCard";
import { useProducts } from "@/entities/product/useProducts";
import styles from "./CatalogList.module.css";

const CatalogList: React.FC = () => {
  const { products, loading, error } = useProducts();
  console.log(products);
  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.grid}>
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 1, y: 500 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5 + (index % 3) * 0.1 }}
          viewport={{ once: true }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  );
};

export default CatalogList;
