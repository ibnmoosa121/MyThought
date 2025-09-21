import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl max-w-3xl mx-auto text-base-content/70">
          Have questions or want to discuss a project? We'd love to hear from you.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered" 
                  required 
                />
              </div>
              
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered" 
                  required 
                />
              </div>
              
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="select select-bordered w-full" 
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="software">Software Development</option>
                  <option value="business">Business Consulting</option>
                  <option value="design">Design Services</option>
                </select>
              </div>
              
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered h-32" 
                  required
                ></textarea>
              </div>
              
              <div className="form-control">
                <button type="submit" className="btn btn-primary">
                  <Send size={16} className="mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
          
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <Mail className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-base-content/70">info@mythought.com</p>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
                <Phone className="text-secondary" />
              </div>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-base-content/70">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                <MapPin className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold">Office</h3>
                <p className="text-base-content/70">
                  123 Innovation Street<br />
                  Tech City, TC 12345
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-base-200 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Office Hours</h3>
            <p className="mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
      
      {/* Map Placeholder */}
      <div className="bg-base-200 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Find Us</h2>
        <p className="mb-6">Interactive map coming soon</p>
        <div className="h-64 bg-base-300 rounded-lg flex items-center justify-center">
          <MapPin size={48} className="text-base-content/30" />
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage