import BlogCard from '@/components/BlogCard';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI Chatbots in Customer Service',
    excerpt: 'Explore how AI chatbots are revolutionizing customer service and what businesses need to know to stay competitive.',
    date: '2024-01-15',
    author: 'Sarah Johnson',
    category: 'AI Trends',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'ChatGPT vs Claude: A Comprehensive Comparison',
    excerpt: 'An in-depth analysis of two leading AI assistants, comparing their capabilities, pricing, and use cases.',
    date: '2024-01-10',
    author: 'Mike Chen',
    category: 'Tool Comparison',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 3,
    title: 'Building Your First Automation Workflow with Zapier',
    excerpt: 'Step-by-step guide to creating powerful automation workflows that save time and increase productivity.',
    date: '2024-01-05',
    author: 'Emily Rodriguez',
    category: 'Tutorial',
    readTime: '12 min read',
    featured: false,
  },
  {
    id: 4,
    title: '10 AI Tools Every Developer Should Know in 2024',
    excerpt: 'Discover the essential AI tools that are transforming software development and boosting developer productivity.',
    date: '2024-01-01',
    author: 'David Kim',
    category: 'Development',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'The Ethics of AI: What Users Need to Consider',
    excerpt: 'Understanding the ethical implications of AI tools and how to use them responsibly in your work and personal life.',
    date: '2023-12-28',
    author: 'Dr. Lisa Wang',
    category: 'Ethics',
    readTime: '10 min read',
    featured: false,
  },
];

const categories = ['All', 'AI Trends', 'Tool Comparison', 'Tutorial', 'Development', 'Ethics'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            AI & Automation Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights in AI and automation
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <BlogCard key={post.id} post={post} featured />
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 card p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Get the latest AI and automation insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="btn-primary">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}