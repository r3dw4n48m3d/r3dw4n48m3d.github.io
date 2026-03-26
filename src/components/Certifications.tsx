export default function Certifications() {
  const certifications = [
    {
      name: 'Certified Red Team Professional (CRTP)',
      issuer: 'Altered Security',
      date: '2024',
      verifyUrl: 'https://www.credential.net/example-crtp',
      icon: '🔴',
    },
    {
      name: 'eLearnSecurity Junior Penetration Tester (eJPT)',
      issuer: 'INE Security',
      date: '2024',
      verifyUrl: 'https://certs.ine.com/example-ejpt',
      icon: '🎯',
    },
    {
      name: 'Certified Red Team Analyst (CRTA)',
      issuer: 'CyberWarFare Labs',
      date: '2024',
      verifyUrl: 'https://cyberwarfare.live/example-crta',
      icon: '⚔️',
    },
    {
      name: 'Certified Network Security Practitioner (CNSP)',
      issuer: 'The SecOps Group',
      date: '2023',
      verifyUrl: 'https://secops.group/example-cnsp',
      icon: '🛡️',
    },
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      date: '2023',
      verifyUrl: 'https://www.credly.com/example-secplus',
      icon: '🔐',
    },
    {
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      date: '2023',
      verifyUrl: 'https://aspen.eccouncil.org/example-ceh',
      icon: '💀',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-green-500">&lt;</span>
            <span className="text-cyan-400">Certifications</span>
            <span className="text-green-500">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_20px_rgba(0,255,0,0.5)]" />
          <p className="text-green-600 mt-4">// Verified credentials demonstrating expertise</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-black/60 border border-green-900/50 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-bold text-green-400 mb-2 group-hover:text-cyan-400 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-green-600 text-sm mb-1">{cert.issuer}</p>
                <p className="text-green-800 text-xs mb-4">Issued: {cert.date}</p>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/50 rounded-lg text-cyan-400 text-sm hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Verify Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
