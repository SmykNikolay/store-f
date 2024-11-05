import React from "react";
import { motion } from "framer-motion";
import styles from "./ProductPage.module.css";
import { Button } from "@/shared/ui/button";
import LabeledInput from "@/shared/ui/LabeledInput";
import LabeledSelect from "@/shared/ui/LabeledSelect";

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
    { id: "bustGirth", placeholder: "Обхват груди" },
    { id: "waistGirth", placeholder: "Обхват талии" },
    { id: "hipGirth", placeholder: "Обхват бедер" },
    { id: "neckGirth", placeholder: "Обхват шеи" },
    { id: "armholeGirth", placeholder: "Обхват проймы" },
    { id: "frontLength", placeholder: "Длина переда" },
    { id: "backLength", placeholder: "Длина спинки" },
    { id: "skirtLength", placeholder: "Длина юбки" },
    { id: "slitLength", placeholder: "Длина до разреза" },
    { id: "thighHeight", placeholder: "Высота бедра" },
    { id: "sleeveLength", placeholder: "Длина рукава" },
    { id: "armGirth", placeholder: "Обхват руки" },
    { id: "wristGirth", placeholder: "Обхват запястья" },
    { id: "color", placeholder: "Цвет", text: product.color },
    { id: "composition", placeholder: "Состав", text: product.composition },
    { id: "material", placeholder: "Материал" },
    {
      id: "country",
      placeholder: "Страна производства",
      text: product.country,
    },
  ];

  const selectOptions = [
    {
      id: "color",
      placeholder: "Цвет",
      options: ["Красный", "Синий", "Зеленый"],
    },
    {
      id: "composition",
      placeholder: "Состав",
      options: ["Хлопок", "Шерсть", "Полиэстер"],
    },
    {
      id: "material",
      placeholder: "Материал",
      options: ["Кожа", "Джинс", "Шелк"],
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
          transition={{ duration: 0.1, delay: 0.2 }}
          viewport={{ once: true }}
          className={styles.price}
        >
          {product.price} 000 ₽
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: 0.1 }}
          viewport={{ once: true }}
          className={styles.description}
        >
          {product.description}
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

        {selectOptions.map((select, index) => (
          <motion.div
            key={select.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.1,
              delay: 0.3 + inputs.length * 0.1 + index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <LabeledSelect
              placeholder={select.placeholder}
              options={select.options}
            />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.1,
            delay: 0.3 + inputs.length * 0.1 + selectOptions.length * 0.1,
          }}
          viewport={{ once: true }}
        >
          <Button className={styles.button}>Купить</Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
