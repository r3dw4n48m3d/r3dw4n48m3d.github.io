import { Link } from 'react-router-dom';
import { getAllPosts } from '../data/blogPosts';

export default function Blog() {
  const speakingEvents = [
    {
      title: 'Cybersecurity Essentials & Career Guidelines',
      date: 'February 15, 2026',
      type: 'Live Webinar',
      points: [
        'Cybersecurity basics and common attack vectors',
        'Career paths in offensive & defensive security',
        'Portfolio building and certification guidance',
      ],
    },
    {
      title: 'Active Directory Attack Techniques',
      date: 'January 20, 2026',
      type: 'Conference Talk',
      points: [
        'Understanding AD architecture from an attacker perspective',
        'Common misconfigurations that lead to compromise',
        'Real-world attack demonstrations',
      ],
    },
  ];

  const blogPosts = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className="py-20 px-4 bg-green-950/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-green-500">&lt;</span>
            <span className="text-cyan-400">Community & Content</span>
            <span className="text-green-500">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_20px_rgba(0,255,0,0.5)]" />
          <p className="text-green-600 mt-4">// Sharing knowledge and security insights</p>
        </div>

        {/* Speaking Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-green-400 mb-8">
            <span className="text-cyan-400">//</span> Speaking
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {speakingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-black/60 border border-green-900/50 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-600 to-cyan-600 rounded flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-2 py-0.5 text-xs font-mono bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded mb-2">
                      {event.type}
                    </span>
                    <h4 className="text-lg font-bold text-green-400 mb-1">{event.title}</h4>
                    <p className="text-green-600 text-sm mb-3">📅 {event.date}</p>
                    <ul className="space-y-1">
                      {event.points.map((point, i) => (
                        <li key={i} className="text-sm text-green-500 flex items-start gap-2">
                          <span className="text-cyan-400">▹</span>
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

        {/* Blog Posts */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-green-400">
              <span className="text-cyan-400">//</span> Latest Write-ups
            </h3>
            <Link
              to="/blog"
              className="text-cyan-400 hover:text-cyan-300 font-mono text-sm flex items-center gap-2 transition-colors"
            >
              View All Posts
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-black/60 border border-green-900/50 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]"
              >
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-2 bg-green-900/20 border-b border-green-900/50">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <span className="text-green-600 text-xs font-mono ml-2">post_{String(index + 1).padStart(2, '0')}.md</span>
                </div>

                {/* Image */}
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-4 text-xs text-green-600 mb-2 font-mono">
                    <span>📅 {post.date}</span>
                    <span>⏱ {post.readTime}</span>
                  </div>
                  <h4 className="text-green-400 font-bold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-green-600 text-sm mb-3 line-clamp-2">{post.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 bg-green-900/30 text-green-500 border border-green-900"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-4 py-3 border-t border-green-900/50 flex items-center justify-between">
                  <span className="text-green-700 font-mono text-xs">
                    <span className="text-cyan-400">$</span> cat post.md
                  </span>
                  <svg
                    className="w-4 h-4 text-green-700 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-green-600 to-cyan-600 text-black font-bold rounded hover:from-green-500 hover:to-cyan-500 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Browse All Write-ups
          </Link>
        </div>
      </div>
    </section>
  );
}
