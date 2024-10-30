import { useProduct } from "@/entities/product/useProduct";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";
import { Button } from "@/shared/ui/button";
import LabeledInput from "@/shared/ui/LabeledInput";

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
          {product.images.map((img) => {
            return (
              <img
                key={img}
                src={img}
                alt={product.name}
                className={styles.image}
              />
            );
          })}
        </div>
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
      </div>
    </div>
  );
};

export default ProductPage;
