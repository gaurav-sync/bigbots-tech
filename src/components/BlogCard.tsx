import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className={`card p-6 group ${featured ? 'lg:col-span-1' : ''}`}>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {post.readTime}
          </span>
        </div>
        
        <h2 className={`font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3 ${
          featured ? 'text-xl md:text-2xl' : 'text-lg'
        }`}>
          <Link href={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-semibold">
              {post.author.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {post.author}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {formatDate(post.date)}
            </p>
          </div>
        </div>
        
        <Link 
          href={`/blog/${post.id}`}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}