import Hero from '../components/sections/Hero';
import ProductPreview from '../components/sections/ProductPreview';
import Features from '../components/sections/Features';
import Experience from '../components/sections/Experience';
import CTA from '../components/sections/CTA';
import Footer from '../components/common/Footer';

const Home = () => {
  return (
    <div className="overflow-hidden bg-black">
      <Hero />
      <ProductPreview />
      <Features />
      <Experience />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
