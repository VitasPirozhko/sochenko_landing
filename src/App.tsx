import { Header } from "./Components/Header/Header";
import { RegistrationInfo } from "./Components/RegistrationInfo/RegistrationInfo";
import { RegistrationSection } from "./Components/RegistrationSection/RegistrationSection";
import { RegistrationPromo } from "./Components/RegistrationPromo/RegistrationPromo";
import sitebackground from "./assets/background.png";
import "./App.css";

function App() {
  return (
    <div className="page-wrapper">
      <img
        src={sitebackground}
        alt="page backgound"
        className="page-backgound"
      />
      
      <Header />
    <main>
        <RegistrationInfo />
        <RegistrationSection />
        <RegistrationPromo />
    </main>
      
    </div>
  );
}

export default App;
