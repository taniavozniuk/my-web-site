import { Header } from "./component/Header/Header";
import { Me } from "./component/Me/Me";
import "./App.scss";
import { TechSwiper } from "./component/Swiper/Swiper";
import { Projects } from "./component/Projects/Projects";
import { Certificate } from "./component/Certificate/Certificate";
import { Contact } from "./component/Contact/Contact";
import { Footer } from "./component/Footer/Footer";
import { useEffect, useState } from "react";
import { Aside } from "./component/Aside/Aside";

export const App = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <main className="main">
      <Header setOpen={setOpen} open={open} />
      {open && <Aside open={open} setOpen={setOpen} />}
      <Me />
      <TechSwiper />
      <Projects />
      <Certificate />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
