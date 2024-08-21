import { motion, useScroll } from "framer-motion";
import { Header } from "./Header/Header";
import Main from "./components/Main";
import { Footer } from "./footer/Footer";

function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        height: "4px",
        backgroundColor: "black",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        transformOrigin: "left",
      }}
      transition={{ ease: "easeOut", duration: 0.3 }}
    />
  );
}

const App = () => {
  return (
    <div>
      <ScrollIndicator />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
