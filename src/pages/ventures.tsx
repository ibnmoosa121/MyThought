import { TrendingUp, Zap, Target, ArrowRight } from 'lucide-react'

const VenturesPage = () => {
  // Sample ventures - would be dynamic in a real application
  const ventures = [
    {
      id: 1,
      name: "TechFlow",
      description: "A revolutionary project management platform for tech teams",
      status: "Seed Stage",
      industry: "SaaS",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=TechFlow"
    },
    {
      id: 2,
      name: "GreenLeaf",
      description: "Sustainable solutions for modern businesses",
      status: "Series A",
      industry: "CleanTech",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=GreenLeaf"
    },
    {
      id: 3,
      name: "HealthPulse",
      description: "AI-powered health monitoring and analytics",
      status: "Growth",
      industry: "HealthTech",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=HealthPulse"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Ventures</h1>
        <p className="text-xl max-w-3xl mx-auto text-base-content/70">
          Investing in innovative ideas and exceptional founders building the future.
        </p>
      </div>

      {/* Investment Approach */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Investment Approach</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Target className="text-primary" />
              </div>
              <h3 className="card-title">Strategic Focus</h3>
              <p>We invest in early-stage companies with disruptive technologies and scalable business models.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <Zap className="text-secondary" />
              </div>
              <h3 className="card-title">Value Creation</h3>
              <p>Beyond capital, we provide expertise, resources, and connections to accelerate growth.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <TrendingUp className="text-accent" />
              </div>
              <h3 className="card-title">Long-term Vision</h3>
              <p>We partner with founders who are building sustainable businesses with lasting impact.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Companies */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Portfolio Companies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ventures.map(venture => (
            <div key={venture.id} className="card bg-base-100 shadow-md">
              <figure>
                <img 
                  src={venture.image} 
                  alt={venture.name} 
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="card-title">{venture.name}</h3>
                  <span className="badge badge-primary">{venture.status}</span>
                </div>
                <p className="mb-2">{venture.description}</p>
                <div className="text-sm text-base-content/70 mb-4">
                  Industry: {venture.industry}
                </div>
                <div className="card-actions">
                  <button className="btn btn-outline btn-sm">
                    Learn More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Investment Criteria */}
      <div className="bg-base-200 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Investment Criteria</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">What We Look For</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-primary text-sm font-bold">✓</span>
                </div>
                <span>Innovative technology with market differentiation</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-primary text-sm font-bold">✓</span>
                </div>
                <span>Strong founding team with domain expertise</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-primary text-sm font-bold">✓</span>
                </div>
                <span>Large addressable market opportunity</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-primary text-sm font-bold">✓</span>
                </div>
                <span>Clear path to scalability and growth</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Investment Focus</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-secondary text-sm font-bold">•</span>
                </div>
                <span>Enterprise SaaS and B2B solutions</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-secondary text-sm font-bold">•</span>
                </div>
                <span>HealthTech and digital health platforms</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-secondary text-sm font-bold">•</span>
                </div>
                <span>CleanTech and sustainability innovations</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-secondary text-sm font-bold">•</span>
                </div>
                <span>AI and machine learning applications</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Have a groundbreaking idea?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          We're always looking for innovative startups to join our portfolio.
        </p>
        <button className="btn btn-primary">
          Pitch Your Startup
        </button>
      </div>
    </div>
  )
}

export default VenturesPage