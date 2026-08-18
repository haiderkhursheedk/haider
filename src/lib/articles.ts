export type ArticleContentBlock =
  | string
  | {
      type: "image";
      src: string;
      alt?: string;
      caption?: string;
    }
  | {
      type: "heading";
      text: string;
      level?: 2 | 3;
    }
  | {
      type: "quote";
      text: string;
    };

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string; // e.g. "Aug 2026" or "2026"
  year: string;
  readTime: string;
  category: string;
  image?: string;
  content: string | (string | ArticleContentBlock)[];
}

export const ARTICLES: Article[] = [
  {
    slug: "the-art-of-dreaming-delusionally-big",
    title: "The Art of Dreaming Delusionally Big",
    description: "From building microcontrollers at age 11 to pitching at IIT Bombay: staying curious in an noisy world.",
    date: "Jan 2025",
    year: "2025",
    readTime: "4 min read",
    category: "Essays & Origin",
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/images__21_-removebg-preview.png",
    content: [
      "When I was 11, I recorded my first video and built my first robotics prototype. It wasn't pretty, but it sparked a lifelong obsession with technology.",
      "Being 'delusionally big' isn't about arrogance—it's about refusing to limit your imagination based on present circumstances. Whether you're 11 tinkering with microcontrollers or running a studio shipping global software, curiosity is the fuel.",
      "Stay curious, keep asking 'how' and 'why', and never stop building real things."
    ]
  },
  {
    slug: "building-in-public-and-the-art-of-shipping",
    title: "Lessons from Komunity: Distribution Trumps Product",
    description: "Reflections on raising pre-seed funding, building an onchain hiring engine, and learning the hard lesson of distribution.",
    date: "Aug 2026",
    year: "2026",
    readTime: "4 min read",
    category: "Ventures & Building",
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/detailed-statue-knight-horseback-rendered-black-white-knight-dressed-full-armor-holding-sword-his-446763013-removebg-preview.png",
    content: [
      "For decades, resumes have been the golden ticket to opportunity. A single sheet of paper decided whether you were “qualified” enough to even get a chance. But here’s the truth: resumes lie.",
      "They’re outdated, biased, and static in a world that’s moving at the speed of code.",
      "At Komunity, we believe the next revolution in hiring won’t come from better HR software, it’ll come from on-chain proof-of-work.",
      "### The Problem With Resumes",
      "Let’s face it:",
      "Anyone can say they built a project.",
      "Anyone can list “React” or “Solidity” on their resume.",
      "But few can actually prove it.",
      "Recruiters spend hours filtering through noise pretty templates, fancy buzzwords, and inflated job titles. Developers, on the other hand, spend months trying to “build their resume” instead of building.",
      "That’s broken. Because skill should be verified, not claimed.",
      "### The Rise of OnChain Proof-of-Work",
      "Imagine a world where your Git commits, hackathon wins, project contributions, and community engagements live onchain, immutable, transparent, and verifiable by anyone.",
      "No recruiter emails. No PDF attachments. No fake experience.",
      "When your skills, projects, and reputation exist, companies don’t need to believe your resume. They can see your work your contributions, your collaborations, your growth all verifiable in real time.",
      "That’s on-chain hiring.",
      "### What It Looks Like Inside Komunity",
      "Komunity isn’t just another developer app, it’s a Onchain social hiring ecosystem where developers learn, build, and earn.",
      "Here’s how we’re building the foundation for on-chain hiring:",
      "- **Proof-of-Build:** Every challenge, hackathon, or project you complete earns you on-chain credibility, visible proof that you actually did the work.",
      "- **Skill Badges & Reputation:** Your performance, consistency, and code quality automatically reflect in your on-chain profile.",
      "- **Earn While You Learn:** Developers earn $CODR tokens for participation, collaboration, and verified contributions.",
      "- **Open Hiring Layer:** Companies can discover top talent through on-chain activity — no middlemen, no guesswork.",
      "It’s not about listing “I’m a Flutter Developer.” It’s about showing, “Here’s the Flutter app I built, here’s who reviewed it, and here’s how the community rated my work.”",
      "### Why This Changes Everything",
      "On-chain hiring is not a trend. It’s the natural evolution of credibility in the digital economy. Here’s why:",
      "- **Transparent:** Every contribution is public and verifiable.",
      "- **Trustless:** No dependency on recruiters or third-party validation.",
      "- **Global:** Your reputation travels with you, borderless and decentralized.",
      "- **Dynamic:** Your profile grows as you grow — in real time, not just when you update a PDF.",
      "Resumes capture your past. On-chain profiles showcase your progress.",
      "### The Future of Work Is Proof-Based",
      "We’re entering a world where AI can write your resume, but it can’t fake your reputation. Your proof-of-work will speak louder than your “Objective” section ever could.",
      "At Komunity, we’re building that future — where hiring is driven by proof, not promises. Where every coder, builder, and innovator can own their journey on-chain. And where opportunity is earned, not declared.",
      "The next time someone asks for your resume, just send them your on-chain profile. Because in the Web3 era, your work is your resume.",
      "### ✦ About Komunity",
      "Komunity is a onchain social network built for the next generation of developers. It combines tech, hiring, and community driven learning to create a system where developers learn, build, earn, and get hired all onchain.",
      "### ✦ Download Komunity From Here",
      "[https://play.google.com/store/apps/details?id=com.lixtanetwork.komunity](https://play.google.com/store/apps/details?id=com.lixtanetwork.komunity)"
    ]
  },
  {
    slug: "cognitive-memory-systems-in-ai",
    title: "Synaptic & Persistent Memory in AI Agents",
    description: "Exploring frontier memory architectures that allow LLMs and autonomous agents to remember and evolve across sessions.",
    date: "Jun 2026",
    year: "2026",
    readTime: "6 min read",
    category: "AI Research",
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/images__32_-removebg-preview.png",
    content: [
      "Current Large Language Models operate largely as stateless inference functions. Once a context window ends, the AI forgets everything about the interaction.",
      "At Aeomi, we're building synaptic memory systems designed to store episodic, semantic, and procedural knowledge over long horizons. Rather than relying on simple vector embeddings, true memory requires continuous consolidation and decaying associative graphs.",
      "Giving AI long-term memory transforms agents from reactive autocomplete widgets into true collaborators that grow alongside human teams."
    ]
  },
  {
    slug: "what-failing-taught-me-about-product-distribution",
    title: "Lessons from Komunity: Distribution Trumps Product",
    description: "Reflections on raising pre-seed funding, building an onchain hiring engine, and learning the hard lesson of distribution.",
    date: "Apr 2026",
    year: "2026",
    readTime: "5 min read",
    category: "Startup Postmortem",
    image: "https://erzeardsiwrvbavennox.supabase.co/storage/v1/object/public/images/media_114b8276644b2680ad2d5b7e889ee36d7d9dcd886-removebg-preview%20(1).png",
    content: [
      "With Komunity, we set out to solve a real problem: tech hiring is broken and resumes don't reflect actual proof of work. We raised ₹12.9M pre-money valuation, scaled to 1,000+ engineers, and generated early revenue.",
      "However, our biggest misstep was focusing on scaling the platform before locking in strong, repeatable distribution channels for hiring managers.",
      "Building a great product is only half the battle. If you don't master distribution and narrow down early adopter focus, even rapid growth can stall. It was a tough lesson, but invaluable for every venture going forward."
    ]
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}
