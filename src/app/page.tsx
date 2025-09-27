import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Discover, Compare & Learn About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                The Biggest Bots & AI Tools
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your hub for chatbots, automation tools, and AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/tools" className="btn-primary text-lg px-8 py-4">
                Explore Tools
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                Join Community
              </Link>
            </div>
          </div>

          {/* Floating AI Illustration Placeholder */}
          <div className="mt-16 flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl">🤖</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose BigBots.tech?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We make AI and automation accessible for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Discover Tools
              </h3>
              <p className="text-gray-300">
                Find the perfect AI tools and chatbots for your specific needs from our curated directory.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Compare Features
              </h3>
              <p className="text-gray-300">
                Side-by-side comparisons of features, pricing, and capabilities to help you make informed decisions.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Learn & Grow
              </h3>
              <p className="text-gray-300">
                Access tutorials, guides, and best practices to maximize your AI tool usage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Explore AI Tools?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who trust BigBots.tech for their AI tool discovery
          </p>
          <Link href="/tools" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Browse Tools Directory
          </Link>
        </div>
      </section>
    </div>
  );
}