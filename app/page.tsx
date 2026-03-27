import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RotatingHeadline from '@/components/RotatingHeadline'


export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-32 flex-1">
        {/* Hero */}
        <section className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <span className="inline-block mb-6 font-label text-xs font-medium uppercase tracking-[0.2em] text-primary-fixed">
                VISHAL RANJAN / DIRECTOR OF AI & ENGINEERING
              </span>
              <RotatingHeadline />
              <p className="text-sm font-light text-on-surface-variant max-w-xl leading-relaxed mb-10">
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
            <div className="flex-1 w-full max-w-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/vishal.png"
                  alt="Vishal Ranjan"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded">
                  <p className="text-white text-sm font-medium uppercase tracking-widest">
                    Currently Building{' '}
                    <a href="https://digiaccel.in/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-80 transition-opacity">@Digiaccel</a>
                    {' '}and{' '}
                    <a href="https://alterainstitute.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-80 transition-opacity">@Altera</a>
                  </p>
                </div>
              </div>
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
