// widgets/CatalogCard/ui/CatalogCard.tsx
import React from "react";
import ImageAtom from "@/shared/ui/ImageAtom";
import { Product } from "@/entities/product/model/types";
import { Link } from "react-router-dom";
import { formatPrice } from "@/shared/lib/formatPrice";
import styles from "./CatalogCard.module.css";

interface CatalogCardProps {
  product: Product;
}

const CatalogCard: React.FC<CatalogCardProps> = ({ product }) => {
  const { id, title, price, images } = product;

  return (
    <Link to={`/product/${id}`} className={styles.link}>
      <article className={styles.card}>
        {/* <ImageAtom images={images} alt={title} /> */}
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <footer className={styles.footer}>
          <span className={styles.price}>{formatPrice(price)}</span>
        </footer>
      </article>
    </Link>
  );
};

export default CatalogCard;
