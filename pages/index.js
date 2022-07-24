import styles from "../styles/Home.module.css";
import Image from "next/image";
function Nav() {
  return (
    <nav className={styles.nav}>
      <li>Tables</li>
      <li>Gallery</li>
    </nav>
  );
}

function IntroPage() {
  return (
    <div className={styles.introPage}>
      <section>
        <h1>Tinas Kitchen</h1>
        <br />
        <p>
          home of your top dishes <br />
          we promise to deliver the best
        </p>
      </section>
      <section>
        <Image layout="fill" src={require("../images/4.jpg").default} />
      </section>
    </div>
  );
}

function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <section>
        <Image layout="fill" src={require("../images/3.jpg").default} />
      </section>
      <section>
      <button>Contact Us</button>
        <p>
          welcome to Tinas Kitchen
          <br /> Your home for quality dishes <br />
          We make Fish ,Rice , Beaf ,Beaf Stew among others <br />
          contact us by clicking the button below
        </p>
      </section>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Nav />
      <IntroPage />
      <AboutUs />
    </div>
  );
}

export default Home;

//https://github.com/amnotperfect/Tinas-Kitchen-2.git
