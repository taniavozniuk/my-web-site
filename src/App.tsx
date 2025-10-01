import { Header } from "./component/Header/Header";
import { Me } from "./component/Me/Me";
import "./App.scss";
import { TechSwiper } from "./component/Swiper/Swiper";
import { Projects } from "./component/Projects/Projects";

export const App = () => {
  return (
    <main className="main">
      <Header />
      <Me />
      <TechSwiper />
      <Projects />
    </main>
  );
};

export default App;
