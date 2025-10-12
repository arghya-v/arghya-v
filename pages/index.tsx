import LiquidEther from '@/components/background'
import ShinyText from '@/components/ShinyText';
import TextType from '@/components/name';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/next';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Arghya Vyas</title>
        <meta name="description" content="Portfolio of Arghya Vyas" />
      </Head>
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={15}
          cursorSize={100}
          isViscous={false}
          viscous={20}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.6}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={4}
          takeoverDuration={0.25}
          autoResumeDelay={1000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Content layer */}
      
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 text-white">
        
        <div className="max-w-xl w-full">
          <div className="mb-4 text-3xl md:text-3xl font-mono font-semibold h-16 self-start text-left justify-center mt-8">
  <TextType 
    text={["Hey!", "I'm Arghya.", "Welcome to my corner of the internet."]}
    typingSpeed={75}
    pauseDuration={1500}
    showCursor={true}
    cursorCharacter="|"
  />  
</div>
      <p className="italic text-gray-300">a bit about me:</p>
          <ul className="mt-2 space-y-2 text-sm md:text-base">
            <li>
          ◆ IB Student @{" "}
          <Link
            href="https://glenforest.peelschools.org/"
            target="_blank"
            className="underline decoration-[#5227FF] hover:scale-105 hover:text-[#a892ff] inline-block transition-all duration-300"
          >
            Glenforest Secondary School
          </Link>
        </li>
        <li>
          ◆ Competitor & Team Lead @{" "}
          <Link
            href="https://www.robotevents.com/teams/V5RC/31331B"
            target="_blank"
            className="underline decoration-[#5227FF] hover:scale-105 hover:text-[#a892ff] inline-block transition-all duration-300"
          >
            VEX Robotics (31331B)
          </Link>
        </li>
        <li>
  ◆ Web-Dev @{" "}
  <span className="space-x-1">
    <Link
      href="https://drinterested.org/"
      target="_blank"
      className="underline decoration-[#5227FF] hover:text-[#a892ff] hover:scale-105 inline-block transition-all duration-300"
    >
      Dr. Interested
    </Link>
    <span>,</span>
    <Link
      href="https://youthventure.vercel.app"
      target="_blank"
      className="underline decoration-[#5227FF] hover:text-[#a892ff] hover:scale-105 inline-block transition-all duration-300"
    >
      Youth Venture
    </Link>
    <span>, and</span>
    <Link
      href="https://futuremd.net"
      target="_blank"
      className="underline decoration-[#5227FF] hover:text-[#a892ff] hover:scale-105 inline-block transition-all duration-300"
    >
      FutureMD
    </Link>
  </span>
</li>
      </ul>

      <div className="mt-6">
        <p className="italic text-gray-300">what I’ve been building:</p>
        <ul className="mt-2 space-y-1 text-sm md:text-base">
          <li>
            ↳ a{" "}
            <Link
              href="https://github.com/arghya-v/Mini-MIDI-Magic"
              target="_blank"
              className="underline decoration-[#FF9FFC] hover:scale-105 hover:text-[#ffcaff] inline-block transition-all duration-300"
            >
              custom MIDI controller
            </Link>{" "}
            using a Raspberry Pi Pico, CircuitPython, KiCad, & 3D printing
          </li>
          <li>
            ↳ creating a{" "}
            <Link
              href="https://flyte-beta.vercel.app"
              target="_blank"
              className="underline decoration-[#FF9FFC] hover:scale-105 hover:text-[#ffcaff] inline-block transition-all duration-300"
            >
              full stack flight search engine
            </Link>{" "}
            (Flyte)
          </li>
          <li>
            ↳ designed and built a{" "}
            <Link
              href="https://github.com/arghya-v/PCB-Business-Card"
              target="_blank"
              className="underline decoration-[#FF9FFC] hover:scale-105 hover:text-[#ffcaff] inline-block transition-all duration-300"
            >
              PCB
            </Link>{" "}
            business card
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <p className="italic text-gray-300">previously:</p>
        <ul className="mt-2 space-y-1 text-sm md:text-base">
          <li>
            ↳{" "}
            <Link
              href="https://github.com/advayc/31331B-VRC-High-Stakes"
              target="_blank"
              className="underline decoration-[#B19EEF] hover:scale-105 hover:text-[#d3c2ff] inline-block transition-all duration-300"
            >
              PID algorithms for VEX Robotics
            </Link>{" "}
            w/ Python, top 40 in the province
          </li>
          <li>
            ↳{" "}
            <Link
              href="https://www.yourvoiceispower.ca/winner-and-judges/2025-winners"
              target="_blank"
              className="underline decoration-[#B19EEF] hover:scale-105 hover:text-[#d3c2ff] inline-block transition-all duration-300"
            >
              Your Voice is Power
            </Link>{" "}
            honorable mention (top 100 participants)
          </li>
          <li>
            ↳{" "}
            <Link
              href="https://github.com/hackclub/sprig"
              target="_blank"
              className="underline decoration-[#B19EEF] hover:scale-105 hover:text-[#d3c2ff] inline-block transition-all duration-300"
            >
              Contributed to Sprig,
            </Link>{" "}
            a 1k+ GitHub stars initiative by Hack Club
          </li>
            </ul>
          </div>

          <div className="mt-8 relative group">
  {/* shiny border effect */}
  
  <div className="relative border border-gray-700 rounded-lg text-center py-3 bg-black/50 backdrop-blur-sm transition-all duration-300 group-hover:border-gray-400">
    <a
  href="https://cal.com/arghya-v/15min"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="text-gray-300 hover:text-white text-sm md:text-base tracking-wide">
    <ShinyText
      text="get in touch →"
      speed={3}
      className="text-[#FF9FFC] font-medium tracking-wide"
    />
  </button>
</a>
  </div>
  <Analytics />
</div>

        </div>
        <Footer/>
        <footer className="mt-4 text-xs text-gray-500">
          © 2025 Arghya Vyas
        </footer>
      </div>
    </div>
    </>
  )
}
