import Header from "./components/container/Header/header";
import Hero from "./components/container/HeroSection";
import Phone1 from "/phone1.svg";

function App() {
  return (
    <>
      <Header />
      <img
        src={Phone1}
        alt="phone_1.svg"
        className="absolute top-0 right-0 z-0"
      />
      <Hero />
    </>
  );
}

export default App;
