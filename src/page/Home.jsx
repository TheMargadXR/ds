import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";
import Stats from "../components/Stats/Stats";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import Payment from "../components/Payment/Payment";
import About from "../components/About/About";
import { Analytics } from "@vercel/analytics/react";

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <Stats />
        <About />
        <Category />
        <Payment />
        <Footer />
        <Analytics />
      </div>
    </div>
  );
}

export default Home;
