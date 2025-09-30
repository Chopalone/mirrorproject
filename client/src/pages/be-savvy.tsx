import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

type Article = {
  title: string;
  tag: string;
  author: string;
  image: string;
  href: string;
  readTime: string;
};

const popular: Article[] = [
  {
    title: "How to get a loan with no credit",
    tag: "Personal Loans",
    author: "Rebecca Lake",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    readTime: "6 min read",
  },
  {
    title: "Our debt shame became a hopeful future",
    tag: "Everyday Finances",
    author: "Kimberly Rotter",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    readTime: "5 min read",
  },
  {
    title: "Complete guide to the pros and cons of debt consolidation",
    tag: "Debt Consolidation",
    author: "Dori Zinn",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    readTime: "8 min read",
  },
  {
    title: "3 money resolutions to start your 2025 glow‑up",
    tag: "Everyday Finances",
    author: "Rebecca Lake",
    image: "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    readTime: "5 min read",
  },
];

const topArticles: Article[] = [
  {
    title: "Unlocking opportunities: personal loans for bad credit",
    tag: "Personal Loans",
    author: "Anna Davies",
    image: "https://images.unsplash.com/photo-1520975922284-85d8a2b49f9b?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    readTime: "6 min read",
  },
  {
    title: "Need help with credit card debt over $10K? You have options",
    tag: "Debt Relief",
    author: "Miranda Marquit",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    readTime: "5 min read",
  },
  {
    title: "Fixed‑rate HELOC: Why it could be for you",
    tag: "Home Equity Loans",
    author: "Dana George",
    image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    readTime: "6 min read",
  },
];

const latest: Article[] = [
  {
    title: "Debt-to-income ratio: what it is and why it matters",
    tag: "DTI Calculator",
    author: "Editorial Team",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    readTime: "7 min read",
  },
  {
    title: "How to build an emergency fund step by step",
    tag: "Everyday Finances",
    author: "Editorial Team",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    readTime: "6 min read",
  },
  {
    title: "Personal loan vs HELOC: which is right for you?",
    tag: "Loans",
    author: "Editorial Team",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    readTime: "5 min read",
  },
  {
    title: "What is a fixed rate vs variable rate?",
    tag: "Glossary",
    author: "Editorial Team",
    image: "https://images.unsplash.com/photo-1518081461904-9ac4b5181dd1?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    readTime: "4 min read",
  },
  {
    title: "How debt consolidation affects your credit score",
    tag: "Debt Consolidation",
    author: "Editorial Team",
    image: "https://images.unsplash.com/photo-1523958203904-cdcb402031fd?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    readTime: "6 min read",
  },
  {
    title: "6 ways to lower your monthly payments",
    tag: "Money Tips",
    author: "Editorial Team",
    image: "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    readTime: "5 min read",
  },
];

export default function BeSavvy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero bar */}
      <section className="bg-[#3300FF] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Learn</h1>
          <p className="mt-2 text-sm sm:text-base max-w-2xl opacity-90">
            Personal finance articles, videos, and tools to help you move forward.
          </p>
        </div>
      </section>

      {/* Most popular this month */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Large feature visual */}
            <a href={popular[0].href} className="lg:col-span-9 rounded-2xl overflow-hidden block">
              <img src={popular[0].image} alt={popular[0].title} className="block w-full h-[420px] object-cover" />
            </a>

            {/* Sidebar list */}
            <aside className="lg:col-span-3">
              <div className="rounded-none border border-gray-200 p-6 bg-blue-50">
                <h2 className="text-lg lg:text-xl font-bold mb-4">Most popular this month</h2>
                <ul className="space-y-4">
                  {popular.map((a, i) => (
                    <li key={i} className={`flex items-start gap-4${i > 0 ? ' pt-4 border-t border-gray-200' : ''}`}>
                      <img src={a.image} alt={a.title} className="h-16 w-20 object-cover rounded-lg flex-shrink-0" />
                      <a href={a.href} className="text-sm font-medium hover:underline leading-snug">
                        {a.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <div className="border-t border-gray-200" />

      {/* Top Personal Finance Articles */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-bold mb-6">Top Personal Finance Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {topArticles.map((a, i) => (
              <a key={i} href={a.href} className="group rounded-xl overflow-hidden border border-gray-200">
                <img src={a.image} alt={a.title} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <div className="text-[#3300FF] text-xs font-semibold uppercase tracking-wide mb-2">{a.tag}</div>
                  <h3 className="text-base font-semibold group-hover:underline">{a.title}</h3>
                  <div className="mt-3 text-xs text-muted-foreground">{a.author} • {a.readTime}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest from Learn */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-bold mb-6">Latest from Learn</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latest.map((a, i) => (
              <a key={i} href={a.href} className="group rounded-xl overflow-hidden border border-gray-200">
                <img src={a.image} alt={a.title} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <div className="text-[#3300FF] text-xs font-semibold uppercase tracking-wide mb-2">{a.tag}</div>
                  <h3 className="text-base font-semibold group-hover:underline">{a.title}</h3>
                  <div className="mt-3 text-xs text-muted-foreground">{a.author} • {a.readTime}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className="border-t border-gray-200" />

      {/* As seen in */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase text-muted-foreground mb-4 font-semibold">Debt experts as seen in</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
            <img src={"/src/assets/wall-street.svg"} alt="Wall Street Journal" className="h-10 md:h-12 w-auto object-contain" />
            <img src={"/src/assets/fortune-1.svg"} alt="Fortune" className="h-10 md:h-12 w-auto object-contain" />
            <img src={"/src/assets/usa-news-2.svg"} alt="US News" className="h-10 md:h-12 w-auto object-contain" />
            <img src={"/src/assets/yahoo3.svg"} alt="Yahoo Finance" className="h-10 md:h-12 w-auto object-contain" />
            <img src={"/src/assets/cnet.svg"} alt="CNET" className="h-10 md:h-12 w-auto object-contain" />
            <img src={"/src/assets/USA-Today_CustServ2025.svg"} alt="USA Today" className="h-10 md:h-12 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl lg:text-2xl font-bold mb-6">Featured Videos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'What is debt relief?', img: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1600&auto=format&fit=crop' },
              { title: 'How Achieve debt consolidation works', img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop' },
              { title: 'How to answer a summons for credit card debt', img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop' },
            ].map((v, i) => (
              <a key={i} href="#" className="rounded-xl overflow-hidden border border-gray-200 group relative">
                <img src={v.img} alt={v.title} className="w-full h-44 object-cover" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#3300FF"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-sm font-semibold">{v.title}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
