import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from '../components/Companies'
import Categories from '../components/Categories';
import CTA from '../components/CTA';
import FeaturedJobs from '../components/FeaturedJob';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Categories />
      <CTA />
      <FeaturedJobs />
    </div>
  );
};

export default Home;