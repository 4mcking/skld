import impactTop from "../assets/impact-top.jpg";
import impactLeft from "../assets/impact-left.jpg";
import impactRight from "../assets/impact-right.jpg";
import impactBottom from "../assets/impact-btm.jpg";

export default function ImpactGrid() {
  return (
    <section className="py-6">
      <div className="container-xl">
        <div className="rounded-[44px] bg-neutral-900 p-8 sm:p-12 lg:p-16 text-white">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-[28px] leading-[34px] font-extrabold">Guided by Purpose, Driven by Impact</h2>
            </div>
            <div className="lg:col-span-8 text-neutral-300 text-[15px] leading-[24px] lg:pt-2">
              At the heart of everything we do are values that define our culture, guide our actions, and inspire
              trust in every relationship.
            </div>
          </div>

          {/* 3x3 grid: cards and images positioned to match the design */}
          <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {/* row 1 col 1: card 01 */}
            <div className="rounded-2xl bg-neutral-800 p-6">
              <div className="text-sm text-neutral-400">01</div>
              <h3 className="mt-4 text-lg font-semibold">Customer Satisfaction</h3>
              <p className="mt-3 text-neutral-300 text-[14px] leading-[20px]">
                We strive to set, deliver, and maintain the highest standards of quality and affordability in all
                our products and services.
              </p>
            </div>

            {/* row 1 col 2: top image */}
            <div className="overflow-hidden rounded-2xl ring-1 ring-black/20 min-h-[16rem] sm:min-h-[18rem] lg:min-h-[22rem]">
              <img src={impactTop} alt="Team planning" className="w-full h-full object-cover" />
            </div>

            {/* row 1 col 3: card 02 */}
            <div className="rounded-2xl bg-neutral-800 p-6">
              <div className="text-sm text-neutral-400">02</div>
              <h3 className="mt-4 text-lg font-semibold">Employee Management</h3>
              <p className="mt-3 text-neutral-300 text-[14px] leading-[20px]">
                Our goal is to foster a shared sense of direction and create a supportive work environment that
                encourages personal and professional growth for all employees.
              </p>
            </div>

            {/* row 2 col 1: left image (manufacturing) */}
            <div className="overflow-hidden rounded-2xl ring-1 ring-black/20 min-h-[16rem] sm:min-h-[18rem] lg:min-h-[22rem]">
              <img src={impactLeft} alt="Manufacturing floor" className="w-full h-full object-cover" />
            </div>

            {/* row 2 col 2: center card 03 */}
            <div className="rounded-2xl bg-neutral-800 p-6">
              <div className="text-sm text-neutral-400">03</div>
              <h3 className="mt-4 text-lg font-semibold">Partnership</h3>
              <p className="mt-3 text-neutral-300 text-[14px] leading-[20px]">
                This approach has been a cornerstone of our business philosophy, and has helped us achieve lasting,
                productive relationships with our suppliers.
              </p>
            </div>

            {/* row 2 col 3: right image (handshake) */}
            <div className="overflow-hidden rounded-2xl ring-1 ring-black/20 min-h-[16rem] sm:min-h-[18rem] lg:min-h-[22rem]">
              <img src={impactRight} alt="Handshake" className="w-full h-full object-cover" />
            </div>

            {/* row 3 col 1: card 04 */}
            <div className="rounded-2xl bg-neutral-800 p-6">
              <div className="text-sm text-neutral-400">04</div>
              <h3 className="mt-4 text-lg font-semibold">Environmental Responsibility</h3>
              <p className="mt-3 text-neutral-300 text-[14px] leading-[20px]">
                We take pride in continuously implementing environmentally friendly practices in our production and
                distribution processes and ensure our production and distribution methods are environmentally
                friendly.
              </p>
            </div>

            {/* row 3 col 2: bottom image (community) */}
            <div className="overflow-hidden rounded-2xl ring-1 ring-black/20 min-h-[16rem] sm:min-h-[18rem] lg:min-h-[22rem]">
              <img src={impactBottom} alt="Community outreach" className="w-full h-full object-cover" />
            </div>

            {/* row 3 col 3: card 05 */}
            <div className="rounded-2xl bg-neutral-800 p-6">
              <div className="text-sm text-neutral-400">05</div>
              <h3 className="mt-4 text-lg font-semibold">Social Responsibility</h3>
              <p className="mt-3 text-neutral-300 text-[14px] leading-[20px]">
                This is not only a part of our corporate ethos, but also an opportunity for us to help achieve the
                Sustainable Development Goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

