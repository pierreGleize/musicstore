import styles from "../styles/Home.module.css";
import Products from "./Products";
import Footer from "./Footer";
import Nav from "./Nav";

function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <Nav />
        </div>
        <div className={styles.bottomHeader}>
          <div>
            <p>PHANTOM</p>
            <h2 className={styles.bottomHeaderTitle}>IMPLOSIVE SOUND</h2>
          </div>
          <div>
            <button className="button btn-white">DISCOVER</button>
            <button className="button btn-black">BUY</button>
          </div>
        </div>
      </div>
      {/* END HEADER */}
      <main>
        <div className={styles.hero}>
          <p>LATEST LAUNCH</p>
          <h3>DIONE SOUNDBAR</h3>
          <img src="/soundbar.png" alt="Soundbar" />
          <button className="button btn-main">DISCOVER</button>
        </div>
        <div className={styles.listeArticleContainer}>
          <div className={styles.listeArticle}>
            <Products
              p="PHANTOM I White"
              title="A class of its own."
              backgroundImage="/phantom1.png"
            />
            <Products
              p="PHANTOM II Gold"
              title="Pure sound."
              backgroundImage="/phantom2.png"
            />
            <Products
              p="PHANTOM II Black"
              title="Deeply nomadic."
              backgroundImage="/phantom3.png"
            />
            <Products
              p="PHANTOM II White"
              title="Intensively immersive."
              backgroundImage="/phantom4.png"
            />
          </div>
        </div>
        {/* END MAIN */}
        <Footer />
      </main>
    </div>
  );
}

export default Home;
