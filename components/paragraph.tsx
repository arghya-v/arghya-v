import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const AboutParagraph = () => {
  return (
    <div className={`max-w-md rounded overflow-hidden shadow-lg bg-slate-800 p-6 rounded-md transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 ${poppins.className}`}>
      <p className="text-md text-slate-100">
        Hey! I am Arghya, a highschool student studying in the International Baccalaureate Program. As a tech enthusiast, I enjoy working with electronics and like to code in my free time. I help to manage websites for various non-profit organizations too! I am also a part of Vex Robotics team 31331-B. In my free time, I enjoy playing basketball, learn about science and math, video games, and more! 
      </p>
    </div>
  );
};