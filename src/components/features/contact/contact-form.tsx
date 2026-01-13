import React, { useMemo, useState, useCallback } from 'react'
import { Send, CheckCircle2, ChevronDown, Loader2, Terminal, Cpu, Zap, Globe } from 'lucide-react'
import { cn } from '../../../lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

type ServiceOption = 'Software & Technology' | 'Consultancy' | 'Talent & Staffing' | 'Design & Creative' | 'Ventures' | 'FinTech'

interface FormData {
    name: string
    email: string
    phone?: string
    service: ServiceOption
    message: string
    budget?: string
    complianceNeeds?: string
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
        if (!form.name.trim()) nextErrors.name = 'REQUIRED'
        if (!emailRegex.test(form.email)) nextErrors.email = 'INVALID FORMAT'
        if (!form.message || form.message.trim().length < 10) nextErrors.message = 'MIN 10 CHARS'

        switch (form.service) {
            case 'FinTech':
                if (!form.budget) nextErrors.budget = 'SPECIFY BUDGET'
                break
            case 'Consultancy':
                if (!form.industry) nextErrors.industry = 'SPECIFY INDUSTRY'
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
            await new Promise(res => setTimeout(res, 2000))
            setSuccess(true)
            setForm(initialForm)
            setTimeout(() => setSuccess(false), 5000)
        } catch {
        } finally {
            setSubmitting(false)
        }
    }

    const ConditionalFields = useMemo(() => {
        switch (form.service) {
            case 'FinTech':
                return (
                    <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="relative group">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">Budget Range</label>
                            <input
                                name="budget"
                                value={form.budget || ''}
                                onChange={onChange}
                                onFocus={() => setActiveField('budget')}
                                onBlur={() => setActiveField(null)}
                                className={cn(
                                    "w-full bg-[#0a0a0a] border-b-2 border-white/10 px-0 py-3 text-white focus:outline-none transition-all duration-500 font-mono text-sm",
                                    errors.budget ? "border-error" : "focus:border-primary"
                                )}
                                placeholder="0.00 USD"
                            />
                            <div className={cn("absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-700", activeField === 'budget' ? "w-full" : "w-0")} />
                        </div>
                    </div>
                )
            case 'Consultancy':
                return (
                    <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="relative group">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">Industry</label>
                            <input
                                name="industry"
                                value={form.industry || ''}
                                onChange={onChange}
                                onFocus={() => setActiveField('industry')}
                                onBlur={() => setActiveField(null)}
                                className={cn(
                                    "w-full bg-[#0a0a0a] border-b-2 border-white/10 px-0 py-3 text-white focus:outline-none transition-all duration-500 font-mono text-sm",
                                    errors.industry ? "border-error" : "focus:border-primary"
                                )}
                                placeholder="SYSTEM_SECTOR"
                            />
                            <div className={cn("absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-700", activeField === 'industry' ? "w-full" : "w-0")} />
                        </div>
                    </div>
                )
            default:
                return null
        }
    }, [form.service, form.budget, form.industry, errors, activeField, onChange])

    return (
        <section id="contact" className="py-32 md:py-52 relative overflow-hidden bg-[#050505] text-white">
            {/* HUD Grid Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">

                    {/* Left Side: System Information */}
                    <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="h-[2px] w-12 bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)]" />
                                <span className="text-xs font-black tracking-[0.4em] text-primary uppercase">Initialize Connection</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-white uppercase italic">
                                Secure your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Position</span>
                            </h2>
                            <p className="text-lg text-white/40 leading-relaxed font-mono">
                                Establishing a secure uplink to our core consultation unit. System ready for input.
                            </p>
                        </div>

                        {/* Tech Specs / Status Nodes */}
                        <div className="grid grid-cols-1 gap-6 pt-4 font-mono">
                            {[
                                { icon: Terminal, label: "UPLINK_STATUS", val: "ACTIVE", color: "text-success" },
                                { icon: Cpu, label: "CORE_STRENGTH", val: "N-TIER 2.0", color: "text-primary" },
                                { icon: Zap, label: "LATENCY", val: "0.2ms", color: "text-secondary" },
                                { icon: Globe, label: "NODE_LOCATION", val: "GMT+0", color: "text-accent" }
                            ].map((spec, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center justify-between p-4 bg-white/5 border-l-2 border-primary group hover:bg-white/10 transition-all cursor-default"
                                >
                                    <div className="flex items-center gap-4">
                                        <spec.icon className="w-5 h-5 text-primary opacity-50" />
                                        <span className="text-[10px] font-bold tracking-widest text-white/60">{spec.label}</span>
                                    </div>
                                    <span className={cn("text-xs font-black", spec.color)}>{spec.val}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: The Hub Form */}
                    <div className="lg:col-span-7 relative">
                        {/* Precision HUD Brackets */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-primary z-20" />
                        <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-primary z-20" />
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-primary z-20" />
                        <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-primary z-20" />

                        <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-16 relative overflow-hidden h-full shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                            {/* Scanning Line Animation */}
                            <motion.div
                                animate={{ top: ['0%', '100%', '0%'] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 w-full h-[1px] bg-primary/20 z-0 pointer-events-none"
                            />

                            <AnimatePresence mode="wait">
                                {success ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-center space-y-8"
                                    >
                                        <div className="w-24 h-24 border-2 border-success rounded-full flex items-center justify-center animate-pulse">
                                            <CheckCircle2 className="w-12 h-12 text-success" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-black italic uppercase tracking-tighter">Transmission Successful</h3>
                                            <p className="font-mono text-sm text-white/40 uppercase">Awaiting administrative validation...</p>
                                        </div>
                                        <button
                                            onClick={() => setSuccess(false)}
                                            className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-primary hover:text-white transition-colors"
                                        >
                                            [ Reset_Terminal ]
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={onSubmit} className="space-y-10 relative z-10">
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="relative group">
                                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">Operator Name</label>
                                                <input
                                                    name="name"
                                                    value={form.name}
                                                    onChange={onChange}
                                                    onFocus={() => setActiveField('name')}
                                                    onBlur={() => setActiveField(null)}
                                                    className={cn(
                                                        "w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:outline-none transition-all duration-500 font-mono text-sm",
                                                        errors.name ? "border-error" : "focus:border-primary"
                                                    )}
                                                    placeholder="IDENTITY_KEY"
                                                />
                                                <div className={cn("absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-700", activeField === 'name' ? "w-full" : "w-0")} />
                                                {errors.name && <span className="absolute -bottom-5 left-0 text-[9px] font-black text-error font-mono">{errors.name}</span>}
                                            </div>
                                            <div className="relative group">
                                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">Communication Channel</label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    value={form.email}
                                                    onChange={onChange}
                                                    onFocus={() => setActiveField('email')}
                                                    onBlur={() => setActiveField(null)}
                                                    className={cn(
                                                        "w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:outline-none transition-all duration-500 font-mono text-sm",
                                                        errors.email ? "border-error" : "focus:border-primary"
                                                    )}
                                                    placeholder="NAME@PROTOCOL.COM"
                                                />
                                                <div className={cn("absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-700", activeField === 'email' ? "w-full" : "w-0")} />
                                                {errors.email && <span className="absolute -bottom-5 left-0 text-[9px] font-black text-error font-mono">{errors.email}</span>}
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">Service Protocol</label>
                                            <div className="relative">
                                                <select
                                                    name="service"
                                                    value={form.service}
                                                    onChange={onChange}
                                                    onFocus={() => setActiveField('service')}
                                                    onBlur={() => setActiveField(null)}
                                                    className="w-full bg-[#0a0a0a] border-b-2 border-white/10 py-3 text-white focus:outline-none transition-all duration-500 font-mono text-sm appearance-none cursor-pointer focus:border-primary"
                                                >
                                                    <option value="Software & Technology">TECH_DEV [S-01]</option>
                                                    <option value="Consultancy">CONSULT_MOD [S-02]</option>
                                                    <option value="Talent & Staffing">STAFF_SYNC [S-03]</option>
                                                    <option value="Design & Creative">VIS_DESIGN [S-04]</option>
                                                    <option value="Ventures">V_VENTURES [S-05]</option>
                                                    <option value="FinTech">FIN_ENGINE [S-06]</option>
                                                </select>
                                                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-primary pointer-events-none" />
                                            </div>
                                        </div>

                                        {ConditionalFields}

                                        <div className="relative group">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">Transmission Details</label>
                                            <textarea
                                                name="message"
                                                value={form.message}
                                                onChange={onChange}
                                                onFocus={() => setActiveField('message')}
                                                onBlur={() => setActiveField(null)}
                                                className={cn(
                                                    "w-full bg-[#111] border border-white/10 p-4 h-32 text-white focus:outline-none transition-all duration-500 font-mono text-sm resize-none",
                                                    errors.message ? "border-error" : "focus:border-primary/50"
                                                )}
                                                placeholder="ENTER_DATA_HERE..."
                                            />
                                            {errors.message && <span className="absolute -bottom-5 left-0 text-[9px] font-black text-error font-mono">{errors.message}</span>}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className="relative w-full h-16 bg-primary text-black font-black uppercase italic tracking-widest text-lg overflow-hidden group/btn disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity" />
                                            <span className="relative z-10 flex items-center justify-center gap-4">
                                                {submitting ? (
                                                    <>
                                                        <Loader2 className="w-6 h-6 animate-spin" />
                                                        Processing_
                                                    </>
                                                ) : (
                                                    <>
                                                        Initiate_Transmission
                                                        <Send className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                                                    </>
                                                )}
                                            </span>
                                            {/* Corner Accents on Button */}
                                            <div className="absolute top-0 left-0 w-2 h-2 bg-white" />
                                            <div className="absolute bottom-0 right-0 w-2 h-2 bg-white" />
                                        </button>
                                    </form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
