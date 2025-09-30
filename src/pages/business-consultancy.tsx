// import React from 'react'

const BusinessConsultancyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-primary">Business Consultancy</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Our expert business consultants provide strategic advice to help your business grow and thrive
            in today's competitive market. We offer tailored solutions to address your specific challenges.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Consulting Services</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl">Strategic Planning</h3>
                <p>Develop comprehensive business strategies to achieve your long-term goals.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl">Market Analysis</h3>
                <p>In-depth analysis of market trends and competitive landscape.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl">Process Optimization</h3>
                <p>Streamline your business processes to improve efficiency and reduce costs.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl">Growth Strategy</h3>
                <p>Identify opportunities for business expansion and revenue growth.</p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us</h2>
          <p>
            With years of experience across various industries, our consultants bring a wealth of knowledge
            and practical insights to your business challenges. We focus on delivering measurable results
            and sustainable growth for our clients.
          </p>
          
          <div className="mt-12 flex justify-center">
            <button className="btn btn-primary">Schedule a Consultation</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessConsultancyPage