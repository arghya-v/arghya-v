"use client";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import {
  FaCode,
  FaRobot,
  FaTools,
  FaLaptopCode,
  FaUsers,
} from "react-icons/fa";
import React from "react";
import { IconType } from "react-icons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface WorkExperienceType {
  role: string;
  company: string;
  duration: string;
  achievements: string[];
  icon: IconType;
}

const workExperiences: WorkExperienceType[] = [
  {
    role: "Director of IT",
    company: "Doctor Interested",
    duration: "2024 - Present",
    achievements: [
      "Leading website creation",
      "Designing website through Figma",
      "Leading a team with 3 other members",
    ],
    icon: FaLaptopCode,
  },
  {
    role: "Director of IT",
    company: "Youth Venture",
    duration: "2024 - Present",
    achievements: [
      "Leading website creation",
      "Built state of the art webforms and webpages",
      "Contributed to advertisement of events",
    ],
    icon: FaCode,
  },
  {
    role: "Front end Developer and Designer",
    company: "FutureMD",
    duration: "2024 - Present",
    achievements: [
      "Developed the sponsorship proposal",
      "Implemented new pages and mechanics",
      "Optimized web performance and fixed 5+ bugs",
    ],
    icon: FaTools,
  },
  {
    role: "Programming Lead",
    company: "Vex Robotics 31331-B",
    duration: "2024 - Present",
    achievements: [
      "Designed robot in CAD",
      "Debugged PID autonomous drive",
      "Repaired subsystems like intake, clamp",
    ],
    icon: FaRobot,
  },
  {
    role: "Pit-Crew Reserve",
    company: "FIRST Robotics 6070",
    duration: "Dec 2023 - Mar 2024",
    achievements: [
      "Helped construct robot",
      "Assisted in team events like 2023 Grand Prix",
      "Gained valuable experience in teamwork & robotics",
    ],
    icon: FaUsers,
  },
];

export const WorkExperience = () => {
  return (
    <div
      className={`w-full py-12 px-6 md:px-10 bg-transparent ${poppins.className}`}
    >
      <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">
        Work Experience
      </h2>
      <div className="relative max-w-3xl mx-auto pl-6 border-l-4 border-slate-400">
        {workExperiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-6 mb-10"
            >
              <div className="bg-gradient-to-b from-[#1e1b3a] to-[#0f0c29] border border-slate-700 p-6 rounded-xl shadow-xl hover:shadow-purple-600/40 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="text-blue-400 text-xl" />
                  <h3 className="text-lg font-semibold text-white">
                    {exp.role}
                  </h3>
                </div>
                <p className="text-purple-400 text-sm mb-1">@{exp.company}</p>
                <p className="text-slate-400 text-xs mb-3">{exp.duration}</p>
                <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
