export default function Projects() {
  const projects = [
    {
      title: "Hacker-WriteUps",
      category: "Collection of Blog Posts",
      image:
        "https://raw.githubusercontent.com/r3dw4n48m3d/r3dw4n48m3d.github.io/refs/heads/main/src/images/achievements/hacker-write-ups.png",
      description:
        "A curated collection of detailed write-ups covering various penetration testing engagements, attack simulations, and security assessments across different industries.",
      tags: ["Write-Ups", "Article", "Medium"],
      link: "https://hacker-writeups.github.io/",
    },
    {
      title: "Hacker-WriteUps Telegram Channel",
      category: "Post Daily Write-Ups",
      image:
        "https://raw.githubusercontent.com/r3dw4n48m3d/r3dw4n48m3d.github.io/refs/heads/main/src/images/achievements/hacker-write-ups-telegram.png",
      description:
        "A Telegram channel dedicated to sharing daily penetration testing write-ups.",
      tags: ["Telegram", "Daily Updates", "Write-Ups"],
      link: "https://t.me/bugbountywrite_ups",
    },
    // {
    //   title: "Remote & Local Credential Harvesting",
    //   category: "Infrastructure",
    //   image:
    //     "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
    //   description:
    //     "Demonstrated credential harvesting techniques in Active Directory environments using Mimikatz, SAM dumps, LSASS extraction, and DCSync attacks.",
    //   tags: ["Mimikatz", "Active Directory", "Credential Theft"],
    //   link: "#",
    // },
    // {
    //   title: "Kerberos Unconstrained Delegation Abuse",
    //   category: "Infrastructure",
    //   image:
    //     "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=400&h=300&fit=crop",
    //   description:
    //     "Full exploitation of Kerberos unconstrained delegation misconfigurations to achieve domain-level compromise through TGT extraction and impersonation.",
    //   tags: ["Kerberos", "Delegation", "Domain Admin"],
    //   link: "#",
    // },
    // {
    //   title: "AdminSDHolder Persistence",
    //   category: "Infrastructure",
    //   image:
    //     "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop",
    //   description:
    //     "Demonstrated persistence through AdminSDHolder ACL abuse, maintaining backdoor access to privileged AD groups through SDProp propagation.",
    //   tags: ["AdminSDHolder", "ACL Abuse", "Persistence"],
    //   link: "#",
    // },
    // {
    //   title: "Automated Vulnerability Scanner",
    //   category: "Tool Development",
    //   image:
    //     "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop",
    //   description:
    //     "Custom Python-based vulnerability scanner integrating multiple security tools for comprehensive network and web application assessment.",
    //   tags: ["Python", "Automation", "Security Tools"],
    //   link: "#",
    // },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-green-500">&lt;</span>
            <span className="text-cyan-400">Projects</span>
            <span className="text-green-500">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_20px_rgba(0,255,0,0.5)]" />
          <p className="text-green-600 mt-4">
            Hands-on projects demonstrating offensive security skills
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-black/60 border border-green-900/50 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-xs backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-green-400 mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-green-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-green-900/30 border border-green-800/50 rounded text-green-500 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
                  target="_blank"
                >
                  View Details
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
