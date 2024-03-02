import AboutUs from "@/components/aboutUs/AboutUs";
import Banners from "@/components/banners/Banners";
import Cards from "@/components/cards/Cards";
import Projects from "@/components/projects/Projects";
import OurTeam from "@/components/team/OurTeam";
import styles from "./page.module.css";

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
