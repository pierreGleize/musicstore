import styles from "../styles/Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faLocationDot,
  faBagShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <h2 className={styles.title}>Music Store</h2>
        <div className={styles.navIcon}>
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faLocationDot} />
          <FontAwesomeIcon icon={faBagShopping} />
        </div>
      </nav>
    </>
  );
};

export default Nav;
