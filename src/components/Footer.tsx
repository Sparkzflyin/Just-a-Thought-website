const Footer = () => {
  return (
    <footer className="bg-brand-brown text-brand-off-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Just a thought. All rights reserved.</p>
        <p>thoughtschangelives.com</p>
      </div>
    </footer>
  );
};

export default Footer;
