import { Calendar, User, Tag } from 'lucide-react'
import { useEffect } from 'react'

const BlogPage = () => {
  useEffect(() => {
    document.title = "Blog | MyThought"
  }, [])

  // Sample blog posts - would be fetched from an API in a real application
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations and decision-making processes.',
      date: 'June 15, 2023',
      author: 'Jane Smith',
      category: 'Technology',
      image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=AI+Business'
    },
    {
      id: 2,
      title: 'Sustainable Design Practices',
      excerpt: 'How implementing eco-friendly design principles can benefit both your brand and the environment.',
      date: 'May 22, 2023',
      author: 'Mark Johnson',
      category: 'Design',
      image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Sustainable+Design'
    },
    {
      id: 3,
      title: 'Effective Business Strategies for 2023',
      excerpt: 'Key insights and approaches to help your business thrive in the current economic landscape.',
      date: 'April 10, 2023',
      author: 'Sarah Williams',
      category: 'Business',
      image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Business+Strategy'
    }
  ]

  return (
    <div className="container mx-auto px-4 pt-32 pb-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-xl max-w-3xl mx-auto text-base-content/70">
          Insights, thoughts, and resources from our team of experts.
        </p>
      </div>

      {/* Featured Post */}
      <div className="card lg:card-side bg-base-100 shadow-xl mb-16">
        <figure className="lg:w-1/2">
          <img
            src="https://placehold.co/800x600/e2e8f0/1e293b?text=Featured+Post"
            alt="Featured blog post"
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body lg:w-1/2">
          <div className="flex items-center gap-4 mb-2">
            <span className="badge badge-primary">Featured</span>
            <span className="text-sm text-base-content/70">Technology</span>
          </div>
          <h2 className="card-title text-3xl">Digital Transformation in 2023: What You Need to Know</h2>
          <p className="mb-4">
            A comprehensive guide to navigating the digital landscape and implementing
            effective transformation strategies for your organization.
          </p>
          <div className="flex items-center gap-4 text-sm text-base-content/70 mb-6">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>July 3, 2023</span>
            </div>
            <div className="flex items-center">
              <User size={16} className="mr-1" />
              <span>Alex Johnson</span>
            </div>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {blogPosts.map(post => (
          <div key={post.id} className="card bg-base-100 shadow-md">
            <figure>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <div className="flex items-center gap-2 mb-2">
                <Tag size={16} className="text-primary" />
                <span className="text-sm text-base-content/70">{post.category}</span>
              </div>
              <h2 className="card-title">{post.title}</h2>
              <p>{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-base-content/70 mt-4">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  <span>{post.author}</span>
                </div>
              </div>
              <div className="card-actions mt-4">
                <button className="btn btn-outline btn-sm">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-base-200 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Stay updated with our latest insights and news. We promise not to spam your inbox!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="input input-bordered flex-grow"
          />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default BlogPage