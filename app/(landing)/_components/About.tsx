import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const services = [
  { day: "Sunday", name: "1st Service", time: "8:00 AM" },
  { day: "Sunday", name: "2nd Service", time: "10:00 AM" },
  { day: "Wednesday", name: "Bible Study", time: "6:30 PM" },
  { day: "Friday", name: "Prayer Night", time: "10:00 PM" },
];

export default function About() {
  return (
    <section id="about" className="bg-black py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          chapter="01"
          eyebrow="About"
          title="About Kings World."
          description="We are a parish of the Redeemed Christian Church of God based in Ile-Ife. Our vision is to build a family of believers who love God, love people, and serve their generation."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] card">
              <Image
                src="https://images.unsplash.com/photo-1445445290923-a147a67f4d84?auto=format&fit=crop&w=1600&q=80"
                alt="Sunday service"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.85) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="eyebrow-burgundy">Pulpit</div>
                <div className="mt-2 font-display text-2xl">
                  Pastor in Charge of Zone
                </div>
                <div className="text-white/60 text-sm mt-1">
                  RCCG Kings World, Ile-Ife
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <Reveal>
              <div className="card rounded-2xl p-6">
                <div className="eyebrow-burgundy">Our Vision</div>
                <div className="mt-3 font-display text-2xl leading-tight">
                  To make Heaven.
                </div>
                <p className="mt-3 text-white/85 leading-relaxed">
                  To raise a generation of believers who know God intimately,
                  live by His word, and impact every area of society for
                  Christ.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-3">
              {services.map((s) => (
                <Reveal key={s.day}>
                  <div className="card rounded-2xl p-5 flex items-center justify-between">
                    <div>
                      <div className="eyebrow-burgundy">{s.day}</div>
                      <div className="mt-1 font-medium">{s.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="tabular font-display text-xl">
                        {s.time}
                      </div>
                      <div className="eyebrow text-white/40">WAT</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
