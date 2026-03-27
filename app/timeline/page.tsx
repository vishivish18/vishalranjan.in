import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type Role = {
  period: string
  role: string
  location: string
  type?: string
}

type Company = {
  name: string
  logo: string
  tenure: string
  roles: Role[]
}

type Milestone = {
  year: string
  label: string
  isMilestone: true
}

type TimelineEntry = Company | Milestone

const timeline: TimelineEntry[] = [
  {
    name: 'Digiaccel Learning',
    logo: '/logos/digiaccel.png',
    tenure: '2022 – Present',
    roles: [
      { period: 'Oct 2024 – Present', role: 'Director of AI & Engineering', location: 'Gurugram, India · Hybrid' },
      { period: 'Apr 2022 – Sep 2024', role: 'Fractional Engineering Manager', location: 'Texas, US · Remote', type: 'Part-time' },
    ],
  },
  {
    name: 'Altera Institute',
    logo: '/logos/altera.png',
    tenure: '2023 – Present',
    roles: [
      { period: 'Jul 2024 – Present', role: 'Mentor: AI for Marketing', location: 'On-site', type: 'Part-time' },
      { period: 'Jun 2023 – Present', role: 'Director of AI & Engineering', location: 'Gurugram, India' },
    ],
  },
  {
    name: 'Rackets & Returns',
    logo: '/logos/rackets.png',
    tenure: '2023 – Present',
    roles: [
      { period: 'Jul 2023 – Present', role: 'Community Builder & Host', location: 'Noida, India · Hybrid' },
    ],
  },
  {
    name: 'CG Infinity',
    logo: '/logos/cginfinity.png',
    tenure: '2016 – 2024 · 7 yrs 10 mos',
    roles: [
      { period: 'Apr 2021 – Aug 2024', role: 'AI & Engineering Manager 2', location: 'Houston, Texas' },
      { period: 'Apr 2020 – Mar 2021', role: 'AI & Engineering Manager 1', location: 'Noida, India · Remote' },
      { period: 'Apr 2018 – Mar 2020', role: 'AI & Engineering Team Lead', location: 'Noida, India' },
      { period: 'Nov 2016 – Mar 2018', role: 'Senior Software Engineer', location: 'Noida, India' },
    ],
  },
  {
    name: 'Jatana',
    logo: '/logos/jatana.png',
    tenure: '2017 – 2018',
    roles: [
      { period: 'Nov 2017 – Jun 2018', role: 'Artificial Intelligence Consultant', location: 'Copenhagen, Denmark' },
    ],
  },
  {
    name: 'BotSupply',
    logo: '/logos/botsupply.png',
    tenure: '2017 – 2018',
    roles: [
      { period: 'Feb 2017 – Oct 2018', role: 'AI Consultant & Bot Engineer', location: 'Copenhagen, Denmark' },
    ],
  },
  {
    name: 'Musejam',
    logo: '/logos/musejam.png',
    tenure: '2015 – 2016',
    roles: [
      { period: 'Jun 2015 – Jun 2016', role: 'Full Stack Developer', location: 'Noida, India' },
    ],
  },
  {
    name: 'Exponential',
    logo: '/logos/exponential.png',
    tenure: '2014 – 2015',
    roles: [
      { period: 'Jan 2014 – Jun 2015', role: 'Ad Operations', location: 'Noida, India' },
    ],
  },
  {
    year: '2014',
    label: 'B.Tech · Computer Science · Graduated',
    isMilestone: true,
  },
]

function isMilestone(entry: TimelineEntry): entry is Milestone {
  return 'isMilestone' in entry
}

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
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-black/8" />

          <div className="space-y-12">
            {timeline.map((entry, i) => (
              <div key={i} className="flex gap-8 relative">
                {/* Dot */}
                <div className="flex-shrink-0 mt-2">
                  {isMilestone(entry) ? (
                    <div className="w-4 h-4 rounded-full bg-primary-fixed -ml-[3px]" />
                  ) : (
                    <div className="w-[7px] h-[7px] rounded-full bg-black/25 mt-1" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {isMilestone(entry) ? (
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-headline text-base font-bold text-black">{entry.label}</span>
                      <span className="text-[10px] font-label uppercase tracking-widest text-primary-fixed border border-primary-fixed px-2 py-0.5 rounded-full">
                        {entry.year}
                      </span>
                    </div>
                  ) : (
                    <>
                      {/* Company header */}
                      <div className="flex items-center gap-3 mb-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={entry.logo}
                          alt={entry.name}
                          className="w-8 h-8 object-contain rounded opacity-80"
                        />
                        <div>
                          <p className="text-sm font-semibold text-black leading-tight">{entry.name}</p>
                          <p className="text-[10px] font-label uppercase tracking-widest text-outline-variant">{entry.tenure}</p>
                        </div>
                      </div>

                      {/* Roles */}
                      <div className="space-y-3 pl-1 border-l border-black/8 ml-1">
                        {entry.roles.map((role, j) => (
                          <div key={j} className="pl-4">
                            <div className="flex items-baseline gap-2 flex-wrap">
                              <span className="text-sm text-black">{role.role}</span>
                              {role.type && (
                                <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">· {role.type}</span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                              <span className="text-xs text-outline-variant">{role.location}</span>
                              <span className="text-outline-variant text-xs">·</span>
                              <span className="text-[10px] font-label text-outline-variant">{role.period}</span>
                            </div>
                          </div>
                        ))}
                      </div>
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
