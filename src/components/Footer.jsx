import footerLogo from "../assets/footer-logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-neutral-100">
      <div className="container-xl py-16 sm:py-20 lg:py-24">
        {/* Four columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 mb-16">
          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3 text-[15px] text-neutral-900">
              <li><a href="#" className="hover:text-brand transition">About Us</a></li>
              <li><a href="#" className="hover:text-brand transition">Blog & News</a></li>
              <li><a href="#" className="hover:text-brand transition">Projects</a></li>
              <li><a href="#" className="hover:text-brand transition">Careers</a></li>
              <li><a href="#" className="hover:text-brand transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">Solutions</h3>
            <ul className="space-y-3 text-[15px] text-neutral-900">
              <li><a href="#" className="hover:text-brand transition">Skit Store</a></li>
              <li><a href="#" className="hover:text-brand transition">Marcel Hughes</a></li>
              <li><a href="#" className="hover:text-brand transition">Weave Work</a></li>
              <li><a href="#" className="hover:text-brand transition">SKLD Relief</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">Help</h3>
            <ul className="space-y-3 text-[15px] text-neutral-900">
              <li><a href="#" className="hover:text-brand transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand transition">Cookies</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">Socials</h3>
            <ul className="space-y-3 text-[15px] text-neutral-900">
              <li><a href="#" className="hover:text-brand transition">Facebook</a></li>
              <li><a href="#" className="hover:text-brand transition">Instagram</a></li>
              <li><a href="#" className="hover:text-brand transition">Linkedin</a></li>
              <li><a href="#" className="hover:text-brand transition">Twitter(X)</a></li>
            </ul>
          </div>
        </div>

        {/* Footer base */}
        <div className="pt-12">
          {/* Logo and text */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src={footerLogo}
              alt="SKLD Integrated Services"
              className="h-10 w-auto object-contain"
            />
          </div>

          <p className="text-xs text-neutral-600 mb-6 font-medium">
            © 2025 SKLD Integrated Services Limited. All rights reserved.
          </p>

          <p className="text-sm text-neutral-700 max-w-3xl leading-[26px]">
            SKLD is Nigeria's trusted education supply and infrastructure company, offering reliable delivery, bulk
            procurement, and end-to-end project execution for schools, governments, and institutions across Lagos,
            Abuja, Port Harcourt, and beyond.
          </p>
        </div>
      </div>
    </footer>
  );
}
