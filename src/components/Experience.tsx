export default function Experience() {
  const experiences = [
    {
      title: "Bug Bounty Hunter",
      company: "HackerOne",
      type: "Remote",
      period: "2023 - Present",
      points: [
        "Got 4+ Hall of Fame mentions.",
        "200+ valid vulnerability reports.",
        "No. 1 in Bangladesh VDP leaderboard 2025",
        "37th globally in HackerOne's Department of Defense program",
      ],
    },
    {
      title: "Jr Penetration Tester Intern",
      company: "Byte Capsule",
      type: "Remote",
      period: "2024 (Sep) - 2024 (Nov)",
      points: [
        "Vulnerability scans, directory enumeration, misconfiguration discovery",
        "Web/network pentests using Nmap, Burp Suite, Metasploit, Wireshark",
        "Cloud security assessments",
        "Security reports and developer remediation support",
      ],
    },
    {
      title: "SQA Tester",
      company: "Byte Capsule",
      type: "Remote",
      period: "2025",
      points: [
        "Tested web applications for security vulnerabilities",
        "Check Quality Assurance of web applications",
        "Collaborated with developers to fix security issues",
        "Conducted regression testing to ensure fixes were effective",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-green-950/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-green-500">&lt;</span>
            <span className="text-cyan-400">Experience</span>
            <span className="text-green-500">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_20px_rgba(0,255,0,0.5)]" />
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-green-500 via-cyan-500 to-green-500 opacity-50" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-black shadow-[0_0_15px_#0ff]" />

                {/* Content */}
                <div
                  className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}
                >
                  <div className="bg-black/60 border border-green-900/50 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-cyan-400 text-lg">⚡</span>
                      <h3 className="text-xl font-bold text-green-400">
                        {exp.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-green-600">{exp.company}</span>
                      <span className="text-green-800">•</span>
                      <span className="text-cyan-600 text-sm">{exp.type}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-green-900/30 rounded-full text-green-500 text-sm mb-4">
                      {exp.period}
                    </div>
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-green-500/80 text-sm"
                        >
                          <span className="text-cyan-500 mt-1">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
