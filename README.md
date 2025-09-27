# BigBots.tech - AI Tools Directory

A modern Next.js website for discovering, comparing, and learning about AI tools, chatbots, and automation solutions.

## 🚀 Features

- **Landing Page**: Hero section with compelling messaging and call-to-action
- **Tools Directory**: Comprehensive catalog of AI tools with filtering and search
- **Tool Detail Pages**: In-depth information including pros/cons, pricing, and features
- **Blog System**: Articles about AI trends, tutorials, and tool comparisons
- **About Page**: Mission, values, and community information
- **Authentication**: Sign up/Sign in pages (ready for backend integration)
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Typography**: Inter font from Google Fonts
- **Icons**: Custom SVG icons and emoji
- **Deployment Ready**: Optimized for Vercel deployment

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── auth/              # Authentication pages
│   │   ├── signin/        # Sign in page
│   │   └── signup/        # Sign up page
│   ├── blog/              # Blog pages
│   │   ├── [id]/          # Dynamic blog post pages
│   │   └── page.tsx       # Blog listing page
│   ├── tools/             # Tools directory
│   │   ├── [id]/          # Dynamic tool detail pages
│   │   └── page.tsx       # Tools listing page
│   ├── globals.css        # Global styles and Tailwind components
│   ├── layout.tsx         # Root layout with navigation
│   └── page.tsx           # Landing page
└── components/            # Reusable React components
    ├── BlogCard.tsx       # Blog post preview card
    ├── Footer.tsx         # Site footer
    ├── Navbar.tsx         # Navigation header
    ├── ThemeToggle.tsx    # Dark mode toggle
    └── ToolCard.tsx       # Tool preview card
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#3b82f6 to #2563eb)
- **Accent**: Purple gradient (#9333ea to #7c3aed)
- **Background**: Light/Dark mode adaptive
- **Text**: Semantic color scales for readability

### Components
- **Buttons**: Primary and secondary variants with hover effects
- **Cards**: Consistent shadow and border styling
- **Forms**: Accessible input fields with focus states
- **Navigation**: Responsive navbar with mobile menu

### Animations
- **Float**: Subtle floating animation for hero elements
- **Glow**: Pulsing glow effect for interactive elements
- **Transitions**: Smooth color and transform transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bigbots-tech
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages Overview

### Landing Page (`/`)
- Hero section with main value proposition
- Feature highlights with icons and descriptions
- Call-to-action sections driving to tools directory

### Tools Directory (`/tools`)
- Grid layout of AI tools and chatbots
- Category filtering (placeholder functionality)
- Featured tools section
- Tool cards with logos, descriptions, and links

### Tool Detail Pages (`/tools/[id]`)
- Comprehensive tool information
- Pros and cons analysis
- Pricing breakdown
- Key features list
- Call-to-action buttons

### Blog (`/blog`)
- Article listing with category filters
- Featured articles section
- Author information and read time
- Newsletter signup

### Blog Posts (`/blog/[id]`)
- Full article content with markdown support
- Author byline and publication date
- Social sharing buttons (placeholder)
- Related articles section

### About Page (`/about`)
- Mission and values
- What we offer
- Community call-to-action

### Authentication (`/auth/signin`, `/auth/signup`)
- Clean, accessible forms
- Social login options (placeholder)
- Form validation
- Ready for backend integration

## 🔧 Customization

### Adding New Tools
Edit the tools array in `/src/app/tools/page.tsx` and `/src/app/tools/[id]/page.tsx`

### Adding Blog Posts
Edit the blogPosts array in `/src/app/blog/page.tsx` and `/src/app/blog/[id]/page.tsx`

### Styling
- Modify `tailwind.config.ts` for design system changes
- Update `globals.css` for custom component styles
- Use Tailwind utility classes for component styling

### SEO
- Update metadata in layout files
- Add structured data for better search visibility
- Optimize images and add alt text

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Other Platforms
- Build with `npm run build`
- Deploy the `.next` folder
- Ensure Node.js runtime support

## 🔮 Future Enhancements

### Backend Integration
- User authentication system
- Tool submission and moderation
- User reviews and ratings
- Favorites and bookmarks
- Newsletter subscription

### Advanced Features
- Search functionality with filters
- Tool comparison matrix
- User-generated content
- API for tool data
- Analytics and tracking

### Content Management
- Admin dashboard for content management
- Markdown editor for blog posts
- Tool submission form
- Content moderation system

## 📄 License

This project is ready for commercial use. Update the license as needed for your specific requirements.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact the development team or create an issue in the repository.

---

Built with ❤️ using Next.js and Tailwind CSS