import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className={styles.top}
    >
      <div className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/order-status">Статус заказа</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/payment">Оплата</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/delivery">Доставка</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/how-to-order">Как заказать</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/returns">Возврат</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contacts">Контакты</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about">О Нас</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/terms">Сроки</Link>
          </li>
        </ul>
      </div>
      <div className={styles.header}>
        <Link to="/">
          <h1 className={styles.title}>MINIMALIZM STUDIO</h1>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/wedding">Свадебное</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/engagement">Помолвка</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/muslim-dresses">Мусульманские платья</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/evening">Вечернее</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/cocktail">Коктейльные платья</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/tops">Топы</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/skirts">Юбки</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/corsets">Корсеты</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/hand-embroidery">Ручная вышивка 🪡</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/accessories">Аксессуары</Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
}
