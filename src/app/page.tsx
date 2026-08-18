import Hero from "@/sections/me&me/main";
import { getAllWritingArticles } from "@/lib/writing";

export default function Page() {
    const writingArticles = getAllWritingArticles();

    return <Hero writingArticles={writingArticles} />;
}
