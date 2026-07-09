import Link from "next/link";
import Image from "next/image";

export default function ReflectionsPage() {
    return (
        <article className="prose-custom w-full max-w-none">
            <h1>reflections on selling my company</h1>

            <div className="mb-8 overflow-hidden border border-border">
                <Image
                    src="https://kurpmqtkgthagnjqmphd.supabase.co/storage/v1/object/public/assets/haider.jpg"
                    alt=""
                    width={800}
                    height={200}
                    className="w-full object-cover"
                />
            </div>

            <p>
                in may 2023, my second company got acquired, it was a game development studio. things went south pretty quickly from there, and we ended up:
            </p>

            <ol>
                <li>- shutting down operations</li>
                <li>- incorporated my 3rd company, lixta network</li>
                <li>- scaled it to india&apos;s fastest growing creative studio</li>
                {/* <li>- $5.8M valuation in 2 years</li> */}
                {/* <li>business gets acquired</li> */}
            </ol>

            <div className="mt-16 pt-8 border-t border-border">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Links to this page</h3>
                <div className="flex flex-col space-y-2">
                    <Link href="/essays" className="internal-link block w-fit">all essays</Link>
                </div>
            </div>
        </article>
    );
}
