import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { WritingArticle } from "@/lib/writing";

interface WritingTableProps {
  articles: WritingArticle[];
}

export default function WritingTable({ articles }: WritingTableProps) {

  return (
    <section className="my-16">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans">
            Writing
          </h2>
          <span className="text-xs text-neutral-400">
            I write some thoughts &amp; essays
          </span>
        </div>
        <Link
          href="/writing"
          className="text-xs text-neutral-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
        >
          View all <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="divide-y divide-neutral-200/50 dark:divide-neutral-800/50">
        {articles.map((article) => (
          <div key={article.slug}>
            <Link
              href={`/writing/${article.slug}`}
              // className="flex items-center justify-between py-3.5 px-2 hover:bg-neutral-100/60 dark:hover:bg-neutral-900/50 transition-colors group"
              className="flex items-center justify-between py-3.5 hover:bg-neutral-100/60 dark:hover:bg-neutral-900/50 transition-colors group"
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
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
    </section>
  );
}
