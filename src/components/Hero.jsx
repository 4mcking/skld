import heroImage from "../assets/hero.jpg";

export default function Hero() {
	return (
		<section className="pt-0 pb-14 sm:pb-16 lg:pb-20">
      <div className="container-xl">
        <div className="rounded-[50px] bg-white overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
          
          {/* TEXT SECTION */}
					<div className="px-6 py-12 sm:px-12 sm:py-16 lg:px-24 lg:py-24">
            <div className="max-w-[860px] space-y-6">

              {/* BADGE — responsive wrap + smaller padding on XS */}
              <span
                className="
                  inline-block bg-[#D7E2FF] text-[#1E45FF]
                  font-black tracking-[-1px]
                  text-[28px] sm:text-[34px] lg:text-[40px]
                  leading-[1.05]
                  px-3 py-2 sm:px-5 sm:py-3
                  whitespace-normal sm:whitespace-nowrap
                "
              >
                Industry Experts Redefining
              </span>

              {/* HEADLINE — matched sizes */}
              <h1
                className="
                  text-[28px] sm:text-[34px] lg:text-[40px]
                  font-black leading-[34px] sm:leading-[42px] lg:leading-[48px]
                  tracking-[-1.2px] text-neutral-900
                "
              >
                <span className="block">Manufacturing &amp; Sourcing</span>
                <span className="block lg:whitespace-nowrap">
                  Excellence Through Innovation
                </span>
                <span className="block">&amp; Technology</span>
              </h1>

              {/* SUBTEXT */}
              <p
                className="
                  text-[16px] lg:text-[17px]
                  leading-[26px] lg:leading-[28px]
                  tracking-[-0.2px] text-neutral-600 font-medium
                "
              >
                From retail and manufacturing to education, corporate, and humanitarian
                supply, we deliver quality and efficiency through a seamless, end-to-end
                sourcing and delivery network.
              </p>
            </div>
          </div>

          {/* IMAGE */}
					<div className="h-[500px] sm:h-[600px] lg:h-[720px]">
            <img
              src={heroImage}
              alt="Manufacturing team"
              className="h-full w-full object-cover object-[center_top]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
