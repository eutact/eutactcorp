"use client";

import { useState } from "react";
import Image from "next/image";

const allServices = [
  {
    title: "Content Writing Tool",
    desc:
      "Generate any content based on your topic, subject and number of paragraphs.",
    icon: "/globe.svg",
  },
  {
    title: "Business Name Generator",
    desc:
      "Generate any content based on your topic, subject and number of paragraphs.",
    icon: "/next.svg",
  },
  {
    title: "Article Title Writer",
    desc:
      "Generate any content based on your topic, subject and number of paragraphs.",
    icon: "/vercel.svg",
  },
  {
    title: "Product Name Generator",
    desc:
      "Generate any content based on your topic, subject and number of paragraphs.",
    icon: "/file.svg",
  },
  {
    title: "Spreadsheet Creator",
    desc:
      "Generate any content based on your topic, subject and number of paragraphs.",
    icon: "/window.svg",
  },
  {
    title: "Interview Questions",
    desc:
      "Generate any content based on your topic, subject and number of paragraphs.",
    icon: "/globe.svg",
  },
  {
    title: "Resume Tailor AI",
    desc: "Personalize resumes to match your dream job with AI assistance.",
    icon: "/next.svg",
  },
  {
    title: "Email Assistant",
    desc: "Craft the perfect email tone and structure for any situation.",
    icon: "/file.svg",
  },
  {
    title: "Summary Generator",
    desc: "Get short, readable summaries of any text or article instantly.",
    icon: "/vercel.svg",
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState(false);
  const visibleServices = expanded ? allServices : allServices.slice(0, 6);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <section
      id="services"
      className="relative py-24 px-6 sm:px-10 md:px-20 lg:px-32 text-center text-white overflow-hidden"
    >
      {/* Radial Violet Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,_#7c3aed_0%,_transparent_70%)] opacity-20 blur-[180px] z-0" />
      <div className="absolute inset-0 bg-[#09090B] z-[-1]" />

      {/* Title */}
      <h3 className="text-3xl sm:text-4xl font-bold mb-12 relative z-10">
        What We Do?
      </h3>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto relative z-10">
        {visibleServices.map(({ title, desc, icon }, index) => (
          <div
            key={title}
            className={`relative p-6 bg-black/10 backdrop-blur-md border border-white/10 text-left rounded-md transition-opacity transform
            opacity-0 animate-fadeIn`}
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            <div className="absolute inset-0 pointer-events-none group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-violet-600/10 transition-opacity duration-300" />
            <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-white/5 border border-white/10">
              <Image src={icon} alt={title} width={24} height={24} />
            </div>
            <h4 className="text-lg font-semibold mb-2 text-white">{title}</h4>
            <p className="text-sm text-gray-400">{desc}</p>
            <button className="mt-6 inline-block px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#6366F1] to-[#A855F7] rounded-md shadow-md hover:scale-105 transition">
              Try it out!
            </button>
          </div>
        ))}
      </div>

      {/* View More / Show Less */}
      <div className="mt-12 relative z-10">
        <button
          onClick={toggleExpanded}
          className="text-sm font-medium text-white px-5 py-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition backdrop-blur-md"
        >
          {expanded ? "Show Less" : "View More"}
        </button>
      </div>
    </section>
  );
}
