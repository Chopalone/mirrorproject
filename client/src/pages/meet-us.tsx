import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HandHeart, Send, Users, Medal } from "lucide-react";

export default function MeetUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero banner */}
      <section className="bg-[#3300FF] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            We empower everyday people to move forward on the path to a better
            <br />
            financial future.
          </h1>
        </div>
      </section>

      {/* Culture with impact */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl lg:text-3xl font-bold mb-3">Culture with impact</h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto mb-12">
            Our values drive everything we do. Every day, we get to be our innovative, passionate, and authentic selves while
            bringing empathy, compassion, and human kindness to our members.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {[
              { title: "Care", subtitle: "for everyone", Icon: HandHeart },
              { title: "Get better", subtitle: "every day", Icon: Send },
              { title: "Collaborate", subtitle: "with everyone", Icon: Users },
              { title: "Act with integrity", subtitle: "every time", Icon: Medal },
            ].map(({ title, subtitle, Icon }, i) => (
              <div key={i} className="py-10 px-6 text-center">
                <Icon className="mx-auto mb-5 h-12 w-12 text-[#3300FF]" strokeWidth={1.8} />
                <div className="text-lg font-semibold tracking-tight">{title}</div>
                <div className="text-base text-foreground/80">({subtitle})</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caring for everyone */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-2xl lg:text-3xl font-bold mb-3">Caring for everyone doesn’t end at work</h3>
          <p className="text-center text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto mb-10">
            Whether co‑workers are experiencing hardships or local organizations need support to build stronger communities, we’re here to lend a hand.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop" alt="community" className="w-full h-64 object-cover rounded-xl" />

            <div className="rounded-xl bg-[#3300FF] text-white p-8 flex items-end justify-start">
              <div>
                <div className="text-3xl font-bold">$400k+</div>
                <p className="text-sm opacity-80">
                  Grants were distributed to non‑profits in Arizona, California and Texas
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-[#3300FF] text-white p-8 flex items-end justify-start">
              <div>
                <div className="text-3xl font-bold">$100k</div>
                <p className="text-sm opacity-80">In Family Funds given to employees needing assistance</p>
              </div>
            </div>

            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" alt="people" className="w-full h-64 object-cover rounded-xl" />

            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop" alt="team" className="w-full h-64 object-cover rounded-xl md:col-span-1" />

            <div className="rounded-xl bg-[#3300FF] text-white p-8 flex items-end justify-start">
              <div>
                <div className="text-3xl font-bold">40+</div>
                <p className="text-sm opacity-80">Charities and organizations were proudly supported by Achieve employees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ERG cards */}
      <section className="bg-[#F4F6FB] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-2xl lg:text-3xl font-bold mb-4">A place for everyone to belong</h3>
          <p className="text-center text-sm sm:text-base text-muted-foreground max-w-4xl mx-auto mb-12">
            The Achieve Employee Resource Groups are led by our teams, for our teams. They allow people from all backgrounds
            to feel seen, heard, and empowered to come as they are every day.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "African American/Black",
                desc: "Empowers personal and professional development while celebrating African American culture.",
                img: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "LGBTQ+",
                desc: "Champions an inclusive, supportive environment for LGBTQ+ team members and allies.",
                img: "https://images.unsplash.com/photo-1519336555923-59661f41bb86?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "Military Service Veterans and their Families",
                desc: "Connects and supports the diverse military community through education and inspiration.",
                img: "https://images.unsplash.com/photo-1520975922284-85d8a2b49f9b?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "Hispanic/Latinx",
                desc: "Celebrates diverse cultures and traditions while connecting members through events and education.",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "Asian American and Pacific Islander",
                desc: "Brings visibility to issues the AAPI community faces while driving change and empowerment.",
                img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "Women’s Leadership",
                desc: "Serves to empower, elevate, and celebrate present and future women leaders.",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
              },
            ].map((g, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <img
                  src={g.img}
                  alt={g.title}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop";
                  }}
                />
                <div className="p-6">
                  <h4 className="font-semibold text-lg mb-1">{g.title}</h4>
                  <p className="text-sm text-muted-foreground">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership grid */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-2xl lg:text-3xl font-bold mb-10">Our people – leading with heart</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Brad Stroh", role: "Co‑Founder and Co‑CEO", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop" },
              { name: "Andrew Housser", role: "Co‑Founder and Co‑CEO", img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop" },
              { name: "Heather Marcom", role: "SVP, Human Resources", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop" },
              { name: "Jeff Staley", role: "Managing Partner", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop" },
              { name: "Ajit Marathe", role: "SVP, Finance", img: "https://images.unsplash.com/photo-1541534401786-2077eed87a71?q=80&w=1200&auto=format&fit=crop" },
              { name: "Rob Carpenter", role: "Chief Technology Officer", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop" },
              { name: "Shira Libman‑Raveh", role: "VP, Product", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop" },
              { name: "Mike Freedman", role: "General Counsel", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop" },
              { name: "Sean Fox", role: "Chief Revenue Officer", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop" },
              { name: "Carlyn Lamia", role: "VP, Strategic Initiatives", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop" },
              { name: "Jean Shapiro", role: "Chief Security Officer", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop" },
              { name: "Kyle Enright", role: "President, Lending", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop" },
            ].map((p, i) => (
              <div key={i} className="rounded-xl border border-gray-200 overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
