export default function MissionVision() {
	return (
		<section className="py-6">
			<div className="container-xl">
				<div className="rounded-[44px] bg-white p-8 sm:p-12 lg:p-16">
					<div className="grid gap-10 lg:grid-cols-12">
						{/* Left: image and headline */}
						<div className="lg:col-span-6">
							<h3 className="text-[28px] leading-[34px] font-extrabold tracking-[-0.3px]">
								Built on Innovation.
								<br />
								Driven by Integrity.
							</h3>
							<div className="mt-6 overflow-hidden rounded-2xl">
								<img
									src="/src/assets/msn-vsn.jpg"
									alt="Team collaboration"
									className="w-full h-auto object-cover"
								/>
							</div>
						</div>
						{/* Right: mission/vision */}
						<div className="lg:col-span-6 lg:pt-2">
							<div>
								<h4 className="text-brand font-semibold text-sm">Missions</h4>
								<p className="mt-2 text-neutral-700 text-[15px] leading-[24px]">
									To provide innovative and scalable solutions that empower individuals, institutions,
									and economies across Africa.
								</p>
							</div>
							<div className="mt-8">
								<h4 className="text-brand font-semibold text-sm">Vision</h4>
								<p className="mt-2 text-neutral-700 text-[15px] leading-[24px]">
									A thriving Africa powered by quality education, local manufacturing, and sustainable
									infrastructure.
								</p>
							</div>
							<button className="mt-8 btn btn-primary">See more</button>
						</div>
					</div>

					{/* Stats row */}
					<div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{[
							{ kpi: "10+", caption1: "years serving", caption2: "the education sector" },
							{ kpi: "200+", caption1: "institutions", caption2: "served nationwide" },
							{ kpi: "100%", caption1: "locally produced", caption2: "uniforms & furniture" },
							{ kpi: "50+", caption1: "infrastructure", caption2: "projects delivered" },
						].map(({ kpi, caption1, caption2 }) => (
							<div
								key={kpi}
								className="rounded-2xl bg-neutral-50 ring-1 ring-black/10 p-6 sm:p-8 flex flex-col gap-3"
							>
								<div className="text-4xl sm:text-5xl font-extrabold">{kpi}</div>
								<div className="text-[13px] leading-[20px] text-neutral-600">
									<div>{caption1}</div>
									<div>{caption2}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}


