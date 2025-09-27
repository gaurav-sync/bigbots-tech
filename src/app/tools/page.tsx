import ToolCard from '@/components/ToolCard';

// Mock data for tools
const tools = [
  {
    id: 1,
    name: 'ChatGPT',
    category: 'Conversational AI',
    description: 'Advanced AI chatbot for natural language conversations and content generation.',
    logo: '🤖',
    featured: true,
  },
  {
    id: 2,
    name: 'Claude',
    category: 'AI Assistant',
    description: 'Anthropic\'s AI assistant for analysis, writing, and complex reasoning tasks.',
    logo: '🧠',
    featured: true,
  },
  {
    id: 3,
    name: 'Midjourney',
    category: 'Image Generation',
    description: 'AI-powered image generation tool for creating stunning visual content.',
    logo: '🎨',
    featured: false,
  },
  {
    id: 4,
    name: 'Zapier',
    category: 'Automation',
    description: 'Connect and automate workflows between different apps and services.',
    logo: '⚡',
    featured: false,
  },
  {
    id: 5,
    name: 'GitHub Copilot',
    category: 'Code Assistant',
    description: 'AI pair programmer that helps you write code faster and with fewer errors.',
    logo: '👨‍💻',
    featured: true,
  },
  {
    id: 6,
    name: 'Notion AI',
    category: 'Productivity',
    description: 'AI-powered writing assistant integrated into the Notion workspace.',
    logo: '📝',
    featured: false,
  },
];

const categories = ['All', 'Conversational AI', 'AI Assistant', 'Image Generation', 'Automation', 'Code Assistant', 'Productivity'];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            AI Tools Directory
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover and compare the best AI tools and chatbots for your needs
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

        {/* Featured Tools */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.filter(tool => tool.featured).map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>

        {/* All Tools */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">All Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}