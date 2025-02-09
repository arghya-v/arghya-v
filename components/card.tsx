import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Poppins } from 'next/font/google';
import dynamic from 'next/dynamic';

// Load the Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

// Dynamically import icons to avoid SSR issues
const FaLinkedin = dynamic(() => import('react-icons/fa').then((mod) => mod.FaLinkedin), { ssr: false });
const FaInstagram = dynamic(() => import('react-icons/fa').then((mod) => mod.FaInstagram), { ssr: false });
const FaGithub = dynamic(() => import('react-icons/fa').then((mod) => mod.FaGithub), { ssr: false });

// Copy Email System
export const ProfileCard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('arghyavyas775@gmail.com');
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  return (
    <div className={`max-w-md rounded overflow-hidden shadow-lg bg-slate-800 p-6 rounded-md ${poppins.className}`}>
      {/* Profile Picture */}
      <div className="flex justify-center">
        <Image
          src="/arghya.jpg"
          alt="Arghya Vyas"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>

      {/* Profile Info */}
      <div className="text-center mt-3">
        <h1 className="text-xl text-slate-100 font-bold">Arghya Vyas</h1>
        <p className="text-sm text-slate-100 mt-2">
          A passionate highschooler always looking to create something new.
        </p>
        <p className="text-sm text-slate-400 mt-6">
          Director of IT{' '}
          <span className="text-blue-500">@Youth Venture</span> and{' '}
          <span className="text-blue-500">@Dr. Interested</span>, Design and Development{' '}
          <span className="text-blue-500">@FutureMD</span>
        </p>
      </div>

      {/* Copy Email Button */}
      <div className="mt-6">
        <button
          onClick={handleCopyEmail}
          className="w-full px-6 py-3 rounded-lg text-white 
            bg-blue-900/30 backdrop-blur-md border border-blue-400/20 
            shadow-lg shadow-blue-500/10 transition-all duration-300 
            hover:bg-blue-900/50 hover:shadow-blue-500/20 
            focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:ring-offset-2 
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isCopied ? 'Copied!' : 'Copy Email'}
        </button>
      </div>

      {/* Social Media Buttons */}
      {isMounted && (
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/arghya-vyas-2a40a72b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-100 hover:text-blue-500 transition-all duration-200"
          >
            <FaLinkedin className="w-10 h-10" />
          </a>
          <a
            href="https://www.instagram.com/arghyavarfet/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-100 hover:text-pink-500 transition-all duration-200"
          >
            <FaInstagram className="w-10 h-10" />
          </a>
          <a
            href="https://github.com/arghya-v"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-100 hover:text-gray-400 transition-all duration-200"
          >
            <FaGithub className="w-10 h-10" />
          </a>
        </div>
      )}
    </div>
  );
};
