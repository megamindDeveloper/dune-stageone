"use client";

import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ClipLoader } from "react-spinners";

function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    enquiry: "",
  });

  const [charCount, setCharCount] = useState<number>(0);
  const [isLoding,setIsLoading]=useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true)
    console.log(formData);
    setIsLoading(false)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });

    if (e.target.name === "enquiry") {
      setCharCount(value.length);
    }
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className=" md:w-1/2 h-[400px] md:h-[800px] relative">
          <Map
            mapboxAccessToken="pk.eyJ1IjoiamFtc2hhZDEiLCJhIjoiY2xrOXNsdTR0MDBoZDNkbXcxNXc1YnYybCJ9.7mKn2TGyJPQ5p1cIIss9ow"
            initialViewState={{
              longitude: 74.8495,
              latitude: 12.8778,
              zoom: 17,
            }}
            style={{ width: "none", height: "95%", margin: "15px", borderRadius: "15px" }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            scrollZoom={false}
            doubleClickZoom={false}
            touchZoomRotate={false}
            keyboard={false}
            dragPan={false}
            dragRotate={false}
          >
            <Marker
              longitude={74.84957085771414}
              latitude={12.877806124395859}
              color="#7c3aed"
              onClick={() => window.open("https://maps.app.goo.gl/QdXWXngg1nVq8Vcy7?g_st=aw", "_blank")}
            />
          </Map>
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center md:ml-8">
          <h2 className="text-2xl md:text-[44px] font-bold text-[#1e1b4b] mb-6 md:mb-8">Ready to See your Study Dreams take Flight?</h2>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 md:py-3 border-b border-gray-300 focus:border-purple-500 focus:outline-none text-sm md:text-base"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 md:py-3 border-b border-gray-300 focus:border-purple-500 focus:outline-none text-sm md:text-base"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 md:py-3 border-b border-gray-300 focus:border-purple-500 focus:outline-none text-sm md:text-base"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="destination"
                placeholder="Preferred Study Destination"
                value={formData.destination}
                onChange={handleChange}
                className="w-full px-4 py-2 md:py-3 border-b border-gray-300 focus:border-purple-500 focus:outline-none text-sm md:text-base"
                required
              />
            </div>

            <div className="relative">
              <textarea
                name="enquiry"
                placeholder="Your Enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                className="w-full px-4 py-2 md:py-3 border-b border-gray-300 focus:border-purple-500 focus:outline-none resize-none text-sm md:text-base"
                maxLength={250}
                required
              />
              <span className="absolute bottom-2 right-2 text-xs md:text-sm text-gray-400">{charCount}/250</span>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                aria-label={isLoding ? "Submitting" : "Submit form"}
                className="w-32 cursor-pointer bg-[#9583FE] text-white py-2 md:py-3 px-6 rounded-full hover:bg-[#6d28d9] transition-colors text-sm md:text-base"
              >
               {isLoding ? <ClipLoader size={24} color="#fff" /> : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormComponent;
