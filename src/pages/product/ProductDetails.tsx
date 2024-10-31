import React from "react";
import { motion } from "framer-motion";
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
  const inputs = [
    { id: "article", placeholder: "Артикул", text: product.article },
    { id: "fastener", placeholder: "Застежка", text: product.fastener },
    { id: "sleeveLength", placeholder: "Длина рукава" },
    { id: "dressLength", placeholder: "Длина платья" },
    { id: "222", placeholder: "Обхват под грудью" },
    { id: "color", placeholder: "Цвет", text: product.color },
    { id: "composition", placeholder: "Состав", text: product.composition },
    {
      id: "country",
      placeholder: "Страна производства",
      text: product.country,
    },
  ];

  return (
    <div className={styles.details}>
      <div className={styles.detailsProduct}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: true }}
          className={styles.title}
        >
          {product.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: 0.1 }}
          viewport={{ once: true }}
          className={styles.description}
        >
          {product.description}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: 0.2 }}
          viewport={{ once: true }}
          className={styles.price}
        >
          {product.price} 000 ₽
        </motion.p>

        {inputs.map((input, index) => (
          <motion.div
            key={input.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.3 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <LabeledInput
              id={input.id}
              placeholder={input.placeholder}
              text={input.text}
            />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: 0.3 + inputs.length * 0.1 }}
          viewport={{ once: true }}
        >
          <Button className={styles.button}>Купить</Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
