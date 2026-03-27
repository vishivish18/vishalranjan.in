import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type Entry = {
  period: string
  role: string
  company: string
  location: string
  type?: string
  isMilestone?: boolean
}

const timeline: Entry[] = [
  {
    period: 'Oct 2024 – Present',
    role: 'Director of AI & Engineering',
    company: 'Digiaccel Learning',
    location: 'Gurugram, India · Hybrid',
  },
  {
    period: 'Jul 2024 – Present',
    role: 'Mentor: AI for Marketing',
    company: 'Altera Institute',
    location: 'On-site',
    type: 'Part-time',
  },
  {
    period: 'Aug – Oct 2024',
    role: 'Career Break · Travel',
    company: 'United States',
    location: '20+ National Parks across the US',
  },
  {
    period: 'Jun 2023 – Present',
    role: 'Director of AI & Engineering',
    company: 'Altera Institute',
    location: 'Gurugram, India',
  },
  {
    period: 'Jul 2023 – Present',
    role: 'Community Builder & Host',
    company: 'Rackets & Returns',
    location: 'Noida, India · Hybrid',
  },
  {
    period: 'Apr 2022 – Sep 2024',
    role: 'Fractional Engineering Manager',
    company: 'Digiaccel Learning',
    location: 'Texas, United States · Remote',
    type: 'Part-time',
  },
  {
    period: 'Apr 2021 – Aug 2024',
    role: 'AI & Engineering Manager 2',
    company: 'CG Infinity',
    location: 'Houston, Texas',
  },
  {
    period: 'Apr 2020 – Mar 2021',
    role: 'AI & Engineering Manager 1',
    company: 'CG Infinity',
    location: 'Noida, India · Remote',
  },
  {
    period: 'Apr 2018 – Mar 2020',
    role: 'AI & Engineering Team Lead',
    company: 'CG Infinity',
    location: 'Noida, India',
  },
  {
    period: 'Feb 2017 – Oct 2018',
    role: 'AI Consultant & Bot Engineer',
    company: 'BotSupply',
    location: 'Copenhagen, Denmark',
  },
  {
    period: 'Nov 2017 – Jun 2018',
    role: 'Artificial Intelligence Consultant',
    company: 'Jatana',
    location: 'Copenhagen, Denmark',
  },
  {
    period: 'Nov 2016 – Mar 2018',
    role: 'Senior Software Engineer',
    company: 'CG Infinity',
    location: 'Noida, India',
  },
  {
    period: 'Jun 2015 – Jun 2016',
    role: 'Full Stack Developer',
    company: 'Musejam',
    location: 'Noida, India',
  },
  {
    period: 'Jan 2014 – Jun 2015',
    role: 'Ad Operations',
    company: 'Exponential',
    location: 'Noida, India',
  },
  {
    period: '2014',
    role: 'B.Tech · Computer Science',
    company: 'Graduated',
    location: '',
    isMilestone: true,
  },
]

export default function TimelinePage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 max-w-screen-md mx-auto px-8">
        <header className="mb-20">
          <span className="font-label text-xs font-medium uppercase tracking-[0.2em] text-primary-fixed mb-4 block">
            Career / Timeline
          </span>
          <h1 className="font-headline text-6xl font-extrabold tracking-tighter text-black">
            12 years,<br />
            <span className="text-outline-variant">one obsession.</span>
          </h1>
        </header>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-black/8" />

          <div className="space-y-10">
            {timeline.map((entry, i) => (
              <div key={i} className="flex gap-8 relative">
                {/* Dot */}
                <div className="flex-shrink-0 mt-1.5">
                  {entry.isMilestone ? (
                    <div className="w-4 h-4 rounded-full bg-primary-fixed -ml-[3px]" />
                  ) : (
                    <div className="w-[7px] h-[7px] rounded-full bg-black/20 mt-[3px]" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-2 ${entry.isMilestone ? 'pt-0' : ''}`}>
                  {entry.isMilestone ? (
                    <div className="flex items-center gap-3">
                      <span className="font-headline text-lg font-bold text-black">{entry.role}</span>
                      <span className="text-[10px] font-label uppercase tracking-widest text-primary-fixed border border-primary-fixed px-2 py-0.5 rounded-full">
                        {entry.period}
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-sm font-medium text-black">{entry.role}</span>
                        {entry.type && (
                          <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
                            · {entry.type}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <span className="text-xs text-on-surface-variant">{entry.company}</span>
                        {entry.location && (
                          <>
                            <span className="text-outline-variant text-xs">·</span>
                            <span className="text-xs text-outline-variant">{entry.location}</span>
                          </>
                        )}
                      </div>
                      <span className="text-[10px] font-label text-outline-variant mt-0.5 block">
                        {entry.period}
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
