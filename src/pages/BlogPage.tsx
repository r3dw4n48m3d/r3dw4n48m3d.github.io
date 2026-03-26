import { Link } from 'react-router-dom';
import { getAllPosts } from '../data/blogPosts';
import Navbar from '../components/Navbar';
import MatrixRain from '../components/MatrixRain';

const BlogPage = () => {
  const posts = getAllPosts();

  return (
    <div className="bg-black min-h-screen text-green-400 relative">
      <MatrixRain />
      <div className="relative z-10">
        <Navbar />
        
        <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-green-600 font-mono text-sm">~/blog $</span>
              <span className="text-cyan-400 font-mono text-sm ml-2 animate-pulse">ls -la</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-green-400">&lt;</span>
              <span className="text-cyan-400">Blog</span>
              <span className="text-green-400">/&gt;</span>
            </h1>
            <p className="text-green-600 max-w-2xl mx-auto font-mono">
              // Write-ups, tutorials, and security research findings from my journey in cybersecurity
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600">$</span>
                <input
                  type="text"
                  placeholder="grep -r 'search posts...'"
                  className="w-full bg-black/50 border border-green-900 rounded px-4 py-3 pl-8 text-green-400 placeholder-green-700 font-mono focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              <div className="flex gap-2 flex-wrap justify-center">
                {['All', 'Write-ups', 'Tutorials', 'Research', 'CTF'].map((tag) => (
                  <button
                    key={tag}
                    className={`px-4 py-2 border font-mono text-sm transition-all ${
                      tag === 'All'
                        ? 'border-cyan-500 text-cyan-400 bg-cyan-500/10'
                        : 'border-green-900 text-green-600 hover:border-green-500 hover:text-green-400'
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid gap-8">
            {posts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="bg-black/50 border border-green-900/50 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]">
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-80 h-48 md:h-auto relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-cyan-500/20 border border-cyan-500 text-cyan-400 px-3 py-1 text-xs font-mono">
                          #{String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 md:p-8">
                      <div className="flex items-center gap-4 mb-4 text-xs font-mono">
                        <span className="text-green-600">
                          <span className="text-cyan-400">@</span>{post.author}
                        </span>
                        <span className="text-green-800">|</span>
                        <span className="text-green-600">{post.date}</span>
                        <span className="text-green-800">|</span>
                        <span className="text-green-600">⏱ {post.readTime}</span>
                      </div>

                      <h2 className="text-xl md:text-2xl font-bold text-green-400 group-hover:text-cyan-400 transition-colors mb-3">
                        {post.title}
                      </h2>

                      <p className="text-green-600 mb-4 line-clamp-2 font-mono text-sm">
                        {post.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono px-2 py-1 bg-green-900/30 text-green-500 border border-green-900"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-cyan-400 font-mono text-sm group-hover:translate-x-2 transition-transform">
                        <span>cat post.md</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Back to Home */}
          <div className="mt-16 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-green-600 hover:text-cyan-400 font-mono transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              cd ~/home
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 border-t border-green-500/30 text-center">
          <p className="text-green-500/60 font-mono text-sm">
            {'</'} CyberPhantom Blog {'/>'}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BlogPage;
