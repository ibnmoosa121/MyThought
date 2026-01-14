import React, { useState, useCallback } from 'react'
import { Send, CheckCircle2, ChevronDown, Loader2, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react'
import { cn } from '../../../lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

type ServiceOption = 'Software & Technology' | 'Consultancy' | 'Talent & Staffing' | 'Design & Creative' | 'Ventures' | 'FinTech'

interface FormData {
    name: string
    email: string
    phone?: string
    service: ServiceOption
    message: string
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

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
        setErrors(prev => {
            if (prev[name]) {
                const newErrors = { ...prev }
                delete newErrors[name]
                return newErrors
            }
            return prev
        })
    }, [])

    const validate = (): boolean => {
        const nextErrors: Record<string, string> = {}
        if (!form.name.trim()) nextErrors.name = 'Please provide your name'
        if (!emailRegex.test(form.email)) nextErrors.email = 'Please provide a valid email'
        if (!form.message || form.message.trim().length < 10) nextErrors.message = 'Tell us a bit more (min 10 chars)'

        setErrors(nextErrors)
        return Object.keys(nextErrors).length === 0
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return
        setSubmitting(true)

        try {
            await new Promise(res => setTimeout(res, 2000))
            setSuccess(true)
            setForm(initialForm)
            setTimeout(() => setSuccess(false), 5000)
        } catch {
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-24 md:py-44 relative bg-black overflow-hidden font-sans">
            {/* Fluid Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-secondary/5 rounded-full blur-[100px]" />
                {/* Floating particles/shapes */}
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rounded-full opacity-20"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Content & Connection */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-primary font-bold tracking-[.3em] uppercase text-sm"
                            >
                                Let's Build Together
                            </motion.span>
                            <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                                Bring your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Vision</span> to Life.
                            </h2>
                            <p className="text-xl text-white/50 max-w-lg leading-relaxed">
                                We're not just a studio; we're your creative partners. Share your idea, and let's craft something exceptional.
                            </p>
                        </div>

                        {/* Contact Cards - Unique interaction */}
                        <div className="grid gap-4">
                            {[
                                { icon: Mail, label: "Email Us", val: "hello@mythought.com", href: "mailto:hello@mythought.com" },
                                { icon: Phone, label: "Call Us", val: "+1 (555) 000-1234", href: "tel:+15550001234" },
                                { icon: MapPin, label: "Visit Us", val: "Jeddah, Saudi Arabia", href: "#" }
                            ].map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.href}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-6 p-6 bg-white/[0.03] border border-white/10 rounded-3xl hover:bg-white/[0.06] hover:border-primary/50 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">{item.label}</p>
                                        <p className="text-lg font-semibold text-white">{item.val}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6 items-center pt-4">
                            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="text-white/30 hover:text-primary transition-colors">
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: The Interactive Form */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-zinc-900/50 border border-white/10 p-8 md:p-14 rounded-[3rem] shadow-2xl backdrop-blur-3xl relative overflow-hidden"
                        >
                            {/* Accent Glow */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[60px]" />

                            <AnimatePresence mode="wait">
                                {success ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-16 text-center space-y-6"
                                    >
                                        <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="w-12 h-12 text-success" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white tracking-tight">Message Received!</h3>
                                        <p className="text-white/50 max-w-sm mx-auto">
                                            Our team will get back to you within 24 hours. Get ready for some magic.
                                        </p>
                                        <button
                                            onClick={() => setSuccess(false)}
                                            className="text-primary font-bold hover:underline"
                                        >
                                            Send another one
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={onSubmit} className="space-y-8 relative z-10">
                                        <div className="space-y-6">
                                            <div className="relative">
                                                <input
                                                    name="name"
                                                    value={form.name}
                                                    onChange={onChange}
                                                    onFocus={() => setActiveField('name')}
                                                    onBlur={() => setActiveField(null)}
                                                    className={cn(
                                                        "w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none transition-all duration-300 placeholder:text-white/10",
                                                        errors.name && "border-error/50",
                                                        activeField === 'name' && "border-primary"
                                                    )}
                                                    placeholder="Your Name"
                                                />
                                                {errors.name && <span className="absolute -bottom-6 left-0 text-xs font-semibold text-error/80 uppercase tracking-tighter">{errors.name}</span>}
                                            </div>

                                            <div className="relative">
                                                <input
                                                    name="email"
                                                    type="email"
                                                    value={form.email}
                                                    onChange={onChange}
                                                    onFocus={() => setActiveField('email')}
                                                    onBlur={() => setActiveField(null)}
                                                    className={cn(
                                                        "w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none transition-all duration-300 placeholder:text-white/10",
                                                        errors.email && "border-error/50",
                                                        activeField === 'email' && "border-primary"
                                                    )}
                                                    placeholder="Your Email"
                                                />
                                                {errors.email && <span className="absolute -bottom-6 left-0 text-xs font-semibold text-error/80 uppercase tracking-tighter">{errors.email}</span>}
                                            </div>

                                            <div className="relative">
                                                <div className="flex items-center gap-4 border-b border-white/20">
                                                    <select
                                                        name="service"
                                                        value={form.service}
                                                        onChange={onChange}
                                                        className="w-full bg-transparent py-4 text-xl text-white/50 focus:outline-none transition-all appearance-none cursor-pointer hover:text-white"
                                                    >
                                                        <option value="Software & Technology">Software & Tech</option>
                                                        <option value="Consultancy">Consultancy</option>
                                                        <option value="Talent & Staffing">Talent & Staffing</option>
                                                        <option value="Design & Creative">Design & Creative</option>
                                                        <option value="Ventures">Ventures</option>
                                                        <option value="FinTech">FinTech</option>
                                                    </select>
                                                    <ChevronDown className="text-white/30" size={20} />
                                                </div>
                                                <p className="text-[10px] font-bold text-primary uppercase tracking-[.2em] mt-2">I'm interested in</p>
                                            </div>

                                            <div className="relative">
                                                <textarea
                                                    name="message"
                                                    value={form.message}
                                                    onChange={onChange}
                                                    onFocus={() => setActiveField('message')}
                                                    onBlur={() => setActiveField(null)}
                                                    className={cn(
                                                        "w-full bg-white/[0.03] border border-white/10 p-6 rounded-3xl h-40 text-lg text-white focus:outline-none transition-all duration-300 placeholder:text-white/10 resize-none",
                                                        errors.message && "border-error/50",
                                                        activeField === 'message' && "border-primary/50 ring-4 ring-primary/5"
                                                    )}
                                                    placeholder="Tell us about your project or just say hi..."
                                                />
                                                {errors.message && <span className="absolute -bottom-6 left-0 text-xs font-semibold text-error/80 uppercase tracking-tighter">{errors.message}</span>}
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className="group relative w-full h-20 bg-primary rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                                        >
                                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                                            <span className="relative z-10 font-black text-black text-xl uppercase italic tracking-widest flex items-center justify-center gap-4">
                                                {submitting ? (
                                                    <Loader2 className="animate-spin" />
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                                                    </>
                                                )}
                                            </span>
                                        </button>
                                    </form>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
