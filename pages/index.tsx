import { ProfileCard } from '../components/card';
import { AboutParagraph } from '../components/paragraph';
import { SkillsComponent } from '../components/skills';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-start items-start min-h-screen bg-slate-900 pt-10 px-10 md:space-x-6">
      {/* Profile Section */}
      <div className="flex flex-col space-y-6 md:mt-0">
        <ProfileCard />
        <AboutParagraph />
      </div>

      {/* Skills Section */}
      <div className="mt-6 md:mt-0 w-full">
        <SkillsComponent />
      </div>
    </div>
  );
}

