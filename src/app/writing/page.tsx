import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getAllWritingArticles } from "@/lib/writing";

export default function WritingIndexPage() {
  const articles = getAllWritingArticles();

  return (
    <main className="min-h-screen w-full max-w-4xl mx-auto px-4 sm:px-8 py-4 sm:py-6 text-neutral-800 dark:text-neutral-200 transition-colors duration-300 font-sans">
      <div>
        {/* <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-emerald-400 transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link> */}

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans">
          Writing &amp; Essays
        </h1>
        <p className="mt-2 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-xl">
          Thoughts on artificial intelligence, memory systems, venture building,
          and lessons from shipping real products.
        </p>
      </div>


      <div className="divide-y divide-neutral-200/50 dark:divide-neutral-800/50 my-8">
        {articles.map((article) => (
          <div key={article.slug}>
            <Link
              href={`/writing/${article.slug}`}
              className="flex items-center justify-between py-3.5  hover:bg-neutral-100/60 dark:hover:bg-neutral-900/50 transition-colors group"
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-2">
                <span className="w-10 text-xs text-neutral-500 shrink-0  lg:block md:block sm:hidden">
                  {article.year}
                </span>

                {article.image && (
                  <div className="relative w-20 h-20 sm:w-14 sm:h-14 shrink-0 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                )}

                <div className="flex flex-col min-w-0">
                  <span className="font-semibold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-400 transition-colors">
                    {article.title}
                  </span>
                  <span className="text-xs text-neutral-400 truncate max-w-lg mt-0.5">
                    {article.description}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-neutral-400 shrink-0 ml-2">
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] text-neutral-300  lg:block md:block sm:hidden">
                  {article.readTime}
                </span>
                <ArrowUpRight className="lg:block md:block sm:hidden w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-neutral-400 group-hover:text-emerald-400" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
