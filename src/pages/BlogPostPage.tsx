import { useParams, Link, useNavigate } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getPostBySlug, getAllPosts, BlogContent } from "../data/blogPosts";
import Navbar from "../components/Navbar";
import MatrixRain from "../components/MatrixRain";
import { useEffect, useState } from "react";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getPostBySlug(slug) : undefined;
  const allPosts = getAllPosts();
  const [copied, setCopied] = useState<string | null>(null);

  // Get headings for table of contents
  const headings =
    post?.content.filter(
      (item) => item.type === "heading" && item.level === 2,
    ) || [];

  // Get next and previous posts
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  useEffect(() => {
    if (!post) {
      navigate("/blog");
    }
  }, [post, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const scrollToHeading = (heading: string) => {
    const element = document.getElementById(
      heading.toLowerCase().replace(/\s+/g, "-"),
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!post) {
    return null;
  }

  const renderContent = (item: BlogContent, index: number) => {
    switch (item.type) {
      case "paragraph":
        return (
          <p
            key={index}
            className="text-green-300 leading-relaxed mb-6 font-mono"
          >
            {item.content}
          </p>
        );

      case "heading":
        const headingId = item.content?.toLowerCase().replace(/\s+/g, "-");
        if (item.level === 2) {
          return (
            <h2
              key={index}
              id={headingId}
              className="font-bold mb-4 mt-8 text-cyan-400 text-2xl"
            >
              <span className="text-green-600 mr-2">##</span>
              {item.content}
            </h2>
          );
        }
        return (
          <h3
            key={index}
            id={headingId}
            className="font-bold mb-4 mt-8 text-cyan-400 text-xl"
          >
            <span className="text-green-600 mr-2">###</span>
            {item.content}
          </h3>
        );

      case "code":
        const codeId = `code-${index}`;
        return (
          <div key={index} className="mb-6 relative group">
            <div className="flex items-center justify-between bg-gray-900 px-4 py-2 rounded-t border border-b-0 border-green-900/50">
              <span className="text-green-600 font-mono text-sm">
                {item.language}
              </span>
              <button
                onClick={() => copyCode(item.content || "", codeId)}
                className="text-green-600 hover:text-cyan-400 transition-colors text-sm font-mono flex items-center gap-1"
              >
                {copied === codeId ? (
                  <>
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
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
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>
            <SyntaxHighlighter
              language={item.language || "text"}
              style={atomDark}
              customStyle={{
                margin: 0,
                borderRadius: "0 0 4px 4px",
                border: "1px solid rgba(34, 197, 94, 0.2)",
                borderTop: "none",
                background: "#0d0d0d",
              }}
              showLineNumbers
              lineNumberStyle={{
                color: "#4a5568",
                paddingRight: "1em",
                borderRight: "1px solid #2d3748",
                marginRight: "1em",
              }}
            >
              {item.content || ""}
            </SyntaxHighlighter>
          </div>
        );

      case "list":
        return (
          <ul key={index} className="mb-6 space-y-2">
            {item.items?.map((listItem, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-green-300 font-mono"
              >
                <span className="text-cyan-400 mt-1">▹</span>
                <span>{listItem}</span>
              </li>
            ))}
          </ul>
        );

      case "blockquote":
        return (
          <blockquote
            key={index}
            className="border-l-4 border-cyan-500 pl-4 py-2 mb-6 bg-cyan-500/5 italic text-green-400 font-mono"
          >
            {item.content}
          </blockquote>
        );

      case "callout":
        const variants = {
          info: "border-blue-500 bg-blue-500/10 text-blue-400",
          warning: "border-yellow-500 bg-yellow-500/10 text-yellow-400",
          danger: "border-red-500 bg-red-500/10 text-red-400",
          success: "border-green-500 bg-green-500/10 text-green-400",
        };
        return (
          <div
            key={index}
            className={`border-l-4 px-4 py-3 mb-6 rounded-r font-mono ${
              variants[item.variant || "info"]
            }`}
          >
            {item.content}
          </div>
        );

      case "image":
        return (
          <figure key={index} className="mb-6">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full rounded border border-green-900/50"
            />
            {item.caption && (
              <figcaption className="text-center text-green-600 text-sm mt-2 font-mono">
                {item.caption}
              </figcaption>
            )}
          </figure>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-black min-h-screen text-green-400 relative">
      <MatrixRain />
      <div className="relative z-10">
        <Navbar />

        <article className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm font-mono mb-8">
              <Link
                to="/"
                className="text-green-600 hover:text-cyan-400 transition-colors"
              >
                ~
              </Link>
              <span className="text-green-800">/</span>
              <Link
                to="/blog"
                className="text-green-600 hover:text-cyan-400 transition-colors"
              >
                blog
              </Link>
              <span className="text-green-800">/</span>
              <span className="text-cyan-400">{post.slug}</span>
            </div>

            {/* Header */}
            <header className="mb-12">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-green-600 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center text-black font-bold">
                    {post.author[0]}
                  </div>
                  <div>
                    <div className="text-green-400">@{post.author}</div>
                    <div className="text-green-700 text-xs">
                      Uncertified Hacker
                    </div>
                  </div>
                </div>
                <span className="text-green-800">|</span>
                <span>
                  📅{" "}
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="text-green-800">|</span>
                <span>⏱ {post.readTime} read</span>
              </div>

              {/* Featured Image */}
              <div className="relative rounded-lg overflow-hidden border border-green-900/50 mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
            </header>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Table of Contents - Desktop */}
              <aside className="hidden lg:block lg:w-64 flex-shrink-0">
                <div className="sticky top-24">
                  <div className="bg-black/50 border border-green-900/50 rounded-lg p-4">
                    <h3 className="text-cyan-400 font-mono text-sm mb-4 flex items-center gap-2">
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
                          d="M4 6h16M4 12h16M4 18h7"
                        />
                      </svg>
                      Table of Contents
                    </h3>
                    <nav className="space-y-2">
                      {headings.map((heading, i) => (
                        <button
                          key={i}
                          onClick={() => scrollToHeading(heading.content || "")}
                          className="block w-full text-left text-sm font-mono text-green-600 hover:text-cyan-400 transition-colors truncate"
                        >
                          <span className="text-green-800 mr-1">├─</span>
                          {heading.content}
                        </button>
                      ))}
                    </nav>
                  </div>

                  {/* Share buttons */}
                  {/* <div className="mt-4 bg-black/50 border border-green-900/50 rounded-lg p-4">
                    <h3 className="text-cyan-400 font-mono text-sm mb-4">
                      Share
                    </h3>
                    <div className="flex gap-2">
                      <button className="p-2 border border-green-900 hover:border-cyan-500 hover:text-cyan-400 transition-colors rounded">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </button>
                      <button className="p-2 border border-green-900 hover:border-cyan-500 hover:text-cyan-400 transition-colors rounded">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </button>
                      <button className="p-2 border border-green-900 hover:border-cyan-500 hover:text-cyan-400 transition-colors rounded">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div> */}
                </div>
              </aside>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="prose prose-invert max-w-none">
                  {post.content.map((item, index) =>
                    renderContent(item, index),
                  )}
                </div>

                {/* Author Card */}
                <div className="mt-16 p-6 bg-black/50 border border-green-900/50 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center text-black font-bold text-2xl flex-shrink-0">
                      {post.author[0]}
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-bold text-lg">
                        @{post.author}
                      </h3>
                      <p className="text-green-600 font-mono text-sm mb-3">
                        Uncertified Hacker | Bug Bounty Hunter | A Computer
                        Addicted Bug
                      </p>
                      <p className="text-green-500 text-sm">
                        Passionate about breaking things to make them secure.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="mt-12 grid md:grid-cols-2 gap-4">
                  {prevPost && (
                    <Link
                      to={`/blog/${prevPost.slug}`}
                      className="p-4 bg-black/50 border border-green-900/50 rounded-lg hover:border-cyan-500/50 transition-all group"
                    >
                      <div className="text-green-600 text-sm font-mono mb-2">
                        ← Previous Post
                      </div>
                      <div className="text-green-400 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {prevPost.title}
                      </div>
                    </Link>
                  )}
                  {nextPost && (
                    <Link
                      to={`/blog/${nextPost.slug}`}
                      className="p-4 bg-black/50 border border-green-900/50 rounded-lg hover:border-cyan-500/50 transition-all group text-right md:col-start-2"
                    >
                      <div className="text-green-600 text-sm font-mono mb-2">
                        Next Post →
                      </div>
                      <div className="text-green-400 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {nextPost.title}
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Back to Blog */}
        <div className="text-center pb-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-all font-mono"
          >
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            cd ../blog
          </Link>
        </div>

        {/* Footer */}
        <footer className="py-8 border-t border-green-500/30 text-center">
          <p className="text-green-500/60 font-mono text-sm">
            {"</"} 0xR3DW4N Blog {"/>"}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BlogPostPage;
