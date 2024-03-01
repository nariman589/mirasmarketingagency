import styles from "./page.module.css";
import Banners from "./blocks/banners/Banners";
import OurTeam from "./blocks/team/OurTeam";
import Cards from "./blocks/cards/Cards";
import AboutUs from "./blocks/aboutUs/AboutUs";
import Projects from "./blocks/projects/Projects";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banners />
      <OurTeam />
      <Cards />
      <AboutUs />
      <Projects />
    </main>
  );
}
