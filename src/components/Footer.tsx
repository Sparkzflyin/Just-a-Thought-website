import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-off-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold font-serif text-white">
            Just a Thought
          </h3>
          <p className="text-gray-400 mt-2">
            Your strategic partner in cultivating Executive Agility.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold text-white">Quick Links</h4>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="/#about"
                className="hover:text-brand-gold transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-brand-gold transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/#rewire-programs"
                className="hover:text-brand-gold transition-colors"
              >
                Programs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold text-white">Legal</h4>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-brand-gold transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold text-white">Contact Us</h4>
          <ul className="mt-2 space-y-2">
            <li>Just a Thought</li>
            <li>Phone: 302-382-6437</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8 border-t border-gray-700 pt-4">
        <p>
          &copy; {new Date().getFullYear()} Just a Thought. All rights reserved.
          <span className="mx-2">|</span>
          <a
            href="https://senscode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold hover:text-brand-gold transition-all duration-300 hover:glow"
          >
            Powered by SensCode.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
