import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Tag, ArrowUpRight } from "lucide-react";
import {
  getAllWritingArticles,
  getWritingArticleBySlug,
} from "@/lib/writing";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CopyHeader } from "@/components/blog/copy-header";
import { MediaViewer } from "@/components/blog/media-viewer";

interface WritingPostPageProps {
  params: {
    slug: string;
  };
}

/* ── custom MDX components ── */
const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <CopyHeader
      level={1}
      className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 mt-10 mb-4 tracking-tight"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <CopyHeader
      level={2}
      className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 mt-10 mb-4 tracking-tight"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <CopyHeader
      level={3}
      className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-3 tracking-tight"
      {...props}
    />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mt-6 mb-2 tracking-tight"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-neutral-700 dark:text-neutral-300 leading-relaxed my-4"
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-emerald-400 hover:text-emerald-300 underline font-medium transition-colors break-all"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc ml-6 my-4 space-y-2 text-neutral-700 dark:text-neutral-300" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal ml-6 my-4 space-y-2 text-neutral-700 dark:text-neutral-300" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed pl-1" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-2 border-emerald-500/80 pl-4 py-2 italic text-neutral-600 dark:text-neutral-300 bg-emerald-950/10 rounded-r my-6"
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-neutral-900 dark:text-neutral-100" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic text-neutral-400" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="px-1.5 py-0.5 rounded bg-neutral-800/60 text-emerald-400 font-mono text-xs sm:text-sm"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="my-6 p-4 rounded-lg border border-neutral-800 bg-neutral-950 overflow-x-auto text-neutral-200 text-xs sm:text-sm leading-relaxed font-mono"
      {...props}
    />
  ),
  hr: () => (
    <hr className="my-8 border-neutral-800/60" />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <MediaViewer
      src={props.src || ""}
      alt={props.alt || ""}
      className="border border-neutral-800/80 rounded-xl my-6"
    />
  ),
  // Allow using <MediaViewer /> and <ImageViewer /> directly in MDX
  MediaViewer,
};

export default function WritingPostPage({ params }: WritingPostPageProps) {
  const article = getWritingArticleBySlug(params.slug);

  if (!article) {
    return (
      <div className="min-h-screen max-w-4xl mx-auto px-4 sm:px-8 py-12 font-sans text-center">
        <h1 className="text-2xl font-bold text-neutral-100">
          Article not found
        </h1>
        <p className="text-neutral-400 mt-2">
          The article you are looking for does not exist.
        </p>
        <Link
          href="/writing"
          className="mt-4 inline-block text-emerald-400 font-mono text-sm underline"
        >
          Back to Writing
        </Link>
      </div>
    );
  }

  const otherArticles = getAllWritingArticles()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen w-full max-w-4xl mx-auto px-4 sm:px-8 py-4 sm:py-6 text-neutral-800 dark:text-neutral-200 transition-colors duration-300 font-sans">
      <article>
        <Link
          href="/writing"
          className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-emerald-400 transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Writing
        </Link>

        <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mb-3">
          <span>{article.date}</span>
          <span>·</span>
          <span className="flex items-center gap-1 text-emerald-500 font-medium">
            <Tag className="w-3 h-3" /> {article.category}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1 text-neutral-400">
            <Clock className="w-3 h-3" /> {article.readTime}
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-2 mt-8">
          {article.image && (
            <div className="relative lg:w-36 lg:h-36 md:w-36 md:h-36 sm:w-20 sm:h-20 shrink-0 overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-fit"
              />
            </div>
          )}

          <div className="flex flex-col min-w-0">
            <span className="font-semibold lg:text-5xl md:text-5xl sm:text-md text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-400 transition-colors">
              {article.title}
            </span>
            <span className="lg:text-md md:text-md sm:text-xs text-neutral-400 max-w-lg mt-4 sm:truncate">
              {article.description}
            </span>
          </div>

          {/* <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans leading-tight">
            {article.title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-neutral-400 italic leading-relaxed border-l-2 border-emerald-500/40 pl-4 py-1">
            {article.description}
          </p> */}
        </div>

        <div className="mt-8 text-base sm:text-lg leading-relaxed text-neutral-300 font-sans">
          <MDXRemote
            source={article.content}
            components={mdxComponents}
          />
        </div>
      </article>

      {otherArticles.length > 0 && (
        <section className="mt-16 pt-8 border-t border-neutral-800/60">
          <h2 className="text-sm text-neutral-400 mb-4 uppercase tracking-wider">
            Read Next
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherArticles.map((item) => (
              <Link
                key={item.slug}
                href={`/writing/${item.slug}`}
                className="group p-4 rounded-lg border border-neutral-800/60 hover:border-emerald-500/40 bg-neutral-950/40 hover:bg-neutral-900/40 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                  <span>{item.date}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-emerald-400 transition-colors" />
                </div>
                <h3 className="font-semibold text-neutral-100 group-hover:text-emerald-400 transition-colors text-sm line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
