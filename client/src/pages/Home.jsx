import { FeaturedSection, HeroSection } from "../components";
function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection
        classNames="px-6 md:px-16 lg:px-24 xl:px-44
      min-h-dvh"
      />
    </>
  );
}

export default Home;
