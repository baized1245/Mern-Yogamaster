import Gellary from "./Gellary/Gellary";
import HeroContainer from "./Hero/HeroContainer";

const Home = () => {
  return (
    <section>
      <HeroContainer />
      <div className="max-w-screen-xl mx-auto">
        <Gellary />
      </div>
    </section>
  );
};

export default Home;
