import HeroCarousel from "../components/HeroCarousel";

const Home: React.FC = () => {
  return (
    <div className="p-6 sm:py-10 flex flex-wrap items-center mx-auto max-w-screen-xl">
      <HeroCarousel />
    </div>
  );
};

export default Home;
