import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

interface WorkExperienceType {
  role: string;
  company: string;
  duration: string;
  achievements: string[];
}
// Using an array system to load each individual work experience
export const WorkExperience = () => {
  const workExperiences: WorkExperienceType[] = [
    {
        role: "Director of IT",
        company: "Doctor Interested",
        duration: "2024 - Present",
        achievements: [
          "Leading website creation",
          "Designing website through Figma",
          "Leading a team with 3 other members"
        ]
      },
    {
        role: "Director of IT",
        company: "Youth Venture",
        duration: "2024 - Present",
        achievements: [
          "Leading website creation",
          "Built state of the art webforms and webpages",
          "Contributed to advertisement of events"
        ]
      },
      {
        role: "Front end Developer and Designer",
        company: "FutureMD",
        duration: "2024 - Present",
        achievements: [
          "Developed the sponsorship proposal, a key document which helps the company find sponsors",
          "Implemented new pages and new mechanics into the website (ex. newsletter and event sign up form)",
          "Optimized web performance and debugged 5+ website issues"
        ]
      },
      {
        role: "Member and Programming Lead",
        company: "Vex Robotics (31331-B)",
        duration: "2024 - Present",
        achievements: [
          "Designed robot through CAD (Computer Aided Design)",
          "Leading autonomous for the team by debugging PID drive system",
          "Built and repaired subsystems (ex. mobile goal clamp, intake, etc.)"
        ]
      },
      {
        role: "Pit-Crew Reserve",
        company: "First Robotics Team 6070",
        duration: "Dec 2023 - Mar 2024",
        achievements: [
          "Contributed in Physical Construction",
          "Contributed in 6070 events such as '2023 Grand Prix'",
          "Gained teamwork experience and learned a lot about robotics"
        ]
      }
  ];

  return (
    <div className={`w-full max-w-5xl mx-auto rounded-md shadow-lg bg-slate-800 p-6 
      transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 ${poppins.className}`}>
      <h2 className="text-2xl font-bold text-slate-100 mb-6">Work Experience</h2>
      <div className="h-[70vh] min-h-[200px] max-h-[340px] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-700 hover:scrollbar-thumb-slate-400 scrollbar-thumb-rounded-md">
        <div className="space-y-6">
          {workExperiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-slate-700/20 p-4 rounded-md border border-slate-600/30"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg text-slate-100">{exp.role}</h3>
                  <p className="text-slate-300 text-sm mt-1">@{exp.company}</p>
                </div>
                <span className="text-slate-400 text-sm whitespace-nowrap pl-2">{exp.duration}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                {exp.achievements.map((achievement, idx) => (
                  <li 
                    key={idx} 
                    className="text-sm text-slate-300 leading-relaxed"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};