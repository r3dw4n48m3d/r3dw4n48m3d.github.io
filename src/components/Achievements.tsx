export default function Achievements() {
  const achievements = [
    {
      title: "No.1 in HackerOne Leaderboard",
      image:
        "https://raw.githubusercontent.com/r3dw4n48m3d/r3dw4n48m3d.github.io/refs/heads/main/src/images/achievements/h1-n1-bd-leaderboard.png",
      description:
        "No.1 in HackerOne Bangladesh VDP Leaderboard on 2025. Also No.1 on Q1, Q2, Q3 and Q4 of 2025.",
      tags: ["Bug", "Bug Hunting", "Bangladesh"],
    },
    {
      title: "DoD Hall of Fame",
      image:
        "https://raw.githubusercontent.com/r3dw4n48m3d/r3dw4n48m3d.github.io/refs/heads/main/src/images/achievements/h1-global-all-time-hof.png",
      description:
        "Recognized in Department of Defense Hall of Fame. Possition 37 globally",
      tags: ["Bug Bounty", "Recognition", "HOF"],
    },
    {
      title: "Jr Penetration Tester Intern",
      image:
        "https://raw.githubusercontent.com/r3dw4n48m3d/r3dw4n48m3d.github.io/refs/heads/main/src/images/achievements/internship.jpg",
      description:
        "Completed a successful internship as a Jr Penetration Tester at Byte Capsule",
      tags: ["Internship", "Real-World Experience", "Education"],
    },
    // {
    //   title: "Open Source Contributor",
    //   image:
    //     "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=300&fit=crop",
    //   description:
    //     "Active contributor to security tools and frameworks used by the pentesting community.",
    //   tags: ["Open Source", "Tools", "Community"],
    // },
    // {
    //   title: "HackTheBox Pro Hacker",
    //   image:
    //     "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
    //   description:
    //     "Achieved Pro Hacker rank on HackTheBox platform with 50+ machines pwned.",
    //   tags: ["HackTheBox", "Pro Hacker", "Labs"],
    // },
    // {
    //   title: "Security Research Publication",
    //   image:
    //     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    //   description:
    //     "Published security research papers on novel attack vectors and defense mechanisms.",
    //   tags: ["Research", "Publication", "Academic"],
    // },
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-green-950/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-green-500">&lt;</span>
            <span className="text-cyan-400">Achievements</span>
            <span className="text-green-500">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_20px_rgba(0,255,0,0.5)]" />
          <p className="text-green-600 mt-4">
            Milestones and recognitions in my security journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-black/60 border border-green-900/50 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-xs backdrop-blur-sm">
                    🏆 Achievement
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-green-400 mb-3 group-hover:text-cyan-400 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-green-600 text-sm mb-4 line-clamp-3">
                  {achievement.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {achievement.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-green-900/30 border border-green-800/50 rounded text-green-500 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
