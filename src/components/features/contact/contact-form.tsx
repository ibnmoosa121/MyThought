import React, { useMemo, useState } from 'react'
import { Send, CheckCircle2, AlertCircle, ChevronDown, Loader2 } from 'lucide-react'
import { cn } from '../../../lib/utils'

type ServiceOption = 'FinTech' | 'Hajj & Umrah' | 'Digital Marketing' | 'Business Consultancy' | 'Software & Technology'

interface FormData {
  name: string
  email: string
  phone?: string
  service: ServiceOption
  message: string
  // Conditional fields
  budget?: string
  complianceNeeds?: string
  travelDates?: string
  groupSize?: string
  platforms?: string
  monthlyBudget?: string
  industry?: string
  scope?: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  service: 'Software & Technology',
  message: '',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [activeField, setActiveField] = useState<string | null>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validate = (): boolean => {
    const nextErrors: Record<string, string> = {}
    if (!form.name.trim()) nextErrors.name = 'Name is required'
    if (!emailRegex.test(form.email)) nextErrors.email = 'Invalid email address'
    if (!form.message || form.message.trim().length < 10) nextErrors.message = 'Message must be at least 10 characters'

    // Service-specific checks
    switch (form.service) {
      case 'FinTech':
        if (!form.budget) nextErrors.budget = 'Please specify budget'
        break
      case 'Hajj & Umrah':
        if (!form.travelDates) nextErrors.travelDates = 'Please provide travel dates'
        if (!form.groupSize) nextErrors.groupSize = 'Please provide group size'
        break
      case 'Digital Marketing':
        if (!form.platforms) nextErrors.platforms = 'Which platforms?'
        if (!form.monthlyBudget) nextErrors.monthlyBudget = 'Monthly budget required'
        break
      case 'Business Consultancy':
        if (!form.industry) nextErrors.industry = 'Please specify industry'
        break
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    
    try {
      // Simulate async submission
      await new Promise(res => setTimeout(res, 1500))
      setSuccess(true)
      setForm(initialForm)
      setTimeout(() => setSuccess(false), 5000)
    } catch {
      // Handle error
    } finally {
      setSubmitting(false)
    }
  }

  const ConditionalFields = useMemo(() => {
    switch (form.service) {
      case 'FinTech':
        return (
          <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="form-control">
              <label className="label text-sm font-medium text-base-content/70 mb-1">Estimated Budget</label>
              <input 
                name="budget" 
                value={form.budget || ''} 
                onChange={onChange}
                onFocus={() => setActiveField('budget')}
                onBlur={() => setActiveField(null)}
                className={cn(
                  "input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-all duration-300",
                  errors.budget && "input-error",
                  activeField === 'budget' && "shadow-lg shadow-primary/10 border-primary"
                )}
                placeholder="e.g., $30k - $50k" 
              />
              {errors.budget && <span className="text-error text-xs mt-1">{errors.budget}</span>}
            </div>
            <div className="form-control">
              <label className="label text-sm font-medium text-base-content/70 mb-1">Compliance Needs</label>
              <input 
                name="complianceNeeds" 
                value={form.complianceNeeds || ''} 
                onChange={onChange}
                onFocus={() => setActiveField('complianceNeeds')}
                onBlur={() => setActiveField(null)}
                className={cn(
                  "input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-all duration-300",
                  activeField === 'complianceNeeds' && "shadow-lg shadow-primary/10 border-primary"
                )}
                placeholder="e.g., PCI, AML (Optional)" 
              />
            </div>
          </div>
        )
      case 'Hajj & Umrah':
        return (
          <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="form-control">
              <label className="label text-sm font-medium text-base-content/70 mb-1">Travel Dates</label>
              <input 
                name="travelDates" 
                value={form.travelDates || ''} 
                onChange={onChange}
                onFocus={() => setActiveField('travelDates')}
                onBlur={() => setActiveField(null)}
                className={cn(
                  "input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-all duration-300",
                  errors.travelDates && "input-error",
                  activeField === 'travelDates' && "shadow-lg shadow-primary/10 border-primary"
                )}
                placeholder="e.g., Jun 1–10, 2026" 
              />
              {errors.travelDates && <span className="text-error text-xs mt-1">{errors.travelDates}</span>}
            </div>
            <div className="form-control">
              <label className="label text-sm font-medium text-base-content/70 mb-1">Group Size</label>
              <input 
                name="groupSize" 
                value={form.groupSize || ''} 
                onChange={onChange}
                onFocus={() => setActiveField('groupSize')}
                onBlur={() => setActiveField(null)}
                className={cn(
                  "input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-all duration-300",
                  errors.groupSize && "input-error",
                  activeField === 'groupSize' && "shadow-lg shadow-primary/10 border-primary"
                )}
                placeholder="e.g., 25" 
              />
              {errors.groupSize && <span className="text-error text-xs mt-1">{errors.groupSize}</span>}
            </div>
          </div>
        )
      case 'Digital Marketing':
        return (
          <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="form-control">
              <label className="label text-sm font-medium text-base-content/70 mb-1">Target Platforms</label>
              <input 
                name="platforms" 
                value={form.platforms || ''} 
                onChange={onChange}
                onFocus={() => setActiveField('platforms')}
                onBlur={() => setActiveField(null)}
                className={cn(
                  "input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-all duration-300",
                  errors.platforms && "input-error",
                  activeField === 'platforms' && "shadow-lg shadow-primary/10 border-primary"
                )}
                placeholder="e.g., Google, Meta, TikTok" 
              />
              {errors.platforms && <span className="text-error text-xs mt-1">{errors.platforms}</span>}
            </div>
            <div className="form-control">
              <label className="label text-sm font-medium text-base-content/70 mb-1">Monthly Ad Budget</label>
              <input 
                name="monthlyBudget" 
                value={form.monthlyBudget || ''} 
                onChange={onChange}
                onFocus={() => setActiveField('monthlyBudget')}
                onBlur={() => setActiveField(null)}
                className={cn(
                  "input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-all duration-300",
                  errors.monthlyBudget && "input-error",
                  activeField === 'monthlyBudget' && "shadow-lg shadow-primary/10 border-primary"
                )}
                placeholder="e.g., $5k - $10k" 
              />
              {errors.monthlyBudget && <span className="text-error text-xs mt-1">{errors.monthlyBudget}</span>}
            </div>
          </div>
        )
      case 'Business Consultancy':
        return (
          <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="form-control">
              <label className="label text-sm font-medium text-base-content/70 mb-1">Industry Sector</label>
              <input 
                name="industry" 
                value={form.industry || ''} 
                onChange={onChange}
                onFocus={() => setActiveField('industry')}
                onBlur={() => setActiveField(null)}
                className={cn(
                  "input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-all duration-300",
                  errors.industry && "input-error",
                  activeField === 'industry' && "shadow-lg shadow-primary/10 border-primary"
                )}
                placeholder="e.g., Retail, Manufacturing" 
              />
              {errors.industry && <span className="text-error text-xs mt-1">{errors.industry}</span>}
            </div>
            <div className="form-control">
              <label className="label text-sm font-medium text-base-content/70 mb-1">Project Scope</label>
              <input 
                name="scope" 
                value={form.scope || ''} 
                onChange={onChange}
                onFocus={() => setActiveField('scope')}
                onBlur={() => setActiveField(null)}
                className={cn(
                  "input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-all duration-300",
                  activeField === 'scope' && "shadow-lg shadow-primary/10 border-primary"
                )}
                placeholder="e.g., Market Entry, Operations (Optional)" 
              />
            </div>
          </div>
        )
      default:
        return null
    }
  }, [form.service, form.budget, form.complianceNeeds, form.travelDates, form.groupSize, form.platforms, form.monthlyBudget, form.industry, form.scope, errors, activeField])

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-base-100">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Context & Info */}
          <div className="space-y-8">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 tracking-wide uppercase">
                Contact Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Ready to Start Your <br />
                <span className="text-primary">Next Project?</span>
              </h2>
              <p className="text-lg text-base-content/70 leading-relaxed">
                Whether you have a specific idea or just need some guidance, our team is here to help you navigate the future of technology and business.
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-base-200 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Expert Consultation</h3>
                  <p className="text-base-content/60">Get insights from industry veterans tailored to your specific needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-base-200 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Tailored Solutions</h3>
                  <p className="text-base-content/60">We don't do one-size-fits-all. Every strategy is custom built for you.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-base-200 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Long-term Partnership</h3>
                  <p className="text-base-content/60">We are committed to your sustained growth and success.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="bg-base-100 rounded-3xl shadow-2xl shadow-base-content/5 border border-base-200 p-8 md:p-10 relative overflow-hidden group">
            {/* Form Glow Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
            
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-base-content/70 max-w-xs">
                  Thank you for reaching out. We'll be in touch with you shortly to discuss your project.
                </p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="mt-8 btn btn-ghost btn-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label text-sm font-medium text-base-content/70 mb-1">Full Name</label>
                    <input 
                      name="name" 
                      value={form.name} 
                      onChange={onChange}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      className={cn(
                        "input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-all duration-300",
                        errors.name && "input-error",
                        activeField === 'name' && "shadow-lg shadow-primary/10 border-primary"
                      )}
                      placeholder="John Doe" 
                    />
                    {errors.name && <span className="text-error text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</span>}
                  </div>
                  <div className="form-control">
                    <label className="label text-sm font-medium text-base-content/70 mb-1">Email Address</label>
                    <input 
                      name="email" 
                      type="email"
                      value={form.email} 
                      onChange={onChange}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      className={cn(
                        "input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-all duration-300",
                        errors.email && "input-error",
                        activeField === 'email' && "shadow-lg shadow-primary/10 border-primary"
                      )}
                      placeholder="john@company.com" 
                    />
                    {errors.email && <span className="text-error text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</span>}
                  </div>
                </div>

                <div className="form-control">
                  <label className="label text-sm font-medium text-base-content/70 mb-1">Service Interest</label>
                  <div className="relative">
                    <select 
                      name="service" 
                      value={form.service} 
                      onChange={onChange}
                      onFocus={() => setActiveField('service')}
                      onBlur={() => setActiveField(null)}
                      className={cn(
                        "select select-bordered w-full bg-base-200/50 focus:bg-base-100 transition-all duration-300 appearance-none",
                        activeField === 'service' && "shadow-lg shadow-primary/10 border-primary"
                      )}
                    >
                      <option value="Software & Technology">Software & Technology</option>
                      <option value="FinTech">FinTech</option>
                      <option value="Hajj & Umrah">Hajj & Umrah</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Business Consultancy">Business Consultancy</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-base-content/50 pointer-events-none" />
                  </div>
                </div>

                {ConditionalFields}

                <div className="form-control">
                  <label className="label text-sm font-medium text-base-content/70 mb-1">Project Details</label>
                  <textarea 
                    name="message" 
                    value={form.message} 
                    onChange={onChange}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    className={cn(
                      "textarea textarea-bordered w-full h-32 bg-base-200/50 focus:bg-base-100 transition-all duration-300 resize-none",
                      errors.message && "textarea-error",
                      activeField === 'message' && "shadow-lg shadow-primary/10 border-primary"
                    )}
                    placeholder="Tell us about your goals, timeline, and any specific requirements..." 
                  />
                  {errors.message && <span className="text-error text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  disabled={submitting}
                  className="btn btn-primary w-full btn-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
