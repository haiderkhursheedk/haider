import Link from "next/link";
import Image from "next/image";
import StartupsSection from "@/components/startups";

export default function LixtaLabsPage() {
    return (
        <article className="prose-custom w-full max-w-none pb-16">
            <div className="mb-6">
                <div className="mt-8 overflow-hidden border border-border">
                    <Image
                        src="https://kurpmqtkgthagnjqmphd.supabase.co/storage/v1/object/public/assets/lixtalabsbanner.png"
                        alt="Lixta Labs Banner"
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover"
                    />
                </div>
                {/* <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">holding company · jan 2026 — present</p> */}
                {/* <h1>lixta labs</h1> */}
                <h1 className="font-medium">
                    the house everything is built under.
                </h1>
            </div>

            <p>
                lixta labs is the holding company for all my ventures. announced in january 2026, it exists to give the portfolio of products a shared structure — legal, operational, and strategic.
            </p>

            <div className="my-10 border-t border-border pt-8">
                <h2>why a holding company</h2>
                <p>
                    i'm building multiple bets simultaneously. some will work, some won't. having a clean holding structure means i can operate each independently while sharing resources, infrastructure, and learnings across all of them.
                </p>
                <p>
                    it also makes it easier to bring in partners, investors, or acquirers at the individual venture level without complicating everything else.
                </p>
            </div>

            <div className="my-10 border-t border-border pt-8">
                <h2>the longer thesis</h2>
                <p>
                    i want to build a system of products that combine ai, memory, and human behavior. lixta labs is the vehicle for that — not just a company, but a platform for building things that accumulate.
                </p>
            </div>

            <div className="px-10 my-10 border-t border-border pt-8">
                <StartupsSection />
            </div>


            <div className="mt-16 pt-8 border-t border-border">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">related</p>
                <div className="flex flex-col space-y-2">
                    <Link href="/projects/aeomi" className="internal-link block w-fit">aeomi</Link>
                    <Link href="/projects/mia" className="internal-link block w-fit">mia</Link>
                    <Link href="/projects/lixta-network" className="internal-link block w-fit">lixta network</Link>
                    <a href="https://lixtalabs.com" target="_blank" rel="noopener noreferrer" className="external-link block w-fit">lixtalabs.com ↗</a>
                </div>
            </div>

        </article>
    );
}
