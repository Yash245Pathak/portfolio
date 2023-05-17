import Design from "./components/Design";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";

export default function App() {
  return (
    <div className="bg-[#131313]">
      <Header />
      <Hero /> 
      <Design />
      <Work />
      <Footer />
    </div>
  )
}