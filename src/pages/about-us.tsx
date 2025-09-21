import { Users, Award, BookOpen, Briefcase } from 'lucide-react'

const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl max-w-3xl mx-auto text-base-content/70">
          We're a team of passionate innovators dedicated to transforming ideas into impactful solutions.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2020, MyThought began with a simple mission: to help businesses leverage technology 
            to achieve their goals. What started as a small consulting firm has grown into a 
            comprehensive solutions provider.
          </p>
          <p>
            Today, we work with clients across industries to deliver innovative software, 
            strategic business consulting, and creative design solutions that drive growth and success.
          </p>
        </div>
        <div className="bg-base-200 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4">
              <Users className="text-primary-content" />
            </div>
            <div>
              <h3 className="font-bold">50+ Team Members</h3>
              <p className="text-sm text-base-content/70">Across 3 global offices</p>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
              <Briefcase className="text-secondary-content" />
            </div>
            <div>
              <h3 className="font-bold">200+ Projects</h3>
              <p className="text-sm text-base-content/70">Delivered successfully</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mr-4">
              <Award className="text-accent-content" />
            </div>
            <div>
              <h3 className="font-bold">15+ Industry Awards</h3>
              <p className="text-sm text-base-content/70">For excellence and innovation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <BookOpen className="text-primary" />
              </div>
              <h3 className="card-title">Innovation</h3>
              <p>We constantly explore new ideas and technologies to deliver cutting-edge solutions.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <Users className="text-secondary" />
              </div>
              <h3 className="card-title">Collaboration</h3>
              <p>We believe in the power of teamwork and partnership with our clients.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Award className="text-accent" />
              </div>
              <h3 className="card-title">Excellence</h3>
              <p>We strive for the highest quality in everything we do.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section Placeholder */}
      <div className="text-center p-12 bg-base-200 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <p className="mb-8">Meet the talented individuals behind our success.</p>
        <div className="flex justify-center">
          <button className="btn btn-primary">
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage