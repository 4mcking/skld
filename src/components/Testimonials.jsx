export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Partnering with SKLD for our office supplies has streamlined our procurement process, saving us both time and money.",
      name: "Mr. Tunde Okoro",
      title: "Operations Manager, Sterling Innovations, Lagos",
    },
    {
      quote:
        "Their customer service team is a pleasure to work with. They are knowledgeable, friendly, and always ready to help us find the perfect solution.",
      name: "Ms. Funke Adebayo",
      title: "Studio Lead, Kobo Art House, Ibadan",
    },
    {
      quote:
        "The online portal makes ordering a breeze. We can easily track expenses and manage our inventory, which has improved our internal efficiency.",
      name: "Mr. Ibrahim Danjuma",
      title: "Finance Director, Kano Textiles Ltd., Kano",
    },
    {
      quote:
        "The quality of products is consistently high. From stationery to ergonomic furniture, we've never been disappointed. It's great value for money.",
      name: "Dr. Emeka Nwosu",
      title: "Managing Director, Crestview Medical Center, Port Harcourt",
    },
    {
      quote:
        "SKLD's delivery is incredibly fast and reliable. We placed a large order for our annual conference, and everything arrived ahead of schedule.",
      name: "Mrs. Aisha Bello",
      title: "Head of Administration, Zenith Bank, Abuja",
    },
    {
      quote:
        "As a startup, managing costs is crucial. SKLD's competitive pricing allows us to equip our office with quality supplies without breaking the bank.",
      name: "Mrs. Chiamaka Eze",
      title: "Office Coordinator, Paystack, Enugu",
    },
  ];

  return (
    <section className="py-6">
      <div className="container-xl">
        <div className="rounded-[44px] bg-white p-8 sm:p-12 lg:p-16">
          <div className="grid gap-8 lg:grid-cols-12 mb-10">
            <div className="lg:col-span-4">
              <h2 className="text-[28px] leading-[34px] font-extrabold">Real Results. Proven Impact.</h2>
            </div>
            <div className="lg:col-span-8 text-neutral-700 text-[15px] leading-[24px] lg:pt-2">
              We collaborate with top institutions, government agencies, and private organizations to deliver
              lasting impact in education, infrastructure, and garment production.
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-black/5 flex flex-col justify-between"
              >
                <p className="text-neutral-700 text-[14px] leading-[22px]">{t.quote}</p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-neutral-300 flex items-center justify-center text-xs font-bold text-neutral-700">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-900">{t.name}</div>
                    <div className="text-xs text-neutral-500">{t.title}</div>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
