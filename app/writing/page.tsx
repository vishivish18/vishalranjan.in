import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const articles = [
  {
    date: 'MAR 12, 2024',
    title: 'The Ghost in the Neural Network: Rethinking Deterministic Logic',
    tags: ['Machine Learning', 'Philosophy'],
    readTime: '12 MIN READ',
  },
  {
    date: 'FEB 28, 2024',
    title: 'Scalable Monoliths vs. Microservice Fatigue',
    tags: ['Backend', 'Systems'],
    readTime: '08 MIN READ',
  },
  {
    date: 'JAN 15, 2024',
    title: 'The Latency of Thought: Human-AI Collaborative Cycles',
    tags: ['UX Research'],
    readTime: '15 MIN READ',
  },
  {
    date: 'DEC 04, 2023',
    title: 'Architecting for Uncertainty: The Case for Loose Coupling',
    tags: ['Strategy', 'Architecture'],
    readTime: '10 MIN READ',
  },
]

export default function WritingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-32 max-w-7xl mx-auto px-8">
        <header className="mb-32">
          <div className="mb-6">
            <span className="font-label uppercase tracking-widest text-[10px] text-primary-fixed font-medium">
              Archival Collection 01
            </span>
          </div>
          <h1 className="font-headline font-extrabold text-[clamp(3rem,8vw,6rem)] leading-[0.85] tracking-tighter text-black max-w-5xl">
            WRITING / REFLECTIONS ON AI &amp; SYSTEM ARCHITECTURE.
          </h1>
        </header>

        <div className="space-y-0">
          {articles.map((article, idx) => (
            <article
              key={idx}
              className="group relative py-16 transition-all duration-500 hover:bg-surface-container-low border-t border-black/5 last:border-b"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 items-baseline gap-8">
                <div className="md:col-span-2">
                  <time className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant">
                    {article.date}
                  </time>
                </div>
                <div className="md:col-span-7">
                  <h2 className="font-headline font-bold text-3xl md:text-4xl text-black mb-4 group-hover:text-primary-fixed transition-colors">
                    {article.title}
                  </h2>
                  <div className="flex gap-4">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-label uppercase tracking-[0.05em] text-[10px] px-2 py-1 bg-surface-container-highest text-on-surface-variant rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-3 text-right flex flex-col items-end">
                  <span className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant mb-4">
                    {article.readTime}
                  </span>
                  <div className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all">
                    <span className="material-symbols-outlined text-primary-fixed text-4xl">arrow_outward</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 flex items-center justify-between">
          <p className="font-label text-[10px] tracking-widest text-on-surface-variant">
            SHOWING 4 OF 42 ARTICLES
          </p>
          <div className="flex gap-4">
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-black/5 hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-black">chevron_left</span>
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-black/5 hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-black">chevron_right</span>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
