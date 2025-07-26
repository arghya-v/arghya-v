import { ProfileCard } from '../components/card';
import { AboutParagraph } from '../components/paragraph';
import { SkillsComponent } from '../components/skills';
import { WorkExperience } from '../components/work';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-start items-stretch min-h-screen bg-slate-900 pt-10 px-10 md:space-x-6">
      {/* Left Column - Profile & About */}
      <div className="flex flex-col space-y-6 md:mt-0 md:w-1/3 h-full">
        <ProfileCard />
        <div className="flex-1 flex">
          <AboutParagraph />
        </div>
      </div>

      {/* Right Column - Skills & Work Experience */}
      <div className="mt-6 md:mt-0 md:w-2/3 flex flex-col space-y-6 h-full">
        <SkillsComponent />
        <div className="flex-1 flex">
          <WorkExperience />
        </div>
      </div>
    </div>
  );
}
