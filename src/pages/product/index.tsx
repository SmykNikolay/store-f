import { motion } from "framer-motion";

import { useProduct } from "@/entities/product/useProduct";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";
import ProductDetails from "./ProductDetails";
import ImageAtom from "@/shared/ui/ImageAtom";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { product, loading, error } = useProduct(String(id));

  if (loading) {
    return <div>Загрузка продукта...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.flexRow}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.imageContainer}
        >
          <ImageAtom images={product.images} alt={product.name} />
        </motion.div>
        <ProductDetails product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
