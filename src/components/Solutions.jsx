import { useState } from "react";
import skitLogo from "../assets/skit-store.png";
import marcelLogo from "../assets/marcel-hughes.png";
import weaveworxLogo from "../assets/weaveworx.png";
import skldLogo from "../assets/skld-relief.png";

export default function Solutions() {
	const [hoveredCard, setHoveredCard] = useState(null);

	const solutions = [
		{
			title: "Skit Store",
			bgColor: "#CFD6FA",
			logo: skitLogo,
			hoverTitle: "Retail & E-commerce",
			hoverDesc: "Your go-to retail destination for school and office supplies. Shop in-store or online with nationwide delivery.",
		},
		{
			title: "Marcel Hughes",
			bgColor: "#FFEFC8",
			logo: marcelLogo,
			hoverTitle: "Educational Uniforms",
			hoverDesc: "Premium school and corporate uniforms tailored for durability, comfort, and bulk fulfillment. Designed and produced locally to meet global standards.",
		},
		{
			title: "Weaveworx",
			bgColor: "#FFD7D1",
			logo: weaveworxLogo,
			hoverTitle: "Weaveworx",
			hoverDesc: "Specialized textile and fabric solutions for diverse industries and custom needs.",
		},
		{
			title: "SKLD Relief",
			bgColor: "#DFE5E8",
			logo: skldLogo,
			hoverTitle: "Garment Manufacturing",
			hoverDesc: "Our dedicated garment manufacturing brand producing high-quality clothing for government, corporate, and retail clients.",
		},
	];

	return (
		<section className="py-6">
			<div className="container-xl">
				<div className="rounded-[44px] bg-white p-8 sm:p-12 lg:p-16">
					<div className="grid gap-8 lg:grid-cols-12 mb-10">
						<div className="lg:col-span-6">
							<h2 className="text-[28px] sm:text-[36px] leading-[34px] sm:leading-[44px] tracking-[-0.3px] font-extrabold">
								Comprehensive Solutions
								<br />
								for Modern Learning
								<br />
								Environments
							</h2>
						</div>
						<p className="lg:col-span-6 text-neutral-700 text-[15px] leading-[24px] lg:pt-2">
						From everyday classroom essentials to large-scale school development, 
						SKLD delivers end-to-end education support services trusted by institutions across Nigeria.
						</p>
					</div>

					<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
						{solutions.map(({ title, bgColor, logo, hoverTitle, hoverDesc }) => (
							<div
								key={title}
								className="relative aspect-[3/4] rounded-[24px] ring-2 ring-neutral-800/70 overflow-hidden cursor-pointer transition-transform duration-300 hover:shadow-lg"
								style={{ backgroundColor: bgColor }}
								onMouseEnter={() => setHoveredCard(title)}
								onMouseLeave={() => setHoveredCard(null)}
							>
								{/* Logo/Normal State */}
								<div
									className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
										hoveredCard === title ? "opacity-0" : "opacity-100"
									}`}
								>
									<img src={logo} alt={title} className="h-24 w-auto object-contain" />
								</div>

								{/* Hover State - Card with title, description, arrow */}
								<div
									className={`absolute inset-0 flex flex-col justify-between p-6 transition-opacity duration-300 ${
										hoveredCard === title ? "opacity-100" : "opacity-0"
									}`}
									style={{
										backgroundColor: title === "SKLD Relief" ? "#2D3436" : bgColor,
										color: title === "SKLD Relief" ? "#FFFFFF" : "#1F2937",
									}}
								>
									<div>
										<h3 className="font-bold text-lg leading-tight">{hoverTitle}</h3>
										<p className={`mt-3 text-sm leading-[1.4] ${title === "SKLD Relief" ? "text-gray-300" : "text-neutral-700"}`}>
											{hoverDesc}
										</p>
									</div>
									<div className={`h-10 w-10 rounded flex items-center justify-center ${title === "SKLD Relief" ? "bg-white" : "bg-neutral-900"}`}>
										<span className={title === "SKLD Relief" ? "text-neutral-900" : "text-white"}>→</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}



