// import React from 'react'

const DesignCreativityPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-primary">Design and Creativity</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Our creative design solutions help your brand stand out in today's competitive market.
            We combine artistic vision with strategic thinking to deliver impactful designs.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Design Services</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl">Brand Identity</h3>
                <p>Comprehensive branding solutions including logos, color schemes, and brand guidelines.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl">UI/UX Design</h3>
                <p>User-centered interface and experience design for web and mobile applications.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl">Print Design</h3>
                <p>Marketing materials, brochures, business cards, and other print collateral.</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl">Digital Marketing Assets</h3>
                <p>Social media graphics, banners, and digital advertising materials.</p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Creative Process</h2>
          <p>
            We follow a collaborative design process that begins with understanding your brand and objectives.
            Our designers work closely with you to develop concepts that align with your vision and resonate
            with your target audience.
          </p>
          
          <div className="mt-12 flex justify-center">
            <button className="btn btn-primary">Request a Design Consultation</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignCreativityPage