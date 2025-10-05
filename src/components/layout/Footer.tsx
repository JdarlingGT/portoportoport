
const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-slate-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Jacob Darling. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
