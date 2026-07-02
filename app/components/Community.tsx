import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const tribes = [
  {
    name: "Kings Kids",
    body: "A safe place where children learn about Jesus through story, song, and play. Trained teachers, a fun classroom, and lots of love.",
    ages: "Ages 2 to 12",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Youth and Young Adults",
    body: "For students of OAU and young adults building purpose. Real conversations, worship, mentorship, and friendship.",
    ages: "Ages 13 to 30",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Life Groups",
    body: "Small groups that meet during the week across Ile-Ife. We study the Bible, pray together, eat together, and grow together.",
    ages: "All ages",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Community() {
  return (
    <section id="community" className="bg-black py-24 sm:py-28 hair-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow="Community"
            title="Find your group."
            description="You are not meant to walk alone. Kings World is a family. Pick a group that fits your season and grow with us."
          />
          <Reveal>
            <a
              href="#groups"
              className="inline-flex items-center gap-2 text-sm text-[color:var(--burgundy-2)] link-underline"
            >
              See all groups
              <span>→</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {tribes.map((t) => (
            <Reveal key={t.name}>
              <article className="card rounded-2xl overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.75) 100%)",
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="eyebrow-burgundy">{t.ages}</div>
                  <h3 className="mt-2 font-display text-2xl">{t.name}</h3>
                  <p className="mt-3 text-white/65 text-sm leading-relaxed">
                    {t.body}
                  </p>
                  <a
                    href="#join"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white link-underline"
                  >
                    Join
                    <span>→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
