
"use client"
import { useState, useEffect, useRef } from 'react';

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Cardiologist",
      location: "New York Medical Center",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      text: "MediSaaS has revolutionized how I manage my practice. The patient scheduling system saves me 10+ hours weekly, and the secure messaging keeps everything HIPAA compliant. Best investment for my clinic!",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Patient",
      location: "San Francisco, CA",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      text: "As someone with chronic conditions, MediSaaS has been a lifesaver. I can easily book appointments, access my medical records, and communicate with my doctors. The platform is incredibly user-friendly.",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Dr. Maria Rodriguez",
      role: "Pediatrician",
      location: "Miami Children's Hospital",
      rating: 5,
      image: "https://images.unsplash.com/photo-1594824947933-d0501ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      text: "The telemedicine features are exceptional. I can conduct virtual consultations seamlessly, and the prescription management system is flawless. My patients love the convenience!",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Clinic Administrator",
      location: "Chicago Health Group",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      text: "Since implementing MediSaaS, our clinic's efficiency has improved by 40%. The billing integration and patient management tools are incredibly robust. Support team is always responsive.",
      date: "2 months ago"
    },
    {
      id: 5,
      name: "Emily Parker",
      role: "Nutritionist",
      location: "Wellness Center, Austin",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      text: "The diet planning and progress tracking features are perfect for my practice. My clients can easily log their meals and I can monitor their progress in real-time. Highly recommended!",
      date: "1 week ago"
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Patient",
      location: "Seattle, WA",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      text: "The medication reminder feature has been incredibly helpful. I never miss my doses anymore, and the ability to share reports with multiple specialists is brilliant.",
      date: "3 days ago"
    }
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Auto-scroll animation
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust speed here (pixels per frame)

    const animate = () => {
      if (!isPaused && container) {
        scrollPosition += scrollSpeed;
        
        // Reset position when scrolled through one set of testimonials
        if (scrollPosition >= container.scrollWidth / 3) {
          scrollPosition = 0;
        }
        
        container.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-emerald-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Healthcare Professionals & Patients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See why thousands of medical professionals and patients choose MediSaaS for their healthcare needs
          </p>
        </div>

        {/* Auto-scrolling Testimonials Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="flex transition-transform duration-1000 ease-linear"
              style={{ width: 'fit-content' }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-80 md:w-96 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full border border-gray-100">
                    {/* Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <StarRating rating={testimonial.rating} />
                      <span className="text-sm text-gray-500">{testimonial.date}</span>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 mb-6 leading-relaxed italic text-sm md:text-base">
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-emerald-200"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Healthcare Providers</div>
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">10K+</div>
            <div className="text-gray-600 font-medium">Active Patients</div>
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support Available</div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-700 font-medium">Rated 4.9/5 by Healthcare Professionals</span>
          </div>
        </div>
      </div>
    </section>
  );
}