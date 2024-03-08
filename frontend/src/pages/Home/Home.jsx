import Gellary from "./Gellary/Gellary";
import HeroContainer from "./Hero/HeroContainer";
import PopularClasses from "./PopularClasses/PopularClasses";

const Home = () => {
  return (
    <section>
      <HeroContainer />
      <div className="max-w-screen-xl mx-auto">
        <Gellary />
        <PopularClasses />
      </div>
    </section>
  );
};

export default Home;
