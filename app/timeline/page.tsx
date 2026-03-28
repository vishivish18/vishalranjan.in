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
  startYear: string
  tenure: string
  duration: string
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
    startYear: '2022',
    tenure: '2022 – Present',
    duration: '3 yrs+',
    roles: [
      { period: 'Oct 2024 – Present', role: 'Director of AI & Engineering', location: 'Gurugram, India · Hybrid' },
      { period: 'Apr 2022 – Sep 2024', role: 'Fractional Engineering Manager', location: 'Texas, US · Remote', type: 'Part-time' },
    ],
  },
  {
    name: 'Altera Institute',
    logo: '/logos/altera.png',
    startYear: '2023',
    tenure: '2023 – Present',
    duration: '2 yrs 10 mos',
    roles: [
      { period: 'Jul 2024 – Present', role: 'Mentor: AI for Marketing', location: 'On-site', type: 'Part-time' },
      { period: 'Jun 2023 – Present', role: 'Director of AI & Engineering', location: 'Gurugram, India' },
    ],
  },
  {
    name: 'Rackets & Returns',
    logo: '/logos/rackets.png',
    startYear: '2023',
    tenure: '2023 – Present',
    duration: '2 yrs 9 mos',
    roles: [
      { period: 'Jul 2023 – Present', role: 'Community Builder & Host', location: 'Noida, India · Hybrid' },
    ],
  },
  {
    name: 'CG Infinity',
    logo: '/logos/cginfinity.png',
    startYear: '2016',
    tenure: '2016 – 2024',
    duration: '7 yrs 10 mos',
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
    startYear: '2017',
    tenure: '2017 – 2018',
    duration: '8 mos',
    roles: [
      { period: 'Nov 2017 – Jun 2018', role: 'Artificial Intelligence Consultant', location: 'Copenhagen, Denmark' },
    ],
  },
  {
    name: 'BotSupply',
    logo: '/logos/botsupply.png',
    startYear: '2017',
    tenure: '2017 – 2018',
    duration: '1 yr 9 mos',
    roles: [
      { period: 'Feb 2017 – Oct 2018', role: 'AI Consultant & Bot Engineer', location: 'Copenhagen, Denmark' },
    ],
  },
  {
    name: 'Musejam',
    logo: '/logos/musejam.png',
    startYear: '2015',
    tenure: '2015 – 2016',
    duration: '1 yr',
    roles: [
      { period: 'Jun 2015 – Jun 2016', role: 'Full Stack Developer', location: 'Noida, India' },
    ],
  },
  {
    name: 'Exponential',
    logo: '/logos/exponential.png',
    startYear: '2014',
    tenure: '2014 – 2015',
    duration: '1 yr 6 mos',
    roles: [
      { period: 'Jan 2014 – Jun 2015', role: 'Ad Operations', location: 'Noida, India' },
    ],
  },
  {
    year: '2014',
    label: 'B.Tech · Computer Science',
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
      <main className="pt-32 pb-24">

        {/* Header */}
        <div className="max-w-screen-lg mx-auto px-8 mb-20">
          <span className="font-label text-xs font-medium uppercase tracking-[0.2em] text-primary-fixed mb-4 block">
            Career / Timeline
          </span>
          <div className="flex items-end justify-between gap-8">
            <h1 className="font-headline text-7xl font-extrabold tracking-tighter text-black leading-none">
              12 years,<br />
              <span className="text-outline-variant">one obsession.</span>
            </h1>
            <div className="hidden md:flex gap-8 pb-2 text-right">
              <div>
                <p className="text-3xl font-headline font-bold text-black">9</p>
                <p className="text-[10px] font-label uppercase tracking-widest text-outline-variant">Companies</p>
              </div>
              <div>
                <p className="text-3xl font-headline font-bold text-black">3</p>
                <p className="text-[10px] font-label uppercase tracking-widest text-outline-variant">Countries</p>
              </div>
              <div>
                <p className="text-3xl font-headline font-bold text-black">12+</p>
                <p className="text-[10px] font-label uppercase tracking-widest text-outline-variant">Years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline entries */}
        <div className="max-w-screen-lg mx-auto px-8">
          <div className="space-y-0">
            {timeline.map((entry, i) => (
              <div key={i}>
                {isMilestone(entry) ? (
                  /* Graduation milestone */
                  <div className="py-12 flex items-center gap-6">
                    <div className="h-px flex-1 bg-black/8" />
                    <div className="text-center">
                      <p className="font-headline text-xs font-bold uppercase tracking-[0.3em] text-primary-fixed">{entry.label}</p>
                      <p className="text-[10px] font-label text-outline-variant mt-1 tracking-widest">{entry.year}</p>
                    </div>
                    <div className="h-px flex-1 bg-black/8" />
                  </div>
                ) : (
                  /* Company block */
                  <div className="border-t border-black/8 py-10 grid grid-cols-[72px_1fr] md:grid-cols-[96px_1fr] gap-6 md:gap-10 group">

                    {/* Left: year + logo */}
                    <div className="flex flex-col items-center gap-3 pt-1">
                      <span className="font-headline font-extrabold text-2xl text-black/10 group-hover:text-black/20 transition-colors leading-none">
                        {entry.startYear}
                      </span>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={entry.logo}
                        alt={entry.name}
                        className="w-9 h-9 object-contain grayscale opacity-50 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>

                    {/* Right: company + roles */}
                    <div>
                      {/* Company header */}
                      <div className="flex items-start justify-between mb-5">
                        <div>
                          <h2 className="font-headline text-2xl font-extrabold tracking-tight text-black leading-tight">
                            {entry.name}
                          </h2>
                          <p className="text-xs text-outline-variant mt-0.5 font-label">{entry.tenure}</p>
                        </div>
                        <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant bg-surface-container px-3 py-1 rounded-full flex-shrink-0 ml-4">
                          {entry.duration}
                        </span>
                      </div>

                      {/* Roles */}
                      <div className="space-y-4">
                        {entry.roles.map((role, j) => (
                          <div key={j} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-sm font-medium text-black">{role.role}</span>
                                {role.type && (
                                  <span className="text-[10px] font-label uppercase tracking-widest text-primary-fixed bg-indigo-50 px-2 py-0.5 rounded-full">
                                    {role.type}
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-1 mt-1">
                                <span className="material-symbols-outlined text-outline-variant" style={{ fontSize: '12px' }}>location_on</span>
                                <span className="text-xs text-outline-variant">{role.location}</span>
                              </div>
                            </div>
                            <span className="text-[11px] font-label text-outline-variant whitespace-nowrap mt-0.5 sm:text-right flex-shrink-0">
                              {role.period}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
