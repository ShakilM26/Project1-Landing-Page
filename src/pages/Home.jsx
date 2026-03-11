import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from '../components/Companies'
import Categories from '../components/Categories';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Categories />
    </div>
  );
};

export default Home;