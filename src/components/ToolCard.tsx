import Link from 'next/link';

interface Tool {
  id: number;
  name: string;
  category: string;
  description: string;
  logo: string;
  featured?: boolean;
}

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="card p-6 group">
      <div className="flex items-start space-x-4">
        <div className="text-4xl">{tool.logo}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {tool.name}
            </h3>
            {tool.featured && (
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
            {tool.category}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {tool.description}
          </p>
          <Link 
            href={`/tools/${tool.id}`}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
          >
            View More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}