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
        <div className={styles.imageContainer}>
          <ImageAtom images={product.images} alt={product.name} />
        </div>
        <ProductDetails product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
