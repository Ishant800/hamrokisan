"use client"
import Testimonials from "./testimonials";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { BsArrowUpRight } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
export default function Herosection(){
   const sliderRef = useRef(null);
   const [hoveredCard, setHoveredCard] = useState(null);
   const [currentIndex, setCurrentIndex] = useState(0);
   const autoScrollRef = useRef(null);

   const doctors = [
  {
    name: "Dr. Hassan Qureshi",
    role: "Cardiologist",
    rating: "4.6",
    img: "/doc2.png",
  },
  {
    name: "Dr. Sarah Malik",
    role: "Cardiologist",
    rating: "4.6",
    img: "/doc1fe.png",
  },
  {
    name: "Dr. Amira Khan",
    role: "Cardiologist",
    rating: "4.6",
    img: "/doc3.png",
  },
  {
    name: "Dr. John Smith",
    role: "Cardiologist",
    rating: "4.6",
    img: "/doc2.png",
  },
  {
    name: "Dr. Amira Khan",
    role: "Cardiologist",
    rating: "4.6",
    img: "/doc3.png",
  },
];

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const scrollAmount =
      direction === "left"
        ? sliderRef.current.scrollLeft - 320
        : sliderRef.current.scrollLeft + 320;
    sliderRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!sliderRef.current) return;
    
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (sliderRef.current) {
          const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
          const newScrollLeft = sliderRef.current.scrollLeft + 320;
          
          if (newScrollLeft >= maxScroll) {
            sliderRef.current.scrollTo({
              left: 0,
              behavior: 'smooth'
            });
            setCurrentIndex(0);
          } else {
            sliderRef.current.scrollTo({
              left: newScrollLeft,
              behavior: 'smooth'
            });
            setCurrentIndex(prev => (prev + 1) % doctors.length);
          }
        }
      }, 4000); 
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };

  
    startAutoScroll();

    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener('mouseenter', stopAutoScroll);
      sliderElement.addEventListener('mouseleave', startAutoScroll);
    }

    return () => {
      stopAutoScroll();
      if (sliderElement) {
        sliderElement.removeEventListener('mouseenter', stopAutoScroll);
        sliderElement.removeEventListener('mouseleave', startAutoScroll);
      }
    };
  }, [doctors.length]);

    return <main>
        
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-gradient-to-r from-[#9cf9d1] via-[#6cffd8] to-[#eef5f2] text-slate-700 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 rounded-2xl">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-400 opacity-20"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-emerald-300 opacity-20"></div>
          </div>
          
          {/* Background Image */}
          <div className="absolute right-0 top-0 w-full md:w-1/2 h-full flex items-center justify-end opacity-20 md:opacity-100">
            <div className="relative w-full h-full max-w-2xl">
              <img
                src="/doctor.png"
                alt="Healthcare Professionals"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Left content */}
          <div className="max-w-xl space-y-6 relative z-10 text-center md:text-left">
            <h2 className="text-6xl text-black md:text-5xl font-mono leading-tight">
            Bringing Quality <br />
            
              Health Service <br/>To You
           
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
           Delivering comprehensive mental health support through our innovative platform that seamlessly connects your teams
          </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition">
                Book an appointment
              </button>
              <button className="border flex gap-2 items-center border-gray-400 text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                Get Started <FiArrowRight/>
              </button>
            </div>
          </div> 
        </section>

        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
             <span className="text-xl font-mono text-black font-semibold text-center md:text-left mb-4 md:mb-0">
               Join the fastest growing digital medical <br /> platform on Canada
             </span>
          <button className="border flex items-center gap-2 border-gray-400 text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
            Create a user account <BsArrowUpRight color="black"/>
          </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="md:w-[30%]">
              <h1 className="text-5xl py-6 font-semibold font-mono">100+</h1>
            <hr className="border-t border-gray-300"/>
            <p className="text-lg font-light text-gray-700 mt-2">Sucessful Appointment</p>
            </div>

            <div className="md:w-[30%]">
              <h1 className="text-5xl py-6 font-semibold font-mono">98%</h1>
            <hr className="border-t border-gray-300"/>
            <p className="text-lg font-light text-gray-700 mt-2">Satisfied Users</p>
            </div>

            <div className="md:w-[30%]">
              <h1 className="text-5xl py-6 font-semibold font-mono">50+</h1>
            <hr className="border-t border-gray-300"/>
            <p className="text-lg font-light text-gray-700 mt-2">Total Specialist</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white items-center">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-semibold font-mono mb-4 text-gray-900">Designed for specialists <br /> leading healthcare excellence.</h3>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Discover a platform designed for trailblazing specialists. Our resources empower leaders in healthcare innovation and excellence.
            </p>
          </div>

          <div className="relative">
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
{doctors.map((doc, i) => (
  <div
    key={i}
    className="min-w-[280px] bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
    onMouseEnter={() => setHoveredCard(i)}
    onMouseLeave={() => setHoveredCard(null)}
  >
    <div className="relative">
      {/* Image with fixed height */}
      <div className="h-75 w-full overflow-hidden">
        <img
          src={doc.img}
          alt={doc.name}
          className="w-full h-full object-fit transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      {/* Rating overlay */}
      <div className="absolute top-4 right-4 backdrop-blur-sm bg-white/80 text-gray-700 px-3 py-1.5 rounded-full flex items-center shadow-sm">
        <Star size={16} fill="#FACC15" strokeWidth={0} />
        <span className="ml-1 text-sm font-medium">{doc.rating}</span>
      </div>

      {/* Bluish blur overlay with content */}
      <div className="absolute inset-x-0 bottom-0 py-2 px-4">
        {/* Conditionally show/hide content based on hover */}
        {hoveredCard === i ? (
          // Show button on hover
          <div className="flex items-center justify-center h-20">
            <button className="w-full max-w-[200px] bg-white text-blue-600 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Book Appointment
            </button>
          </div>
        ) : (
          // Show doctor info when not hovered
          <div className="text-black ">
            <h3 className="text-md font-semibold mb-1">{doc.name}</h3>
            <p className="text-sm mb-2">{doc.role}</p>
            {doc.specialization && (
              <p className="text-xs text-blue-200 opacity-90">{doc.specialization}</p>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
))}
            </div>

            {/* Scroll Buttons */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-all duration-300 z-10"
            >
              <ChevronLeft className="text-gray-700" size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg rounded-full p-3 hover:from-sky-600 hover:to-blue-700 transition-all duration-300 z-10"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {doctors.map((_, i) => (
              <span 
                key={i} 
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'bg-sky-500' : 'bg-sky-200'
                }`}
              ></span>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Features</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how our platform revolutionizes healthcare management with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white group hover:-translate-y-2">
              <div className="text-emerald-600 text-5xl mb-5 flex justify-center group-hover:scale-110 transition-transform duration-300">🔍</div>
              <h4 className="text-xl font-semibold mb-3 text-center">Find Specialists</h4>
              <p className="text-gray-600 text-center">
                Search and connect with verified doctors instantly based on your specific needs.
              </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white group hover:-translate-y-2">
              <div className="text-emerald-600 text-5xl mb-5 flex justify-center group-hover:scale-110 transition-transform duration-300">📅</div>
              <h4 className="text-xl font-semibold mb-3 text-center">Easy Booking</h4>
              <p className="text-gray-600 text-center">
                Schedule appointments effortlessly with our intuitive booking system.
              </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white group hover:-translate-y-2">
              <div className="text-emerald-600 text-5xl mb-5 flex justify-center group-hover:scale-110 transition-transform duration-300">🔒</div>
              <h4 className="text-xl font-semibold mb-3 text-center">Secure Records</h4>
              <p className="text-gray-600 text-center">
                Your health data is encrypted and safely managed with enterprise-grade security.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 to-emerald-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Experience Healthcare Reimagined
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We integrate the best technologies to deliver a seamless healthcare experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-semibold mb-6 text-gray-900">
                  Seamless Payments & Integration
                </h4>
                <p className="text-gray-600 mb-6">
                  Secure and hassle-free payment processing with industry-leading providers.
                </p>
                <div className="flex items-center space-x-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="h-8 w-24 bg-gradient-to-r from-purple-500 to-indigo-600 rounded"></div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="h-8 w-24 bg-gradient-to-r from-blue-500 to-cyan-600 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-semibold mb-6 text-gray-900">
                  AI-Powered Doctor Matching
                </h4>
                <p className="text-gray-600 mb-6">
                  Our intelligent algorithms match you with the perfect healthcare provider based on your medical history, preferences, and location.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-gray-500">+50 specialists available</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white px-8 py-3.5 rounded-lg font-medium hover:from-emerald-600 hover:to-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Explore More Features
              </button>
            </div>
          </div>
        </section>

        <Testimonials/>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Healthcare Experience?</h3>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join thousands of patients and doctors who trust our platform for their healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-emerald-700 px-8 py-3.5 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Get Started Today
              </button>
              <button className="bg-transparent border border-white text-white px-8 py-3.5 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </section>
       
      </main>
}