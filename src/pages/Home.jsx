import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from '../components/Companies'
import Categories from '../components/Categories';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Categories />
      <CTA />
    </div>
  );
};

export default Home;