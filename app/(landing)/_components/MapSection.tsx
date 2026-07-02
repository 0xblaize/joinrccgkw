import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function MapSection() {
  return (
    <section id="map" className="bg-black py-24 sm:py-28 hair-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          chapter="05"
          eyebrow="Visit"
          title="Visit us in Ile-Ife."
          description="We would love to have you at our next service. Here is where to find us and how to reach us."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-4">
          <Reveal className="lg:col-span-8">
            <div className="relative rounded-2xl overflow-hidden card aspect-[16/10] lg:aspect-auto lg:h-[460px]">
              <iframe
                title="Kings World location"
                src="https://www.google.com/maps?q=Ile-Ife,Osun,Nigeria&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale contrast-125 opacity-90"
              />
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.4))",
                }}
              />
            </div>
          </Reveal>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <Reveal>
              <div className="card rounded-2xl p-5">
                <div className="eyebrow-burgundy">Address</div>
                <div className="mt-2 leading-snug">
                  RCCG Kings World
                  <br />
                  Ile-Ife, Osun State
                  <br />
                  Nigeria
                </div>
              </div>
            </Reveal>

            <Reveal>
              <a
                href="mailto:hello@rccgkingsworld.org"
                className="card rounded-2xl p-5 flex items-center justify-between hover:border-white/40 transition-colors"
              >
                <div>
                  <div className="eyebrow-burgundy">Email</div>
                  <div className="mt-2">hello@rccgkingsworld.org</div>
                </div>
                <span>→</span>
              </a>
            </Reveal>

            <Reveal>
              <a
                href="tel:+2340000000000"
                className="card rounded-2xl p-5 flex items-center justify-between hover:border-white/40 transition-colors"
              >
                <div>
                  <div className="eyebrow-burgundy">Phone</div>
                  <div className="mt-2 tabular">+234 000 000 0000</div>
                </div>
                <span>→</span>
              </a>
            </Reveal>

            <Reveal>
              <a
                href="https://maps.google.com/?q=Ile-Ife,Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 h-12 grid place-items-center rounded-full btn-primary text-sm font-medium"
              >
                Get Directions
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
