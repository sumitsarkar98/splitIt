const Footer = () => {
  return (
    <footer className="bg-[#6fa010] text-white py-4 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side */}
        <p className="text-sm">&copy; 2026 SplitIt. All rights reserved.</p>

        {/* Right side - optional links */}
        <div className="flex gap-4 mt-2 md:mt-0 text-sm">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
