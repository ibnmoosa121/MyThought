import React, { useMemo, useState } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

type ServiceOption = 'FinTech' | 'Hajj & Umrah' | 'Digital Marketing' | 'Business Consultancy'

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
  service: 'FinTech',
  message: '',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [toast, setToast] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
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
        if (!form.scope) nextErrors.scope = 'Please describe scope'
        break
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    setToast('')

    try {
      // Simulate async submission
      await new Promise(res => setTimeout(res, 1200))
      setToast('Thanks! We received your message and will get back shortly.')
      setForm(initialForm)
    } catch {
      setToast('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
      setTimeout(() => setToast(''), 4000)
    }
  }

  const ConditionalFields = useMemo(() => {
    switch (form.service) {
      case 'FinTech':
        return (
          <div className="grid md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label"><span className="label-text">Budget</span></label>
              <input name="budget" value={form.budget || ''} onChange={onChange} className={`input input-bordered ${errors.budget ? 'input-error' : ''}`} placeholder="e.g., $30k - $50k" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Compliance Needs</span></label>
              <input name="complianceNeeds" value={form.complianceNeeds || ''} onChange={onChange} className="input input-bordered" placeholder="e.g., PCI, AML" />
            </div>
          </div>
        )
      case 'Hajj & Umrah':
        return (
          <div className="grid md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label"><span className="label-text">Travel Dates</span></label>
              <input name="travelDates" value={form.travelDates || ''} onChange={onChange} className={`input input-bordered ${errors.travelDates ? 'input-error' : ''}`} placeholder="e.g., Jun 1–10, 2026" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Group Size</span></label>
              <input name="groupSize" value={form.groupSize || ''} onChange={onChange} className={`input input-bordered ${errors.groupSize ? 'input-error' : ''}`} placeholder="e.g., 25" />
            </div>
          </div>
        )
      case 'Digital Marketing':
        return (
          <div className="grid md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label"><span className="label-text">Platforms</span></label>
              <input name="platforms" value={form.platforms || ''} onChange={onChange} className={`input input-bordered ${errors.platforms ? 'input-error' : ''}`} placeholder="e.g., Google, Meta, TikTok" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Monthly Budget</span></label>
              <input name="monthlyBudget" value={form.monthlyBudget || ''} onChange={onChange} className={`input input-bordered ${errors.monthlyBudget ? 'input-error' : ''}`} placeholder="e.g., $5k - $10k" />
            </div>
          </div>
        )
      case 'Business Consultancy':
        return (
          <div className="grid md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label"><span className="label-text">Industry</span></label>
              <input name="industry" value={form.industry || ''} onChange={onChange} className={`input input-bordered ${errors.industry ? 'input-error' : ''}`} placeholder="e.g., Retail, FinTech" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Scope</span></label>
              <input name="scope" value={form.scope || ''} onChange={onChange} className={`input input-bordered ${errors.scope ? 'input-error' : ''}`} placeholder="e.g., Market entry, Ops" />
            </div>
          </div>
        )
      default:
        return null
    }
  }, [form, errors])

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="card bg-base-200/70 backdrop-blur">
            <div className="card-body">
              <h2 className="card-title text-3xl">Let’s Work Together</h2>
              <p className="opacity-80">Tell us a bit about your project and we’ll reach out.</p>

              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input name="name" value={form.name} onChange={onChange} className={`input input-bordered ${errors.name ? 'input-error' : ''}`} placeholder="Your full name" />
                    {errors.name && <span className="text-error text-sm mt-1 flex items-center gap-2"><AlertCircle size={16} /> {errors.name}</span>}
                  </div>
                  <div className="form-control">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input name="email" value={form.email} onChange={onChange} className={`input input-bordered ${errors.email ? 'input-error' : ''}`} placeholder="you@example.com" />
                    {errors.email && <span className="text-error text-sm mt-1 flex items-center gap-2"><AlertCircle size={16} /> {errors.email}</span>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label"><span className="label-text">Phone (optional)</span></label>
                    <input name="phone" value={form.phone || ''} onChange={onChange} className="input input-bordered" placeholder="+971 55 123 4567" />
                  </div>
                  <div className="form-control">
                    <label className="label"><span className="label-text">Service</span></label>
                    <select name="service" value={form.service} onChange={onChange} className="select select-bordered">
                      <option>FinTech</option>
                      <option>Hajj & Umrah</option>
                      <option>Digital Marketing</option>
                      <option>Business Consultancy</option>
                    </select>
                  </div>
                </div>

                {ConditionalFields}

                <div className="form-control">
                  <label className="label"><span className="label-text">Project Details</span></label>
                  <textarea name="message" value={form.message} onChange={onChange} className={`textarea textarea-bordered h-32 ${errors.message ? 'textarea-error' : ''}`} placeholder="What are you looking to achieve?" />
                  {errors.message && <span className="text-error text-sm mt-1 flex items-center gap-2"><AlertCircle size={16} /> {errors.message}</span>}
                </div>

                <div className="flex items-center justify-between">
                  <button type="submit" className={`btn btn-primary ${submitting ? 'animate-pulse' : ''}`} disabled={submitting}>
                    {submitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2" size={18} />
                  </button>
                  <div className="text-xs opacity-70">We respond within 1–2 business days.</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      <div className="toast toast-end z-50">
        {toast && (
          <div className="alert alert-success">
            <CheckCircle2 />
            <span>{toast}</span>
          </div>
        )}
      </div>
    </section>
  )
}

export default ContactForm