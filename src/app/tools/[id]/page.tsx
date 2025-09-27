import { notFound } from 'next/navigation';
import Link from 'next/link';

// Mock data for tools
const tools = [
  {
    id: 1,
    name: 'ChatGPT',
    category: 'Conversational AI',
    description: 'ChatGPT is an advanced AI chatbot developed by OpenAI that uses natural language processing to engage in human-like conversations. It can assist with a wide range of tasks including writing, coding, analysis, and creative projects.',
    logo: '🤖',
    website: 'https://chat.openai.com',
    pricing: {
      free: 'Limited usage with GPT-3.5',
      paid: '$20/month for ChatGPT Plus with GPT-4 access'
    },
    pros: [
      'Highly capable natural language understanding',
      'Versatile across many domains',
      'Regular updates and improvements',
      'Large knowledge base',
      'User-friendly interface'
    ],
    cons: [
      'Can generate incorrect information',
      'Limited real-time information',
      'Usage limits on free tier',
      'May refuse certain requests',
      'Requires internet connection'
    ],
    features: [
      'Natural language conversations',
      'Code generation and debugging',
      'Creative writing assistance',
      'Data analysis and interpretation',
      'Multiple language support'
    ]
  },
  {
    id: 2,
    name: 'Claude',
    category: 'AI Assistant',
    description: 'Claude is Anthropic\'s AI assistant designed to be helpful, harmless, and honest. It excels at analysis, writing, math, coding, and creative tasks while maintaining strong safety principles.',
    logo: '🧠',
    website: 'https://claude.ai',
    pricing: {
      free: 'Limited usage with Claude 3 Haiku',
      paid: '$20/month for Claude Pro with higher limits'
    },
    pros: [
      'Strong reasoning capabilities',
      'Excellent at analysis and research',
      'Safety-focused design',
      'Good at following instructions',
      'Handles long documents well'
    ],
    cons: [
      'Smaller user base than competitors',
      'Limited availability in some regions',
      'Fewer integrations available',
      'Conservative in responses',
      'Usage limits on free tier'
    ],
    features: [
      'Document analysis',
      'Research assistance',
      'Code review and generation',
      'Creative writing',
      'Mathematical problem solving'
    ]
  }
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { id } = await params;
  const tool = tools.find(t => t.id === parseInt(id));

  if (!tool) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-blue-600 dark:hover:text-blue-400">Tools</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">{tool.name}</span>
          </div>
        </nav>

        {/* Header */}
        <div className="card p-8 mb-8">
          <div className="flex items-start space-x-6">
            <div className="text-6xl">{tool.logo}</div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {tool.name}
              </h1>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                {tool.category}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {tool.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  Try Now
                </a>
                <button className="btn-secondary">
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pros & Cons */}
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Pros & Cons</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center">
                <span className="mr-2">✅</span> Pros
              </h3>
              <ul className="space-y-2">
                {tool.pros.map((pro, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center">
                <span className="mr-2">❌</span> Cons
              </h3>
              <ul className="space-y-2">
                {tool.cons.map((con, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing & Features */}
          <div className="space-y-8">
            {/* Pricing */}
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Pricing</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Free Tier</h3>
                  <p className="text-gray-600 dark:text-gray-300">{tool.pricing.free}</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Paid Plan</h3>
                  <p className="text-gray-600 dark:text-gray-300">{tool.pricing.paid}</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
              <ul className="space-y-3">
                {tool.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">🔹</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Back to Tools */}
        <div className="mt-12 text-center">
          <Link href="/tools" className="btn-secondary">
            ← Back to Tools Directory
          </Link>
        </div>
      </div>
    </div>
  );
}