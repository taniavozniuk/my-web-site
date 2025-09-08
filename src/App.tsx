import { Header } from "./component/Header/Header";
import { Me } from "./component/Me/Me";
import "./App.scss";
export const App = () => {
  return (
    <main className="main">
      <Header />
      <Me />
    </main>
  );
};

export default App;
