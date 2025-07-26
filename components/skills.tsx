import { FaPython, FaReact } from "react-icons/fa";
import { MdOutlineBuild } from "react-icons/md";
import { Poppins } from "next/font/google";
import { GiRobotLeg } from "react-icons/gi";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const SkillsComponent = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-slate-800 text-slate-100 py-6 px-6 md:px-10 rounded-md shadow-lg 
        transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 
        w-full max-w-5xl mx-auto ${poppins.className}`}
    >
      <h1 className="text-2xl md:text-xl font-bold mb-6">My Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {[
          {
            icon: (
              <FaPython className="text-yellow-400 text-6xl md:text-7xl mb-2" />
            ),
            label: "Python",
          },
          {
            icon: (
              <MdOutlineBuild className="text-white text-6xl md:text-7xl mb-2" />
            ),
            label: "STEM",
          },
          {
            icon: (
              <FaReact className="text-blue-400 text-6xl md:text-7xl mb-2" />
            ),
            label: "Web-Dev",
          },
          {
            icon: (
              <GiRobotLeg className="text-red-400 text-6xl md:text-7xl mb-2" />
            ),
            label: "Robotics",
          },
        ].map(({ icon, label }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-slate-900 rounded-xl p-3 md:p-4 shadow-md aspect-square"
          >
            {icon}
            <p className="text-xl md:text-2xl font-medium whitespace-nowrap text-center">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
