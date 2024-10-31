import React from "react";
import styles from "./ProductPage.module.css";
import { Button } from "@/shared/ui/button";
import LabeledInput from "@/shared/ui/LabeledInput";

interface ProductDetailsProps {
  product: {
    name: string;
    description: string;
    price: number;
    article?: string;
    fastener?: string;
    color?: string;
    composition?: string;
    country?: string;
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className={styles.details}>
      <div className={styles.detailsProduct}>
        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>{product.price} 000 ₽</p>

        <LabeledInput
          id="sleeveLength"
          placeholder="Артикул"
          text={product.article}
        />
        <LabeledInput
          id="fastener"
          placeholder="Застежка"
          text={product.fastener}
        />
        <LabeledInput id="sleeveLength" placeholder="Длина рукава" />
        <LabeledInput id="dressLength" placeholder="Длина платья" />
        <LabeledInput id="222" placeholder="Обхват под грудью" />
        <LabeledInput id="color" placeholder="Цвет" text={product.color} />
        <LabeledInput
          id="composition"
          placeholder="Состав"
          text={product.composition}
        />
        <LabeledInput
          id="country"
          placeholder="Страна производства"
          text={product.country}
        />

        <Button className={styles.button}>Купить</Button>
      </div>
    </div>
  );
};

export default ProductDetails;
