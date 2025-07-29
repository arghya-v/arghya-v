import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const AboutParagraph = () => {
  return (
    <div
      className={`w-full h-full flex flex-col flex-grow justify-center rounded-xl overflow-hidden
        bg-gradient-to-b from-[#1e1b3a] to-[#0f0c29] p-7
        shadow-xl transition-all duration-300 hover:shadow-purple-600/40
        border border-slate-700
        ${poppins.className}`}
    >
      <p className="text-lg text-slate-100 leading-relaxed">
        Hey! I am Arghya, a highschool student studying in the International Baccalaureate Program. As a
        tech enthusiast, I enjoy working with electronics and like to code in my free time. I help to
        manage websites for various non-profit organizations too! I am also a part of Vex Robotics team
        31331-B. In my free time, I enjoy playing basketball, learn about science and math, video games,
        and more!
      </p>
    </div>
  );
};
