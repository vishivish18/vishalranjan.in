import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface Project {
  title: string
  description: string
  tags: string[]
  status: string
  year: string
  highlight?: boolean
}

const projects: Project[] = [
  {
    title: 'Nexus Core v2',
    description:
      'A production-ready orchestration layer for multi-agent autonomous systems. Handles dynamic task routing, context propagation, and failure recovery across distributed LLM workers. Serving 5M+ requests monthly.',
    tags: ['Rust', 'PyTorch', 'gRPC', 'Kubernetes'],
    status: 'Production',
    year: '2024',
    highlight: true,
  },
  {
    title: 'SynthUI',
    description:
      'Dynamic UI generation framework that interprets natural language intent via real-time LLM reasoning and renders responsive component trees. Reduces frontend prototyping time by 70%.',
    tags: ['TypeScript', 'React', 'OpenAI', 'AST'],
    status: 'Active',
    year: '2024',
  },
  {
    title: 'PromptGraph',
    description:
      'Open-source tool for visualizing and navigating the latent space of vector embeddings. Supports cosine similarity clustering, dimensionality reduction via UMAP, and interactive graph exploration.',
    tags: ['Python', 'UMAP', 'D3.js', 'FAISS'],
    status: 'Open Source',
    year: '2023',
  },
  {
    title: 'KubeAgi',
    description:
      'Kubernetes operator that automates the deployment and lifecycle management of local LLM instances. Handles resource scheduling, model caching, and horizontal scaling with zero-downtime model swaps.',
    tags: ['Go', 'Kubernetes', 'Helm', 'GGUF'],
    status: 'Active',
    year: '2023',
  },
]

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-32 max-w-7xl mx-auto px-8">
        <header className="mb-32">
          <div className="mb-6">
            <span className="font-label uppercase tracking-widest text-[10px] text-primary-fixed font-medium">
              Selected Work
            </span>
          </div>
          <h1 className="font-headline font-extrabold text-[clamp(3rem,8vw,6rem)] leading-[0.85] tracking-tighter text-black max-w-5xl">
            THINGS I HAVE BUILT.
          </h1>
        </header>

        <div className="space-y-0">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative py-16 border-t border-black/5 last:border-b transition-all duration-500 hover:bg-surface-container-low"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Index + Year */}
                <div className="md:col-span-2 flex flex-col gap-2">
                  <span className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant">
                    {project.year}
                  </span>
                </div>

                {/* Title + Description */}
                <div className="md:col-span-7">
                  <h2 className="font-headline font-bold text-3xl md:text-4xl text-black mb-4 group-hover:text-primary-fixed transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-on-surface-variant leading-relaxed mb-6 max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-label uppercase tracking-[0.05em] text-[10px] px-2 py-1 bg-surface-container-highest text-on-surface-variant rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status + Arrow */}
                <div className="md:col-span-3 text-right flex flex-col items-end justify-between">
                  <span
                    className={`font-label uppercase tracking-widest text-[10px] ${
                      project.highlight ? 'text-primary-fixed' : 'text-on-surface-variant'
                    }`}
                  >
                    {project.status}
                  </span>
                  <div className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all">
                    <span className="material-symbols-outlined text-primary-fixed text-4xl">arrow_outward</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
