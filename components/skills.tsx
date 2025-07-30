import { FaPython, FaReact } from "react-icons/fa";
import { MdOutlineBuild } from "react-icons/md";
import { GiRobotLeg } from "react-icons/gi";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const GradientIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <Icon
    className="text-6xl mb-2"
    style={{ fill: "url(#whiteGreyGradient)" }}
  />
);

export const SkillsComponent = () => {
  const skills = [
    { Icon: FaPython, label: "Python" },
    { Icon: MdOutlineBuild, label: "STEM" },
    { Icon: FaReact, label: "Web-Dev" },
    { Icon: GiRobotLeg, label: "Robotics" },
  ];

  return (
    <>
      {/* Hidden SVG gradient defs */}
      <svg
        style={{ width: 0, height: 0, position: "absolute" }}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="whiteGreyGradient" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#a0a0a0" />
          </linearGradient>
        </defs>
      </svg>

      <div
        className={`w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#1e1b3a] to-[#0f0c29] p-6
          shadow-xl transition-all duration-300 hover:shadow-purple-600/40 border border-slate-700
          flex flex-col items-center justify-center
          ${poppins.className}`}
      >
        <h1 className="text-3xl font-bold text-white mb-6">My Skills</h1>

        <div className="grid grid-cols-2 gap-6 w-full">
          {skills.map(({ Icon, label }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center
                bg-gradient-to-b from-[#2a254a] to-[#1c1833]
                rounded-xl p-6 shadow-md border border-purple-700/30
                aspect-square"
            >
              <GradientIcon Icon={Icon} />
              <p className="text-xl font-medium whitespace-nowrap text-center text-slate-300 mt-2">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsComponent;
