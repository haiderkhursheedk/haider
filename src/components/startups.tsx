"use client"

import { ExternalLink } from "lucide-react"

const startups = [
  {
    id: 1,
    image: "https://xibmozsefpwwipfvjsvv.supabase.co/storage/v1/object/public/startups/lixtanetwork.png",
    title: "Lixta Network",
    description: "The venture foundry turning labour into ai first software that delivers business outcomes. we're a small, bootstrapped team inventing for profit and fun.",
    url: "https://lixtanetwork.com",
    aboutUrl: "https://lixtanetwork.com/",
  },
  {
    id: 2,
    image: "https://xibmozsefpwwipfvjsvv.supabase.co/storage/v1/object/public/startups/komunity.png",
    title: "komunity",
    description: "komunity is a new age platform built for developers, creators, and startup founders to build, showcase, and get hired, all in one ecosystem.",
    url: "https://komunity.dev",
    aboutUrl: "https://komunity.dev/",
  },
  {
    id: 3,
    image: "https://xibmozsefpwwipfvjsvv.supabase.co/storage/v1/object/public/startups/100xbrain.png",
    title: "100xbrain",
    description: "Second brain for startups, ask anything. Get context from weeks, months, or years of your thoughts.",
    url: "https://100xbrain.in",
    aboutUrl: "https://100xbrain.in/",
  },
  {
    id: 4,
    image: "https://xibmozsefpwwipfvjsvv.supabase.co/storage/v1/object/public/startups/weekendjamming.png",
    title: "Weekend Jamming",
    description: "A realtime collaborative coding platform designed for weekend projects, hackathons, and coding sessions with friends.",
    // url: "https://weekendjamming.com",
    // aboutUrl: "https://weekendjamming.com/",
  },
  {
    id: 5,
    image: "https://xibmozsefpwwipfvjsvv.supabase.co/storage/v1/object/public/startups/chaos.png",
    title: "Chaos Ecosystem",
    description: "the venture studio that built saas, raising $550k in pre seed.",
    url: "https://chaosecosystem.com",
    aboutUrl: "https://chaosecosystem.com/",
  }
]

export default function StartupsSection() {
  return (
    <section className="relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-15 mb-16 ">
        <h2 className="text-5xl font-bold text-black ml-0 md:-ml-14 leading-relaxed transition-all duration-1000">
          our startups.
        </h2>
        <p className="text-black max-w-2xl ml-0 md:-ml-14 mt-4">
          Building the future, one venture at a time.
        </p>
      </div>

      {startups.map((startup, index) => (
        <div
          key={index}
          className="block group"
        >
          <div className="py-8 transition-all duration-500 mt-2 -ml-10 -mr-10">
            <div className="max-w-7xl mx-auto ">
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="space-y-4 md:space-y-6 order-2 md:order-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 mt-4 rounded-full border-2 border-black flex items-center justify-center">
                      <span className="text-black font-bold text-lg md:text-xl">{index + 1}</span>
                    </div>
                  </div>

                  <p className="text-black/90 text-base font-light md:text-lg leading-relaxed">
                    {startup.description}
                  </p>

                  <h3 className="text-3xl font-bold text-black lowercase tracking-tight">
                    {startup.title.toLowerCase()}
                  </h3>

                  <a
                    href={startup.aboutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-black text-base font-medium hover:gap-4 transition-all"
                  >
                    about
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="relative order-1 md:order-2 flex justify-center">
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{
                      transform: index % 2 === 0 ? 'rotate(6deg)' : 'rotate(-6deg)',
                      width: '100%',
                      maxWidth: '700px',
                      aspectRatio: '700 / 408'
                    }}
                  >
                    <img
                      src={startup.image}
                      alt={startup.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}