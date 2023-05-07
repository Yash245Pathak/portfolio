import Design from "./components/Design";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Work from "./components/Work";

export default function App() {
  return (
    <div className="bg-[#131313]">
      <Hero /> 
      <Design />
      <Work />
      <Footer />
    </div>
  )
}