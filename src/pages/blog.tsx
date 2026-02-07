import { useEffect } from 'react'
import { BlogHero } from '../components/features/blog/blog-hero'
import { BlogGrid } from '../components/features/blog/blog-grid'
import { SectionDivider } from '../components/ui/section-divider'

const BlogPage = () => {
  useEffect(() => {
    document.title = "Blog | MyThought"
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-black relative overflow-x-hidden">
      <BlogHero />

      <div className="relative z-10">
        <SectionDivider type="glow" direction="bottom" color="from-white/20" />
        <BlogGrid />
      </div>
    </main>
  )
}

export default BlogPage