import { AIAnalyticsHero } from '../components/features/ai-analytics/ai-analytics-hero'
import { AIAnalyticsTechStack } from '../components/features/ai-analytics/ai-analytics-tech-stack'
import { SectionDivider } from '../components/ui/section-divider'
import { useEffect } from 'react'

const AIAnalyticsPage = () => {
    useEffect(() => {
        document.title = "AI & Data Analytics | MyThought"
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className="min-h-screen bg-black">
            <AIAnalyticsHero />

            <div className="relative z-10">
                <SectionDivider type="glow" direction="top" color="from-indigo-500/20" />
                <AIAnalyticsTechStack />

                <SectionDivider type="fade" direction="bottom" />
            </div>
        </main>
    )
}

export default AIAnalyticsPage
