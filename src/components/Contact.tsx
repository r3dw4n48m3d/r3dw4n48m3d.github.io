import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Message sent! (Demo only)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'HackTheBox',
      url: 'https://hackthebox.com',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.996 0a.857.857 0 0 0-.423.117L.573 6.136a.857.857 0 0 0-.43.742v10.244c0 .306.166.589.43.742l11 6.019a.857.857 0 0 0 .846 0l11-6.02a.857.857 0 0 0 .43-.74V6.877a.857.857 0 0 0-.43-.741L12.42.117a.857.857 0 0 0-.424-.117zm0 2.26l9.143 5.002v2.168l-4.002-2.19v4.379l-3.428-1.875V5.366L12 4.527l-1.713.937v4.28l-3.428 1.875V7.24l-4.002 2.19V7.262L12 2.26h-.004zm-5.14 6.655l3.427 1.876v8.607L6.856 17.24v-8.324zm10.284 0v8.324l-3.427 2.157v-8.607l3.427-1.874zM12 11.678l3.428 1.875v4.379l-3.427 1.875-3.428-1.875v-4.379L12 11.678z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-green-500">&lt;</span>
            <span className="text-cyan-400">Get In Touch</span>
            <span className="text-green-500">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full shadow-[0_0_20px_rgba(0,255,0,0.5)]" />
          <p className="text-green-600 mt-4">// Let's discuss your security needs</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-black/60 border border-green-900/50 rounded-lg p-6">
              <div className="bg-green-900/30 -mx-6 -mt-6 px-4 py-2 mb-6 flex items-center gap-2 border-b border-green-900/50">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-green-600 text-sm ml-2">contact.sh</span>
              </div>
              <div className="font-mono text-sm space-y-4">
                <p className="text-green-600">$ cat contact_info.txt</p>
                <div className="space-y-3 text-green-400">
                  <p>
                    <span className="text-cyan-400">📧 Email:</span> security@example.com
                  </p>
                  <p>
                    <span className="text-cyan-400">📍 Location:</span> Remote / Worldwide
                  </p>
                  <p>
                    <span className="text-cyan-400">🕐 Timezone:</span> UTC+6 (Flexible)
                  </p>
                  <p>
                    <span className="text-cyan-400">💼 Status:</span>{' '}
                    <span className="text-green-500">Available for projects</span>
                  </p>
                </div>
                <p className="text-green-600">$ _</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold text-green-400 mb-4">
                <span className="text-cyan-400">//</span> Connect With Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-black/60 border border-green-900/50 rounded-lg text-green-500 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-green-500 text-sm mb-2">
                  <span className="text-cyan-400">&gt;</span> Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/60 border border-green-900/50 rounded-lg px-4 py-3 text-green-400 placeholder-green-800 focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-green-500 text-sm mb-2">
                  <span className="text-cyan-400">&gt;</span> Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/60 border border-green-900/50 rounded-lg px-4 py-3 text-green-400 placeholder-green-800 focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-green-500 text-sm mb-2">
                <span className="text-cyan-400">&gt;</span> Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-black/60 border border-green-900/50 rounded-lg px-4 py-3 text-green-400 placeholder-green-800 focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all"
                placeholder="Security Assessment Request"
                required
              />
            </div>
            <div>
              <label className="block text-green-500 text-sm mb-2">
                <span className="text-cyan-400">&gt;</span> Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full bg-black/60 border border-green-900/50 rounded-lg px-4 py-3 text-green-400 placeholder-green-800 focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-green-600 to-cyan-600 rounded-lg text-black font-bold hover:from-green-500 hover:to-cyan-500 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
