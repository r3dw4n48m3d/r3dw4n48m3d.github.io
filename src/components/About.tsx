export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-green-500">&lt;</span>
            <span className="text-cyan-400">About Me</span>
            <span className="text-green-500">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_20px_rgba(0,255,0,0.5)]" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Terminal Card */}
          <div className="bg-black/60 border border-green-900/50 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,0,0.1)]">
            <div className="bg-green-900/30 px-4 py-2 flex items-center gap-2 border-b border-green-900/50">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-green-600 text-sm ml-2">about.sh</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <p className="text-green-600 mb-2">$ cat about.txt</p>
              <div className="text-green-400 space-y-3">
                <p>
                  <span className="text-cyan-400">Name:</span> Redwan Ahmed
                </p>
                <p>
                  <span className="text-cyan-400">Role:</span> Uncertified
                  Hacker
                </p>
                <p>
                  <span className="text-cyan-400">Focus:</span> Offensive
                  Security
                </p>
                <p>
                  <span className="text-cyan-400">Status:</span>{" "}
                  <span className="text-green-500">● Active</span>
                </p>
              </div>
              <p className="text-green-600 mt-4">$ _</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <p className="text-green-400 leading-relaxed">
              I'm a{" "}
              <span className="text-cyan-400 font-semibold">
                Junior Offensive Security Professional
              </span>{" "}
              with a strong passion for penetration testing and adversary
              simulation. I focus on manual enumeration, Active Directory attack
              chains, and web/network exploitation to identify and demonstrate
              real-world security weaknesses.
            </p>
            <p className="text-green-500/80 leading-relaxed">
              My approach emphasizes{" "}
              <span className="text-cyan-400">realistic threat modeling</span> —
              from initial reconnaissance through lateral movement to domain
              compromise — mirroring the tactics used by real-world adversaries.
            </p>
            {/* <p className="text-green-500/80 leading-relaxed">
              I hold certifications including{" "}
              <span className="text-cyan-400">CRTP</span>,{" "}
              <span className="text-cyan-400">eJPT</span>,
              <span className="text-cyan-400"> CRTA</span>, and{" "}
              <span className="text-cyan-400">CNSP</span>.
            </p> */}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: "4+", label: "Hall Of Fame" },
                { value: "5+", label: "Certifications" },
                { value: "2+", label: "Projects" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 border border-green-900/50 rounded-lg hover:border-cyan-500 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-cyan-400">
                    {stat.value}
                  </div>
                  <div className="text-green-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
