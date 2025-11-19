import valuestek from "../assets/valuestek.jpg";
import canon from "../assets/canon.jpg";
import sharp from "../assets/sharp.jpg";
import hp from "../assets/hp.jpg";

export default function Trusted() {
	return (
		<section className="py-6" aria-labelledby="trusted_heading">
			<div className="container-xl">
				<div className="rounded-[44px] bg-white p-8 sm:p-12 lg:p-16">
					<div className="grid gap-10 lg:grid-cols-12">
						<div className="lg:col-span-6">
							<h2 id="trusted_heading" className="text-[36px] leading-[44px] tracking-[-0.3px] font-extrabold">
								Trusted by Thousands
								<br />
								of Organizations
								<br />
								Across Africa
							</h2>
						</div>
						<div className="lg:col-span-6">
							<p className="text-neutral-700 text-[16px] leading-[26px] lg:pt-2">
								We’re proud to support enterprises, institutions, and entrepreneurs with world‑class
								solutions tailored to local challenges.
							</p>
						</div>
					</div>

					<div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
						{/* /src/assets/valuestek.jpg, /src/assets/canon.jpg, /src/assets/sharp.jpg, /src/assets/hp.jpg */}
						<div className="flex items-center justify-center">
							<img src={valuestek} alt="Valuestek logo" className="h-16 w-auto object-contain" onError={(e)=>{e.currentTarget.replaceWith(Object.assign(document.createElement('div'),{className:'text-neutral-400 text-sm',innerText:'Valuestek'}));}} />
						</div>
						<div className="flex items-center justify-center">
							<img src={canon} alt="Canon logo" className="h-16 w-auto object-contain" onError={(e)=>{e.currentTarget.replaceWith(Object.assign(document.createElement('div'),{className:'text-neutral-400 text-sm',innerText:'Canon'}));}} />
						</div>
						<div className="flex items-center justify-center">
							<img src={sharp} alt="Sharp logo" className="h-16 w-auto object-contain" onError={(e)=>{e.currentTarget.replaceWith(Object.assign(document.createElement('div'),{className:'text-neutral-400 text-sm',innerText:'Sharp'}));}} />
						</div>
						<div className="flex items-center justify-center">
							<img src={hp} alt="HP logo" className="h-16 w-auto object-contain" onError={(e)=>{e.currentTarget.replaceWith(Object.assign(document.createElement('div'),{className:'text-neutral-400 text-sm',innerText:'HP'}));}} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


