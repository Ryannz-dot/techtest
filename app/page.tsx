import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Local Web Creator</h1>
          <div className="flex gap-3">
            <Link
              href="/niche-finder"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              AI Niche Finder
            </Link>
            <Link
              href="/builder"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Website Builder
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Discover Your Niche & Build Your Website
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              All Powered by AI
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            First, discover profitable web app ideas with our AI Niche Finder. Then, create your professional website with our free, no-signup-required builder.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/niche-finder"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              🔍 Find Your Niche
            </Link>
            <Link
              href="/builder"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              🚀 Build Website
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-md border-2 border-purple-200">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">AI Niche Finder</h3>
            <p className="text-gray-600">
              Discover profitable web app ideas with instant market analysis, competition scores, and monetization strategies.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Zero Friction</h3>
            <p className="text-gray-600">
              No signup required. Start building immediately and see your website come to life in real-time.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">AI-Powered</h3>
            <p className="text-gray-600">
              Automated content generation using Google Gemini. Let AI write your content based on your business.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-3">22+ Templates</h3>
            <p className="text-gray-600">
              Industry-optimized templates for home services, professional services, retail, and more.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-3">Real-time Preview</h3>
            <p className="text-gray-600">
              Watch your website update live as you fill out the form. What you see is what you get.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">Instant Deploy</h3>
            <p className="text-gray-600">
              One-click deployment to Netlify or download as HTML files. Your choice, your way.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-3">SEO Optimized</h3>
            <p className="text-gray-600">
              Built-in SEO best practices, schema markup, and local search optimization.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Build Your Website?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of local businesses who have created their online presence with Local Web Creator
          </p>
          <Link
            href="/builder"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
          >
            Start Building Now - It's Free!
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Local Web Creator. Built for local businesses.</p>
        </footer>
      </main>
    </div>
  );
}
