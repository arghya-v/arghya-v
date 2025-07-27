import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const AboutParagraph = () => {
  return (
    <div
      className={`w-full h-full flex flex-col flex-grow justify-center rounded-md overflow-hidden shadow-lg bg-slate-800 p-7 
        transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 ${poppins.className}`}
    >
      <p className="text-lg text-slate-100 leading-relaxed">

        Hey! I am Arghya, a highschool student studying in the International Baccalaureate Program. As a tech enthusiast, I enjoy working with electronics and like to code in my free time. I help to manage websites for various non-profit organizations too! I am also a part of Vex Robotics team 31331-B. In my free time, I enjoy playing basketball, learn about science and math, video games, and more!
        
      </p>
    </div>
  );
};
