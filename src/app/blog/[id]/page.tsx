import { notFound } from 'next/navigation';
import Link from 'next/link';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI Chatbots in Customer Service',
    excerpt: 'Explore how AI chatbots are revolutionizing customer service and what businesses need to know to stay competitive.',
    content: `
# The Future of AI Chatbots in Customer Service

The landscape of customer service is undergoing a dramatic transformation, driven by advances in artificial intelligence and natural language processing. AI chatbots are no longer simple rule-based systems that can only handle basic queries—they've evolved into sophisticated conversational agents capable of understanding context, emotion, and complex customer needs.

## The Current State of AI Chatbots

Today's AI chatbots leverage large language models (LLMs) and machine learning algorithms to provide more human-like interactions. Companies like OpenAI, Anthropic, and Google have developed powerful AI systems that can:

- Understand natural language with remarkable accuracy
- Maintain context throughout long conversations
- Handle multiple languages and dialects
- Integrate with existing business systems
- Learn from interactions to improve over time

## Key Benefits for Businesses

### 24/7 Availability
Unlike human agents, AI chatbots can provide round-the-clock support, ensuring customers receive assistance whenever they need it. This is particularly valuable for global businesses serving customers across different time zones.

### Cost Efficiency
While the initial investment in AI chatbot technology can be significant, the long-term cost savings are substantial. Chatbots can handle multiple conversations simultaneously, reducing the need for large customer service teams.

### Consistency
AI chatbots provide consistent responses and follow company guidelines precisely, eliminating the variability that can occur with human agents.

## Challenges and Considerations

Despite their advantages, AI chatbots still face several challenges:

- **Complex Problem Solving**: While AI has improved dramatically, chatbots may still struggle with highly complex or unique customer issues that require human creativity and empathy.
- **Emotional Intelligence**: Although AI can recognize emotional cues, it may not always respond appropriately to highly emotional or sensitive situations.
- **Integration Complexity**: Implementing AI chatbots often requires significant integration with existing systems and processes.

## The Road Ahead

The future of AI chatbots in customer service looks promising. We can expect to see:

1. **Improved Emotional Intelligence**: Future AI systems will better understand and respond to customer emotions
2. **Seamless Human Handoffs**: Better integration between AI and human agents for complex issues
3. **Personalization**: AI chatbots will provide increasingly personalized experiences based on customer history and preferences
4. **Multimodal Interactions**: Integration of voice, text, and visual elements for richer customer interactions

## Conclusion

AI chatbots are not just a trend—they're becoming an essential component of modern customer service strategies. Businesses that embrace this technology thoughtfully, while maintaining the human touch where needed, will be best positioned to deliver exceptional customer experiences in the digital age.

The key is finding the right balance between AI efficiency and human empathy, creating a customer service ecosystem that leverages the strengths of both artificial and human intelligence.
    `,
    date: '2024-01-15',
    author: 'Sarah Johnson',
    category: 'AI Trends',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'ChatGPT vs Claude: A Comprehensive Comparison',
    excerpt: 'An in-depth analysis of two leading AI assistants, comparing their capabilities, pricing, and use cases.',
    content: `
# ChatGPT vs Claude: A Comprehensive Comparison

In the rapidly evolving world of AI assistants, two names stand out: ChatGPT by OpenAI and Claude by Anthropic. Both have garnered significant attention for their impressive capabilities, but they each have unique strengths and characteristics that make them suitable for different use cases.

## Overview

### ChatGPT
Developed by OpenAI, ChatGPT has become synonymous with conversational AI. Built on the GPT (Generative Pre-trained Transformer) architecture, it has evolved through multiple versions, with GPT-4 being the latest and most capable iteration.

### Claude
Created by Anthropic, Claude is designed with a focus on being helpful, harmless, and honest. It's built using Constitutional AI techniques, which aim to make the AI system more aligned with human values and safer to use.

## Key Capabilities Comparison

### Natural Language Understanding
Both ChatGPT and Claude excel at understanding and generating human-like text, but they have different strengths:

- **ChatGPT**: Exceptional at creative writing, brainstorming, and generating diverse content styles
- **Claude**: Strong analytical capabilities and excellent at following complex instructions

### Code Generation
Both assistants can help with programming tasks:

- **ChatGPT**: Broad language support, good at explaining code concepts
- **Claude**: Excellent at code review and debugging, strong analytical approach

### Reasoning and Analysis
- **ChatGPT**: Good at step-by-step reasoning and mathematical problems
- **Claude**: Exceptional at research tasks and document analysis

## Pricing and Accessibility

### ChatGPT
- **Free Tier**: Access to GPT-3.5 with usage limitations
- **ChatGPT Plus**: $20/month for GPT-4 access and priority during peak times
- **API Access**: Pay-per-use pricing for developers

### Claude
- **Free Tier**: Limited usage with Claude 3 Haiku
- **Claude Pro**: $20/month for higher usage limits and priority access
- **API Access**: Competitive pricing for enterprise users

## Use Case Recommendations

### Choose ChatGPT if you need:
- Creative writing and content generation
- Brainstorming and ideation
- General-purpose conversational AI
- Wide range of integrations and plugins

### Choose Claude if you need:
- Research and analysis tasks
- Document review and summarization
- Safety-critical applications
- Detailed, methodical responses

## Conclusion

Both ChatGPT and Claude are excellent AI assistants, each with their own strengths. The choice between them often comes down to your specific needs, preferences, and use cases. Many users find value in having access to both, using each for their respective strengths.
    `,
    date: '2024-01-10',
    author: 'Mike Chen',
    category: 'Tool Comparison',
    readTime: '8 min read',
  }
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params;
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">{post.title}</span>
          </div>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{post.author}</p>
                <p className="text-sm">{formatDate(post.date)}</p>
              </div>
            </div>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="card p-8 mb-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 leading-relaxed">
              {post.content}
            </div>
          </div>
        </article>

        {/* Article Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/blog" className="btn-secondary">
            ← Back to Blog
          </Link>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 dark:text-gray-400">Share:</span>
            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
              Twitter
            </button>
            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
              LinkedIn
            </button>
            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
              Copy Link
            </button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
              <div key={relatedPost.id} className="card p-6">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full">
                  {relatedPost.category}
                </span>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-3 mb-2">
                  <Link href={`/blog/${relatedPost.id}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                    {relatedPost.title}
                  </Link>
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {relatedPost.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{relatedPost.author}</span>
                  <span>{relatedPost.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}