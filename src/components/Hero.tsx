import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "A Teenage Boy Who Love To Breaking Security";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const skills = [
    "Active Directory",
    "Web Security",
    "Network Security",
    "Red Teaming",
    "JR Penetration Testing",
    "OSINT",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 border border-green-800 rounded-full mb-6">
            <span className="text-green-500 text-sm">
              <span className="animate-pulse inline-block w-2 h-2 bg-green-500 rounded-full mr-2 shadow-[0_0_10px_#0f0]" />
              Available for Security Assessments or any Freelancing Work
            </span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-green-500">&lt;</span>
          <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            Redwan Ahmed
          </span>
          <span className="text-green-500">/&gt;</span>
        </h1>

        <div className="h-8 mb-8">
          <p className="text-cyan-400 text-lg md:text-xl">
            {text}
            <span
              className={`${showCursor ? "opacity-100" : "opacity-0"} text-green-400`}
            >
              |
            </span>
          </p>
        </div>

        <p className="text-green-600 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
          <span className="text-cyan-400">&gt;</span> Helping you find
          vulnerabilities before attackers do.
        </p>

        <p className="text-green-500/80 max-w-2xl mx-auto mb-12">
          Junior Penetration Tester specializing in web and network security,
          Active Directory assessments, and realistic adversary-style attack
          simulations.
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-green-900/20 border border-green-800/50 rounded-lg text-green-400 text-sm hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Scrolling Banner */}
        <div className="overflow-hidden py-4 border-y border-green-900/50">
          <div className="animate-scroll whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="inline-block">
                <span className="text-cyan-400 mx-8">
                  ⚡ Uncertified Offensive Security
                </span>
                <span className="text-green-400 mx-8">∞ Always Learning</span>
                <span className="text-cyan-400 mx-8">🔐 Bug Hunter</span>
                <span className="text-green-400 mx-8">
                  🎯 Building Red Team Career
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
