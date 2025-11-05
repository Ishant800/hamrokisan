"use client";
import Link from 'next/link';

import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [islogin,setislogin] = useState(false)
  const checktoken =()=>{
    const token = localStorage.getItem("token")
    if(token) return true
    else return false

  }
  const [open, setOpen] = useState({
    specialist: false,
    doctor: false,
    diet: false,
    nutritionist: false,
    "mobile-specialist": false,
    "mobile-doctors": false,
    "mobile-diet": false,
    "mobile-nutritionist": false,
  });

  const navRef = useRef(null);

  const medicalDepartments = {
    doctor: [
      "Cardiology",
      "Dermatology",
      "Neurology",
      "Orthopedics",
      "Pediatrics",
      "Gynecology",
      "Dentistry",
      "Psychiatry",
      "Oncology",
      "Radiology",
      "Surgery",
      "ENT",
    ],
    diet: [
      "Clinical Nutrition",
      "Sports Nutrition",
      "Pediatric Nutrition",
      "Weight Management",
      "Diabetes Nutrition",
    ],
    nutritionist: [
      "Clinical Dietitian",
      "Sports Nutritionist",
      "Pediatric Nutritionist",
      "Geriatric Nutritionist",
    ],
  };

  // toggle helper for desktop + nested behavior
  const toggle = (key) => {
    setOpen((prev) => {
      const isNowOpen = !prev[key];
      const next = { ...prev };

      // toggle clicked key
      next[key] = isNowOpen;
      if (key === "specialist" && !isNowOpen) {
        next.doctor = false;
        next.diet = false;
        next.nutritionist = false;
      }
      if (["doctor", "diet", "nutritionist"].includes(key) && isNowOpen) {
        next.specialist = true;
      }

      return next;
    });
  };

  // toggle helper for mobile keys
  const toggleMobile = (key) => {
    setOpen((prev) => {
      const isNowOpen = !prev[key];
      const next = { ...prev };
      next[key] = isNowOpen;

      // keep mobile-specialist synced with its children
      if (key === "mobile-specialist" && !isNowOpen) {
        next["mobile-doctors"] = false;
        next["mobile-diet"] = false;
        next["mobile-nutritionist"] = false;
      }
      if (
        ["mobile-doctors", "mobile-diet", "mobile-nutritionist"].includes(key) &&
        isNowOpen
      ) {
        next["mobile-specialist"] = true;
      }
      return next;
    });
  };

  // close everything
  const closeAll = () => {
    setOpen({
      specialist: false,
      doctor: false,
      diet: false,
      nutritionist: false,
      "mobile-specialist": false,
      "mobile-doctors": false,
      "mobile-diet": false,
      "mobile-nutritionist": false,
    });
    setIsMobileMenuOpen(false);
  };

  // click outside & Esc handler
  useEffect(() => {


    const token = checktoken()
    if(token){
      setislogin(true)
    }
    

    function onDocClick(e) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        closeAll();
      }
    }

    function onKey(e) {
      if (e.key === "Escape") {
        closeAll();
      }
    }

    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [checktoken]);

  return (
    <>
      <nav
        ref={navRef}
        className="flex items-center sticky top-0 z-50 backdrop-blur-md bg-white shadow-md border-b border-gray-200 px-4 sm:px-6 lg:px-10 py-4"
      >
        {/* Logo */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-900"> MediCare</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex ml-10 space-x-8 font-medium">
          <a href="/" className="cursor-pointer text-gray-700 hover:text-emerald-600 transition-colors duration-200 py-2">
            Home
          </a>
          <li className="cursor-pointer text-gray-700 hover:text-emerald-600 transition-colors duration-200 py-2">
            Features
          </li>

          {/* Specialist Dropdown - click only */}
          <li className="relative">
            <button
              onClick={() => toggle("specialist")}
              aria-expanded={open.specialist}
              className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 transition-colors duration-200 py-2"
            >
              <span>Specialist</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  open.specialist ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open.specialist && (
              <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-3 transition-opacity duration-150 opacity-100 visible">
                {/* Doctors section */}
                <div className="relative">
                  <button
                    onClick={() => toggle("doctor")}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-emerald-50 transition-colors duration-200 group rounded-lg mx-2"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900">Doctors</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {open.doctor && (
                    <div className="absolute top-0 left-full ml-1 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 py-3">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <h3 className="font-semibold text-gray-900 text-sm">Medical Departments</h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {medicalDepartments.doctor.map((dept) => (
                          <a key={dept} href="#" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-200">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                            <span>{dept}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Diet */}
                <div className="relative">
                  <button
                    onClick={() => toggle("diet")}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-emerald-50 transition-colors duration-200 group rounded-lg mx-2"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900">Diet</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {open.diet && (
                    <div className="absolute top-0 left-full ml-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-3">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <h3 className="font-semibold text-gray-900 text-sm">Diet Specializations</h3>
                      </div>
                      {medicalDepartments.diet.map((d) => (
                        <a key={d} href="#" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-200">
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <span>{d}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Nutritionist */}
                <div className="relative">
                  <button
                    onClick={() => toggle("nutritionist")}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-emerald-50 transition-colors duration-200 group rounded-lg mx-2"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-200">
                        <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-900">Nutritionist</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {open.nutritionist && (
                    <div className="absolute top-0 left-full ml-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-3">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <h3 className="font-semibold text-gray-900 text-sm">Nutrition Specializations</h3>
                      </div>
                      {medicalDepartments.nutritionist.map((n) => (
                        <a key={n} href="#" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-200">
                          <div className="w-2 h-2 bg-orange-400 rounded-full" />
                          <span>{n}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </li>

          <a className="cursor-pointer text-gray-800 hover:text-emerald-600 transition-colors duration-200 py-2">Patients</a>
          <li className="cursor-pointer text-gray-800 hover:text-emerald-600 transition-colors duration-200 py-2"> Faq</li>
                 <li className="cursor-pointer text-gray-800 hover:text-emerald-600 transition-colors duration-200 py-2"> Contact</li>

        </ul>

        {/* Buttons */}
        {/* {islogin ? ():()} */}
        <div className="flex items-center ml-auto space-x-4">
          {/* <button className="hidden md:block text-emerald-700 font-medium hover:text-emerald-600 transition-colors duration-200">
           <Link href="/login">  Login</Link>
          </button> */}
          <button className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white px-5 py-2.5 rounded-full hover:from-emerald-600 hover:to-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg">
           <Link href="/signup">Get Started Free</Link> 
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-emerald-600"
            onClick={() => setIsMobileMenuOpen((s) => !s)}
            aria-expanded={isMobileMenuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (click-driven) */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-20 px-6 pb-6 animate-in slide-in-from-top-5">
          <div className="space-y-4">
            <a href="#" className="block py-3 text-lg font-medium text-gray-900 border-b border-gray-200">Home</a>
            <a href="#" className="block py-3 text-lg font-medium text-gray-900 border-b border-gray-200">Features</a>

            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleMobile("mobile-specialist")}
                className="flex items-center justify-between w-full py-3 text-lg font-medium text-gray-900"
              >
                <span>Specialist</span>
                <svg className={`w-5 h-5 transition-transform duration-200 ${open["mobile-specialist"] ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {open["mobile-specialist"] && (
                <div className="pl-4 space-y-3 py-2">
                  {/* Doctors */}
                  <div>
                    <button onClick={() => toggleMobile("mobile-doctors")} className="flex items-center justify-between w-full py-2 text-gray-700">
                      <span>Doctors</span>
                      <svg className={`w-4 h-4 transition-transform duration-200 ${open["mobile-doctors"] ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {open["mobile-doctors"] && (
                      <div className="pl-4 space-y-2 py-2">
                        {medicalDepartments.doctor.map((dept) => (
                          <a key={dept} href="#" className="block py-2 text-gray-600 text-sm hover:text-emerald-600 transition-colors duration-200">{dept}</a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Diet */}
                  <div>
                    <button onClick={() => toggleMobile("mobile-diet")} className="flex items-center justify-between w-full py-2 text-gray-700">
                      <span>Diet</span>
                      <svg className={`w-4 h-4 transition-transform duration-200 ${open["mobile-diet"] ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {open["mobile-diet"] && (
                      <div className="pl-4 space-y-2 py-2">
                        {medicalDepartments.diet.map((d) => (
                          <a key={d} href="#" className="block py-2 text-gray-600 text-sm hover:text-emerald-600 transition-colors duration-200">{d}</a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Nutritionist */}
                  <div>
                    <button onClick={() => toggleMobile("mobile-nutritionist")} className="flex items-center justify-between w-full py-2 text-gray-700">
                      <span>Nutritionist</span>
                      <svg className={`w-4 h-4 transition-transform duration-200 ${open["mobile-nutritionist"] ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {open["mobile-nutritionist"] && (
                      <div className="pl-4 space-y-2 py-2">
                        {medicalDepartments.nutritionist.map((n) => (
                          <a key={n} href="#" className="block py-2 text-gray-600 text-sm hover:text-emerald-600 transition-colors duration-200">{n}</a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="block py-3 text-lg font-medium text-gray-900 border-b border-gray-200">Patients</a>
            <a href="#" className="block py-3 text-lg font-medium text-gray-900 border-b border-gray-200">Pricing</a>

            <div className="pt-4 space-y-3">
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors duration-200">Sign Up</button>
              <button className="w-full text-emerald-700 py-3 rounded-lg font-medium border border-emerald-600 hover:bg-emerald-50 transition-colors duration-200">Login</button>
            </div>
          </div>

          {/* Close button */}
          <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
