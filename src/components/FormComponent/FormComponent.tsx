"use client";

import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    enquiry: "",
  });

  const [charCount, setCharCount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
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
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden flex">
        <div className="w-1/2 h-[800px] relative">
          <Map
            mapboxAccessToken="pk.eyJ1IjoiamFtc2hhZDEiLCJhIjoiY2xrOXNsdTR0MDBoZDNkbXcxNXc1YnYybCJ9.7mKn2TGyJPQ5p1cIIss9ow"
            initialViewState={{
              longitude: 74.8495,
              latitude: 12.8778,
              zoom: 17,
            }}
            style={{ width: "100%", height: "95%", margin: "15px", borderRadius: "15px" }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            <Marker longitude={74.84957085771414} latitude={12.877806124395859} color="#7c3aed" />
          </Map>
        </div>

        <div className="w-1/2 p-8 flex flex-col justify-center ml-8">
          <h2 className="text-4xl font-bold text-[#1e1b4b] mb-8">Ready to See your Study Dreams take Flight?</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-purple-500 focus:outline-none"
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
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-purple-500 focus:outline-none"
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
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-purple-500 focus:outline-none"
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
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-purple-500 focus:outline-none"
                required
              />
            </div>

            <div className="relative">
              <input
                name="enquiry"
                placeholder="Your Enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-purple-500 focus:outline-none resize-none"
                maxLength={250}
                required
              />
              <span className="absolute bottom-2 right-2 text-sm text-gray-400">{charCount}/250</span>
            </div>

            <div className="flex justify-center">
              <button type="submit" className="w-32 bg-[#9583FE] text-white py-3 px-6 rounded-full hover:bg-[#6d28d9] transition-colors">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormComponent;
