"use client";

import LiquidEther from '@/components/background';
import ShinyText from '@/components/ShinyText';
import TextType from '@/components/name';
import Footer from '@/components/footer';
import Link from '@/components/link';
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
        {/* Background */}
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

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-3 text-white">
          <div className="max-w-md sm:max-w-lg w-full">
            {/* Header text */}
            <div className="mb-2 text-xl sm:text-2xl font-mono font-semibold h-12 sm:h-14 self-start text-left mt-6">
              <TextType
                text={["Hey!", "I'm Arghya.", "Welcome to my corner of the internet."]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>

            {/* About */}
            <p className="italic text-gray-300 text-xs sm:text-sm">a bit about me:</p>
            <ul className="mt-1 space-y-1 text-[11px] sm:text-xs md:text-sm leading-relaxed">
              <li>
                ◆ IB Student @{" "}
                <Link href="https://glenforest.peelschools.org/">
                  Glenforest Secondary School
                </Link>
              </li>
              <li>
                ◆ Competitor & Team Lead @{" "}
                <Link href="https://www.robotevents.com/teams/V5RC/31331B">
                  VEX Robotics (31331B)
                </Link>
              </li>
              <li>
                ◆ Web-Dev @{" "}
                <span className="space-x-1">
                  <Link href="https://drinterested.org/">Dr. Interested</Link>
                  <span>,</span>
                  <Link href="https://youthventure.vercel.app">Youth Venture</Link>
                  <span>, and</span>
                  <Link href="https://futuremd.net">FutureMD</Link>
                </span>
              </li>
            </ul>

            {/* Projects */}
            <div className="mt-4 sm:mt-5">
              <p className="italic text-gray-300 text-xs sm:text-sm">what I’ve been building:</p>
              <ul className="mt-1 space-y-1 text-[11px] sm:text-xs md:text-sm leading-relaxed">
                <li>
                  ↳ a{" "}
                  <Link href="https://github.com/arghya-v/Mini-MIDI-Magic">
                    custom MIDI controller
                  </Link>{" "}
                  using a Raspberry Pi Pico, CircuitPython, KiCad, & 3D printing
                </li>
                <li>
                  ↳ creating a{" "}
                  <Link href="https://flyte-beta.vercel.app">
                    full stack flight search engine
                  </Link>{" "}
                  (Flyte)
                </li>
                <li>
                  ↳ designed and built a{" "}
                  <Link href="https://github.com/arghya-v/PCB-Business-Card">
                    PCB
                  </Link>{" "}
                  business card
                </li>
              </ul>
            </div>

            {/* Previous */}
            <div className="mt-4 sm:mt-5">
              <p className="italic text-gray-300 text-xs sm:text-sm">previously:</p>
              <ul className="mt-1 space-y-1 text-[11px] sm:text-xs md:text-sm leading-relaxed">
                <li>
                  ↳{" "}
                  <Link href="https://github.com/advayc/31331B-VRC-High-Stakes">
                    PID algorithms for VEX Robotics
                  </Link>{" "}
                  w/ Python, top 40 in the province
                </li>
                <li>
                  ↳{" "}
                  <Link href="https://www.yourvoiceispower.ca/winner-and-judges/2025-winners">
                    Your Voice is Power
                  </Link>{" "}
                  honorable mention (top 100 participants)
                </li>
                <li>
                  ↳{" "}
                  <Link href="https://github.com/hackclub/sprig">
                    Contributed to Sprig,
                  </Link>{" "}
                  a 1k+ GitHub stars initiative by Hack Club
                </li>
              </ul>
            </div>

            {/* Button */}
            <div className="mt-5 sm:mt-6 relative group">
              <div className="relative border border-gray-700 rounded-md text-center py-1.5 sm:py-2 bg-black/50 backdrop-blur-sm transition-all duration-300 group-hover:border-gray-400">
                <a
                  href="https://cal.com/arghya-v/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-gray-300 hover:text-white text-[11px] sm:text-xs md:text-sm tracking-wide">
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

            <Footer />
            <footer className="mt-3 text-[9px] sm:text-[10px] text-gray-500 text-center">
              © 2025 Arghya Vyas
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
