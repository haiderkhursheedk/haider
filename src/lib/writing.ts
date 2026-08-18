import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface WritingArticle {
  slug: string;
  title: string;
  description: string;
  date: string;
  year: string;
  readTime: string;
  category: string;
  image?: string;
  content: string;
  sr: string
}

const WRITING_DIR = path.join(
  process.cwd(),
  "src",
  "sections",
  "writing",
  "content"
);

export function getAllWritingArticles(): WritingArticle[] {
  if (!fs.existsSync(WRITING_DIR)) return [];

  const files = fs
    .readdirSync(WRITING_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const articles = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const filePath = path.join(WRITING_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      sr: data.sr || "",
      year: data.year || "",
      readTime: data.readTime || "",
      category: data.category || "",
      image: data.image || undefined,
      content: content.trim(),
    } as WritingArticle;
  });

  articles.sort((a, b) => {
    const dateA = new Date(a.sr);
    const dateB = new Date(b.sr);
    return dateA.getTime() - dateB.getTime();
  });

  return articles;
}

export function getWritingArticleBySlug(
  slug: string
): WritingArticle | undefined {
  const filePath = path.join(WRITING_DIR, `${slug}.mdx`);
  const mdFilePath = path.join(WRITING_DIR, `${slug}.md`);

  let finalPath: string | null = null;
  if (fs.existsSync(filePath)) finalPath = filePath;
  else if (fs.existsSync(mdFilePath)) finalPath = mdFilePath;

  if (!finalPath) return undefined;

  const raw = fs.readFileSync(finalPath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || "",
    sr: data.sr || "",
    year: data.year || "",
    readTime: data.readTime || "",
    category: data.category || "",
    image: data.image || undefined,
    content: content.trim(),
  };
}