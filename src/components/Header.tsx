import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/organizations', label: 'Organizations' },
  { href: '/individuals', 'label': 'Individuals' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/rewire-programs', label: 'Upcoming Rewire Programs' },
  { href: '/book-now', label: 'Book Now' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

const Header = () => {
  return (
    <header className="bg-brand-blue text-brand-off-white">
      <nav className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <div className="text-2xl font-bold font-sans">
          <Link href="/">Just a thought</Link>
        </div>
        <ul className="flex flex-wrap items-center space-x-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
