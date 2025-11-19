import { useState, useEffect, useRef } from "react";
import logo from "../assets/nav-logo.svg";

function NavLink({ children, href = "#" }) {
	return (
		<a
			href={href}
			className="px-4 py-2 bg-neutral-800 rounded-md text-sm hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
		>
			{children}
		</a>
	);
}

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [brandsOpen, setBrandsOpen] = useState(false);
	const brandsRef = useRef(null);

	useEffect(() => {
		if (!brandsOpen) return;

		function handleClickOutside(event) {
			if (brandsRef.current && !brandsRef.current.contains(event.target)) {
				setBrandsOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [brandsOpen]);

	return (
		<header className="sticky top-4 z-50">
			<div className="mx-4 my-3 rounded-[40px] bg-neutral-900 text-white">
				<div className="max-w-7xl mx-auto px-4 py-3">
					<div className="grid grid-cols-2 md:grid-cols-3 items-center">
						{/* Left: logo */}
						<div className="flex items-center gap-3">
							<img src={logo} alt="SKLD logo" className="h-8 w-auto" />
						</div>

						{/* Center: nav (centered) */}
						<nav className="hidden md:flex justify-center">
							<div className="inline-flex items-center gap-2">
								<NavLink>Home</NavLink>
								<NavLink>About</NavLink>
								<div className="relative" ref={brandsRef}>
									<button
										onClick={() => setBrandsOpen((s) => !s)}
										className="px-4 py-2 bg-neutral-800 rounded-md inline-flex items-center gap-2 text-sm hover:bg-neutral-700"
										aria-expanded={brandsOpen}
									>
										<span>Brands</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="h-4 w-4 opacity-70"
										>
											<path d="M6.75 9l5.25 5.25L17.25 9z" />
										</svg>
									</button>
									{/* dropdown */}
									{brandsOpen && (
										<div className="absolute left-0 mt-2 min-w-40 rounded-md bg-neutral-800 p-2 shadow-lg z-40">
											<a className="block rounded px-3 py-2 text-sm hover:bg-neutral-700" href="#">SKLD</a>
											<a className="block rounded px-3 py-2 text-sm hover:bg-neutral-700" href="#">Skit Store</a>
											<a className="block rounded px-3 py-2 text-sm hover:bg-neutral-700" href="#">Marcel Hughes</a>
										</div>
									)}
								</div>
								<NavLink>Blog</NavLink>
							</div>
						</nav>

						{/* Right: CTA and mobile toggle */}
						<div className="flex items-center justify-end gap-3">
							<a className="hidden md:inline-block bg-white text-neutral-900 px-4 py-2 rounded-md font-semibold">Get in Touch</a>
							<button
								className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md bg-neutral-800 text-white"
								onClick={() => setOpen((s) => !s)}
								aria-label="Toggle menu"
								aria-expanded={open}
							>
								{open ? (
									// X icon (close)
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<line x1="18" y1="6" x2="6" y2="18" />
										<line x1="6" y1="6" x2="18" y2="18" />
									</svg>
								) : (
									// Hamburger icon
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<line x1="3" y1="6" x2="21" y2="6" />
										<line x1="3" y1="12" x2="21" y2="12" />
										<line x1="3" y1="18" x2="21" y2="18" />
									</svg>
								)}
							</button>
						</div>
					</div>

					{/* mobile menu (full width stacked) */}
					{open && (
						<div className="md:hidden mt-3">
							<nav className="grid gap-1 rounded-md bg-neutral-800 p-2">
								<a className="rounded px-3 py-2 hover:bg-neutral-700" href="#">Home</a>
								<a className="rounded px-3 py-2 hover:bg-neutral-700" href="#">About</a>
								<a className="rounded px-3 py-2 hover:bg-neutral-700" href="#">Brands</a>
								<a className="rounded px-3 py-2 hover:bg-neutral-700" href="#">Blog</a>
								<a className="mt-1 bg-white text-neutral-900 rounded-md px-3 py-2 text-center font-semibold" href="#">Get in Touch</a>
							</nav>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}


