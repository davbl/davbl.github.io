import { useEffect } from "react";
import {
  setHomeScrollPosition,
  getHomeScrollPosition,
} from "../utils/scrollState";

// Components
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Dev from "../components/dev/dev";
import VisDesign from "../components/visual-design/visual-design";
import Biomed from "../components/biomed/biomed";
import OthersSay from "../components/others-say/others-say";
import Logos from "../components/logo-marquee/logo-marquee";
import Footer from "../components/footer/footer";

function Home() {
  useEffect(() => {
    // On mount: restore scroll position
    window.scrollTo(0, getHomeScrollPosition());

    // On unmount: save scroll position
    return () => {
      setHomeScrollPosition(window.scrollY);
    };
  }, []);

  // Render
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Dev />
        <VisDesign />
        <Biomed />
        <OthersSay />
        <Logos />
      </main>
      <Footer />
    </>
  );
}

export default Home;
