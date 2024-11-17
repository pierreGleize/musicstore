import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li>SUPPORT</li>
        <li>STORES</li>
      </ul>
    </footer>
  );
};

export default Footer;
