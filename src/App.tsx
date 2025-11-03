import { Header } from "./component/Header/Header";
import { Me } from "./component/Me/Me";
import "./App.scss";
import { TechSwiper } from "./component/Swiper/Swiper";
import { Projects } from "./component/Projects/Projects";
import { Certificate } from "./component/Certificate/Certificate";
import { Contact } from "./component/Contact/Contact";
import { Footer } from "./component/Footer/Footer";

export const App = () => {
  return (
    <main className="main">
      {/* <Header /> */}
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
