import { ProfileCard } from '../components/card';
import { AboutParagraph } from '../components/paragraph';

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-start min-h-screen bg-slate-900 pt-10 pl-10 space-y-6">
      {/* Profile Card */}
      <ProfileCard />

      {/* Paragraph Component */}
      <AboutParagraph/>
    </div>
  );
}