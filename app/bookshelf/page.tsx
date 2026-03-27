'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const books = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8SpnMm6RnNmv9iCXfAK_rNWBjwFhqvYc53bpNaP8k90zIfCy8cnCZjnZWgAy3_BHomiXJHXRnD6hrltAXUlAbVlFiWYDA6m6EZpXiq63WaNnD8E_wP08Z05G6dTQJ4wG21xLMuoLByHZODsuEs7MNbNfaiBHDYkUscFVLViEcqhFAqZlhBNFL7vn0XqYgj8IbTcSD0ZdewCsvC_P-tX7wOUyCv1IU82pDejIDW1b9WDN6kQ5kSOWIPXS69TClvCHXlJN_GjronDMD',
    alt: 'Minimalist book cover',
    title: 'Systems of Strategy',
    desc: 'An exploration into the architectural frameworks that govern modern digital ecosystems and user interaction.',
    color: '#e2e8f0',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADyGZwokXikz6bVLOfbvA3yKC58gps15jt_F7kmXF52754AXrxJ6yUW6M4NzPgCWsHnStFLzEYdBl5JBI83Lg2NOrJqv8Ro5yu81jbha_48pTs3d6LRT47TXnjzEKVuhSnT2sR8iP1vHgHxI77ggCPG5ONbGMSKPA9PrLe-TlDq6hU7apFUqNbzA7603VMQYnPrZ9vcppGu84-v_GDsY-NRSnbupvJ2ELBuJvrejN3MAuU6xZRo-ZOl_98-NQYL3RyvBRjunKDv0rA',
    alt: 'Abstract art book cover',
    title: 'Visual Logic',
    desc: 'Deconstructing the relationship between graphic form and cognitive processing in high-density interfaces.',
    color: '#f1f5f9',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFd_SgsTDKPnbEzCoNxLyx2_EBVPlIx1pM3xSCbmeoxEBuP1ejL4pI6DJ7E9Gga8AMgdyYU994OUNyvfuOi8bb5hRJ8RRG6GibNWvmsUTiF0SlwWycA9yOR5HUGG4HxUdHyR_LRhP2lpX0US63xT4eOgJvqPnfEqTps5vF03ZQIA7PNRO9kTgbDww_UXujWNl6UG2qk8RPVkVf6YDfQl3azwJs8OMQfJDL3PlfXl6j6tr1ujqdwhOk8pTzTkHtmlJjgVrNbEOGO',
    alt: 'Classic literature',
    title: 'The Digital Ethos',
    desc: 'A philosophical inquiry into the ethics of artificial intelligence and the future of human-centric agency.',
    color: '#e2e8f0',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmxOhkJs4hOgjkxRPyqvZNgzU69WXb5aaC2v3W7AWMpo4KrXvTmsJXyS1IGn37SU7KVFRHdjlS08Hz8pU5JcYEkLpcSarw5IXGTDfjEma_WSgRlQrONDpqDp2u4O80pt3OJFtziVPhk8pAHb5nTen4sq8nuhz6Nq8trr1dH5Z4dwjeFAvqE0H5hVbooAKBpfNEEvn7Ee9d47I0kFiRq-kABmsiYObL2CPhAcUuWOKjmrIQLl5F2dvzAbRxNFFsU_hx9xhmoWaiorRg',
    alt: 'Green book',
    title: 'Grid & Order',
    desc: 'The definitive guide to Swiss design principles applied to responsive web layouts and typography.',
    color: '#d1fae5',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJXxRzsUlylP3yYni_1R9plk9DBu9rsNtzmmh1_9ah_cUvK3VTM8t42BE7VIP6gfJTsePD4Ra-Fz9zROOqLLd9zu1ewgQHAkBt-OPcvKGbUwONNtkkTlZvDU7s-jngIA4WTV9yT8QIeB8Hou8SK1UpQRlvqFrNBm1b9u3xDWft0nVEmaQb4Ys-QpXGDbIh8p2kMSVH0G7mlH4w_yyKxWZ8D14hK0MBlR-ZOXfQS6tMXQzDUoYqWtgcn6zX3h89kZRiVbeNliik0oH8',
    alt: 'Technical manual',
    title: 'Neural Architectures',
    desc: 'Technical foundations of deep learning and its practical application in generative design workflows.',
    color: '#ede9fe',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgJnr0ZYwCEKJjoMX-BPdPLwdUvbUMtSB0WVbvmDjNzU_4wXiUeP-tpyKp8JMWh9JiUXqIrN5KtB61v7XEr_IOH-fFmEKowF7qT2-qZ0QCz08YP1iN1IwzXtcN00SfrU4wbxZOe7IRPXuQ4GL1LeXNx2KL1Rs0e6OShga3fKAjX2gv63NYHtf4dBmKYtW4JLRuRBv0PAnV-gym9UnuW8-kZAjsSi-W-fp0hawIoSBTALJ3VPKWgZFQrmOBsU7-oq6ZX1pFxpsVo',
    alt: 'Stack of books',
    title: 'The Monolith Theory',
    desc: 'Investigating the trend of singular, unified brand identities in a fragmented digital landscape.',
    color: '#fef3c7',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp3lTAlXAzzBfmazc07D7l7QSXlbMdPACghfaRFrVMj2J7SBB-cADjyj3pLR65iB9763dqZIUay-w5296NttA8O3PAfmGbckhG3FzpyRRXQv6IE5TiXxG7dLqpLBnYNhxxLX9jUuWfhefjopBRtOUXCD-g91VZQbDAwmc2GLdDFZsqgwOoD4CNquB_GbDKIsehJeTOcURWQeKU-SI8lc2mcJZSQfJTBt2_TSNI-FIone_KKcaEmRcBBXjt2Ev8OlwP_nGD0_NOEiTa',
    alt: 'Design book',
    title: 'Color as Language',
    desc: 'Understanding the emotional and semiotic impact of palette selection in interface design.',
    color: '#fee2e2',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_uLUoPsF0SqBxiNkN3p-43rKAtH3LeoP62tgjY-erkiXlStNmslSZ5m3udqrvqQzLFYQmMIPCqE5ePKk31W8msEajCgffR4X7nz4_0aEzeHubM1b3PY81pBQ3G8-F0ehLwJL0S-8azSe7DDMUsFhF2IIVqm4YbuJYdOVrd_OWWSR740EPjL1DyWCr7T3H8FwEslR8AzoBic5Cf9On7vziRuTXgfnKjeas96ZiHRd5PH_SUOzHKUCsuI98KRMOaaCGKyHr7KuJlVL6',
    alt: 'Stacked books',
    title: 'Simplicity Scales',
    desc: 'How to maintain aesthetic purity while managing extreme functional complexity in software.',
    color: '#e0f2fe',
  },
]

export default function BookshelfPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
        <header className="mb-20">
          <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-4">
            Curated Library
          </div>
          <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter leading-none mb-6">
            BOOKSHELF <span className="text-indigo-600">/</span>
            <br />
            THE INTELLIGENCE CURATOR.
          </h1>
          <p className="text-gray-500 max-w-2xl text-lg font-inter">
            A selection of foundational texts, visual essays, and technical manuscripts that define my approach to
            design, engineering, and digital philosophy.
          </p>
        </header>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 blur-sm pointer-events-none select-none">
            {books.map((book) => (
              <div key={book.title} className="group cursor-pointer">
                <div
                  className="aspect-[3/4] overflow-hidden mb-6"
                  style={{ backgroundColor: book.color }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={book.src}
                    alt={book.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                </div>
                <h3 className="font-headline text-xl font-bold mb-2">{book.title}</h3>
                <p className="text-gray-500 text-sm font-inter line-clamp-2 leading-relaxed">{book.desc}</p>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-label text-xs uppercase tracking-[0.4em] text-on-surface-variant">Soon</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
