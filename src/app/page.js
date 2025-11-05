import Footer from "./components/footer";
import Herosection from "./components/herosection";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <section className=" bg-gray-50 text-gray-800 font-sans ">
  
  <Navbar/>
   <Herosection/>
   <Footer/>
    </section>
  );
}