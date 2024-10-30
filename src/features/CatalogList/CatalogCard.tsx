import React from "react";
import ImageAtom from "@/shared/ui/ImageAtom";
import { Product } from "@/entities/product/Product.types";
import { Link } from "react-router-dom";
import styles from "./CatalogCard.module.css";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <Link to={`/product/${product.id}`} className={styles.link}>
    <div className={styles.card}>
      <ImageAtom src={product.images[0]} alt={product.name} />
      <div className={styles.content}>
        <div className={styles.title}>{product.name}</div>
      </div>
      <div className={styles.footer}>
        <span className={styles.price}>{product.price} 000 ₽</span>
      </div>
    </div>
  </Link>
);

export default ProductCard;
