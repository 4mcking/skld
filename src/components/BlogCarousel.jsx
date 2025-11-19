import { useRef, useState, useEffect } from "react";
import insightImage from "../assets/insight-img.jpg";

export default function BlogCarousel() {
  const posts = new Array(6).fill(0).map((_, i) => ({
    id: i + 1,
    title: [
      "How SKLD Is Transforming Public Schools with Smart Furniture",
      "Sustainable Sourcing: The Importance of Eco-Friendly Materials in School Furniture",
      "Designing for Neurodiversity: Creating Inclusive Learning Environments",
      "Beyond the Desk: The Role of Soft Seating in Modern Libraries",
      "Case Study: How Flexible Seating Increased Student Collaboration",
      "Thinking Ahead: Future-Proofing School Infrastructure",
    ][i % 6],
    img: insightImage,
  }));

  const containerRef = useRef(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onResize = () => {
      const cardWidth = el.querySelector('[data-card]')?.clientWidth || 300;
      const visible = Math.max(1, Math.floor(el.clientWidth / (cardWidth + 24)));
      setPages(Math.max(1, Math.ceil(posts.length / visible)));
      setPage(0);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [posts.length]);

  function scrollToPage(p) {
    const el = containerRef.current;
    if (!el) return;
    const card = el.querySelector('[data-card]');
    if (!card) return;
    const cardWidth = card.clientWidth + 24; // gap
    el.scrollTo({ left: Math.round(p * cardWidth), behavior: "smooth" });
    setPage(p);
  }

  function next() {
    scrollToPage(Math.min(pages - 1, page + 1));
  }

  function prev() {
    scrollToPage(Math.max(0, page - 1));
  }

  return (
    <section className="py-6">
      <div className="container-xl">
        <div className="rounded-[44px] bg-white p-8 sm:p-12 lg:p-16">
          <div className="flex items-start justify-between mb-6">
            <h2 className="text-[28px] leading-[34px] font-extrabold">Insights & Updates</h2>
            <button className="btn btn-outline">See more</button>
          </div>

          <div className="relative">
            <div
              ref={containerRef}
              className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
              aria-live="polite"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {posts.map((p) => (
                <article
                  key={p.id}
                  data-card
                  className="min-w-[260px] max-w-[320px] rounded-2xl bg-neutral-50 flex-shrink-0 overflow-hidden"
                >
                  <div className="overflow-hidden rounded-t-2xl h-40">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 text-sm text-neutral-800">{p.title}</div>
                </article>
              ))}
            </div>

            {/* pagination dots and arrows */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {Array.from({ length: pages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToPage(i)}
                    className={`size-3 rounded-full ${i === page ? "bg-brand" : "bg-neutral-200"}`}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button onClick={prev} className="size-10 rounded bg-neutral-900 text-white">
                  ←
                </button>
                <button onClick={next} className="size-10 rounded bg-neutral-900 text-white">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
