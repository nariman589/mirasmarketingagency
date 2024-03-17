import AboutUs from "@/components/aboutUs/AboutUs";
import Banners from "@/components/banners/Banners";
import Cards from "@/components/cards/Cards";
import Projects from "@/components/projects/Projects";
import OurTeam from "@/components/team/OurTeam";
import styles from "./page.module.css";
import HowWork from "@/components/howWeWork/HowWork";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banners />
      <AboutUs />
      {/* <OurTeam /> */}
      <Cards />
      <HowWork />
      <Projects />
    </main>
  );
}
