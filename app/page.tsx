import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RotatingHeadline from '@/components/RotatingHeadline'
import HeroImage from '@/components/HeroImage'


export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-32 flex-1">
        {/* Hero */}
        <section className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <span style={{ animationDelay: '0ms' }} className="animate-fade-in-up inline-block mb-6 font-label text-xs font-medium uppercase tracking-[0.2em] text-primary-fixed">
                VISHAL RANJAN / DIRECTOR OF AI & ENGINEERING
              </span>
              <div className="animate-fade-in-up" style={{ animationDelay: '120ms' }}>
                <RotatingHeadline />
              </div>
              <p style={{ animationDelay: '240ms' }} className="animate-fade-in-up text-sm font-light text-on-surface-variant max-w-xl leading-relaxed mb-10">
                Generalist Engineer gone deep on AI. 12+ years building things that actually work,
                tinkering with machine intelligence since <span className="text-black font-medium">2010</span>,
                with production scars to prove it since <span className="text-black font-medium">2014</span>.
                I find patterns in algorithms and melodies, and explore systems as much as I explore places.
              </p>
              {/* <div className="flex gap-4">
                <button className="bg-black text-white px-8 py-4 rounded font-medium flex items-center gap-3 hover:bg-zinc-800 transition-colors">
                  View Projects
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div> */}
            </div>
            <div style={{ animationDelay: '360ms' }} className="animate-fade-in-up">
              <HeroImage />
            </div>
          </div>
        </section>

        {/* About — commented out
        <section className="py-40 bg-surface-container-low/30">
          ...
        </section>
        */}

        {/* YouTube Videos — commented out
        <section className="py-40">
          ...
        </section>
        */}

        {/* Projects Bento Grid — commented out
        <section className="py-40 bg-black text-white">
          ...
        </section>
        */}
      </main>
      <Footer />
    </div>
  )
}
