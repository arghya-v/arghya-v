import Image from "next/image";
import { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const FaLinkedin = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaLinkedin),
  { ssr: false }
);
const FaGithub = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaGithub),
  { ssr: false }
);

export const ProfileCard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("arghyavyas775@gmail.com");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <div
      className={`w-full rounded-xl overflow-hidden shadow-xl bg-gradient-to-b from-[#1e1b3a] to-[#0f0c29] p-6
        transition-all duration-300 hover:shadow-purple-600/40 border border-slate-700 ${poppins.className}`}
    >
      {/* Profile Picture */}
      <div className="flex justify-center">
        <Image
          src="/arghya.jpg"
          alt="Arghya Vyas"
          width={150}
          height={150}
          className="rounded-full border-4 border-purple-500/40"
        />
      </div>

      {/* Profile Info */}
      <div className="text-center mt-4">
        <h1 className="text-2xl text-white font-bold">Arghya Vyas</h1>
        <p className="text-sm text-slate-300 mt-2">
          A passionate highschooler always looking to create something new.
        </p>
        <p className="text-sm text-slate-400 mt-4">
          Director of IT <span className="text-purple-400">@Youth Venture</span> and{" "}
          <span className="text-purple-400">@Dr. Interested</span>, Design &
          Development <span className="text-purple-400">@FutureMD</span>
        </p>
      </div>

      {/* Copy Email Button */}
      <div className="mt-6">
        <button
          onClick={handleCopyEmail}
          className="w-full px-6 py-3 rounded-lg text-white 
            bg-purple-900/40 border border-purple-500/20 
            shadow-md transition hover:bg-purple-800/60 hover:shadow-purple-500/30"
        >
          {isCopied ? "Copied!" : "Copy Email"}
        </button>
      </div>

      {/* Book a Call Button */}
      <div className="mt-4">
        <a
          href="https://cal.com/arghya-v"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center px-6 py-3 rounded-lg text-white 
            bg-indigo-900/40 border border-indigo-400/20 
            shadow-md transition hover:bg-indigo-800/60 hover:shadow-indigo-400/30"
        >
          Book a Call
        </a>
      </div>

      {/* Social Media */}
      {isMounted && (
        <div className="mt-6 flex justify-center space-x-5">
          <a
            href="https://www.linkedin.com/in/arghya-vyas-2a40a72b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/arghya-v"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-slate-400 transition"
          >
            <FaGithub className="w-8 h-8" />
          </a>
        </div>
      )}
    </div>
  );
};