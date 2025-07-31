import { ProfileCard } from '../components/card';
import { AboutParagraph } from '../components/paragraph';
import { SkillsComponent } from '../components/skills';
import { WorkExperience } from '../components/work';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f0c29] via-slate-900 to-purple-900">
      <main className="flex flex-col md:flex-row justify-start items-start flex-grow pt-10 px-6 md:px-10 gap-10">
        {/* Left Column - Profile, About, Skills */}
        <div className="flex flex-col space-y-6 md:w-1/3">
          <ProfileCard />
          <AboutParagraph />
          <SkillsComponent />
        </div>

        {/* Right Column - Work Experience */}
        <div className="flex flex-col md:w-2/3">
          <WorkExperience />
        </div>
      </main>

      <Footer />
    </div>
  );
}
