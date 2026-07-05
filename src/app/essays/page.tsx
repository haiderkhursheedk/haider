import Link from "next/link";
import Image from "next/image";

export default function EssaysPage() {
    return (
        <article className="prose-custom w-full max-w-none">
            <h1>all essays</h1>
            <p>My writing and reflections.</p>
            <ul>
                <li><Link href="/essays/reflections" className="internal-link">reflections on selling my company</Link></li>
            </ul>

            <div className="mt-8 overflow-hidden border border-border">
                <Image
                    src="https://kurpmqtkgthagnjqmphd.supabase.co/storage/v1/object/public/assets/essays.png"
                    alt="Essays"
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover"
                />
            </div>
        </article>
    );
}
