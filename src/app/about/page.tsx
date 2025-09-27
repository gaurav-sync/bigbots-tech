export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About BigBots.tech
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Making AI and automation accessible for everyone
          </p>
        </div>

        {/* Mission Section */}
        <div className="card p-8 mb-12">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎯</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              At BigBots.tech, we believe that artificial intelligence and automation should be accessible to everyone, 
              not just tech experts. Our mission is to bridge the gap between cutting-edge AI technology and everyday users 
              by providing comprehensive, unbiased information about the best AI tools and chatbots available.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              We're passionate about helping individuals and businesses discover, compare, and learn about AI solutions 
              that can enhance productivity, creativity, and problem-solving capabilities. Whether you're a student, 
              professional, entrepreneur, or simply curious about AI, we're here to guide you on your journey.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Transparency</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We provide honest, unbiased reviews and comparisons, highlighting both strengths and limitations of AI tools.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in empowering users with knowledge, providing tutorials and guides to maximize AI tool potential.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We foster a community where users can share experiences, tips, and learn from each other.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="card p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="text-blue-500 mr-3">📊</span>
                Comprehensive Tool Directory
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Curated collection of the best AI tools and chatbots, organized by category and use case, 
                with detailed information about features, pricing, and capabilities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="text-purple-500 mr-3">⚖️</span>
                In-Depth Comparisons
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Side-by-side comparisons of popular AI tools, helping you make informed decisions 
                based on your specific needs and budget.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="text-green-500 mr-3">📚</span>
                Educational Content
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Tutorials, guides, and best practices to help you get the most out of AI tools, 
                from beginner basics to advanced techniques.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="text-red-500 mr-3">📰</span>
                Latest AI News & Trends
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Stay updated with the rapidly evolving AI landscape through our blog, 
                featuring industry insights, tool updates, and emerging trends.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center card p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Be part of a growing community of AI enthusiasts and professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Subscribe to Newsletter
            </button>
            <button className="btn-secondary">
              Follow on Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}