// import React from 'react'

const SoftwareTechPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-primary">Software and Technology</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            We provide custom software solutions tailored to your business needs. Our team of experts
            uses cutting-edge technology to deliver high-quality software products.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Services</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl">Custom Software Development</h3>
                <p>Tailored solutions designed specifically for your business requirements.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl">Web Application Development</h3>
                <p>Modern, responsive web applications built with the latest technologies.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl">Mobile App Development</h3>
                <p>Native and cross-platform mobile applications for iOS and Android.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl">Cloud Solutions</h3>
                <p>Scalable cloud infrastructure and migration services.</p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach</h2>
          <p>
            We follow a collaborative approach to software development, ensuring that our clients are
            involved at every stage of the process. Our agile methodology allows us to adapt quickly
            to changing requirements and deliver high-quality software on time and within budget.
          </p>
          
          <div className="mt-12 flex justify-center">
            <button className="btn btn-primary">Contact Us for a Consultation</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoftwareTechPage