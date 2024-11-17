import styles from "../styles/Products.module.css";

const Products = ({ p, title, backgroundImage }) => {
  return (
    <div
      className={styles.operaBg}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.text}>
        <p>{p}</p>
        <h4>{title}</h4>
        <button className="button btn-main">DISCOVER</button>
      </div>
    </div>
  );
};

export default Products;
