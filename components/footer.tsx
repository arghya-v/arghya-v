import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Footer = () => {
  return (
    <footer className={`w-full bg-slate-800 text-slate-400 text-sm text-center py-4 mt-2 border-t border-slate-700 ${poppins.className}`}>
      <p>© {new Date().getFullYear()} Arghya Vyas. All rights reserved.</p>
    </footer>
  );
};

export default Footer;