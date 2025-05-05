import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#121c30] border-t border-[#1e2c4c] text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-sm space-y-12">
        {/* UPPER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* HQ + Mission */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Legal Tech Army HQ
            </h3>
            <p className="text-gray-400 mb-2">
              Guardians of Compliance, Contracts & Cyber Law. Our mission is to
              fortify Africa’s digital backbone with clarity, strength, and
              innovation.
            </p>
            <p className="text-xs mt-4">
              📍 Plot 42, Innovation Drive, Kampala, Uganda <br />
              ✉️ hq@legaltecharmy.org
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white">
                  Command Center
                </a>
              </li>
              <li>
                <a href="/compliance" className="hover:text-white">
                  Compliance Ops
                </a>
              </li>
              <li>
                <a href="/contracts" className="hover:text-white">
                  Contracts Lab
                </a>
              </li>
              <li>
                <a href="/cyberlaw" className="hover:text-white">
                  Cyber Law Briefs
                </a>
              </li>
              <li>
                <a href="/toolkit" className="hover:text-white">
                  Founder Toolkit
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Connect
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal & Policies</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="hover:text-white">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="/compliance#data" className="hover:text-white">
                  Data Protection
                </a>
              </li>
              <li>
                <a href="/contracts#fairness" className="hover:text-white">
                  Fair Contracting Pledge
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Informed</h4>
            <p className="mb-4 text-gray-400">
              Monthly legal tech briefings. No spam. No fluff. Only signal.
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                placeholder="you@domain.com"
                className="px-3 py-2 rounded-md text-black text-sm w-full sm:w-auto"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-4 py-2 rounded-md text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1e2c4c] pt-8"></div>

        {/* SOCIAL & CTA */}
        <div className="md:flex justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h5 className="text-md text-white font-semibold mb-1">
              Join the Legal Tech Vanguard
            </h5>
            <p className="text-xs text-gray-400">
              We’re building more than just tools. We’re shaping a movement.
            </p>
          </div>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaDiscord />
            </a>
            <a href="mailto:hq@legaltecharmy.org" className="hover:text-white">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* FINAL LEGAL ROW */}
        <div className="text-center text-xs text-gray-500 pt-10 border-t border-[#1e2c4c]">
          <p>
            &copy; 2025 Legal Tech Army. All rights reserved. Securing Uganda’s
            digital future.
          </p>
          <p className="mt-2 italic text-gray-600">
            Proudly powered by compliance, caffeine, and community.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
