import { Search, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); //not sure if optimized, it is for going to top of home even if on home page

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Search content database, good like this as per now bcz few contents only to search
  const searchableContent = [
    "Academics",
    "Admissions",
    "Contact",
    "About",
    "Infrastructure",
    "Faculties",
    "Facilities",
    "Toppers",
    "Enquiry",
    "Programs",
    "Curriculum",
    "Teachers",
    "Campus",
    "Library",
    "Laboratory",
    "Sports",
    "Events",
    "Scholarships",
    "Fee Structure",
    "Location",
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const results = searchableContent.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setShowResults(true);

      // Filter content on page - scroll to matching sections
      if (results.length > 0) {
        const firstResult = results[0].toLowerCase();
        const element = document.getElementById(firstResult);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Auto-search as user types
  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchableContent.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery]);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full left-0 right-0 z-50 h-17 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-2"
            : "bg-white py-4"
        }`}
      >
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <div
              // onClick={() => location.pathname === "/" && window.scrollTo({top: 0, behavior: "smooth"})} //to go to top if already on home
              className="flex items-center flex-shrink-0 cursor-pointer"
            >
              {" "}
              {/* later need to make it to go to home component from anywhere using roupter*/}
              <img
                src={logo}
                alt="Shaheen Education Foundation"
                className={`transition-all duration-100
                  ${scrolled ? "h-8" : "h-12"}`}
              />
              {/* <span className={`ml-auto transition-all duration-300 relative group font-semibold ${scrolled
                ? 'text-gray-700 hover:text-gray-900 text-base'
                : 'text-gray-900 hover:text-[#9AE600] text-xl'
                }`}
              > Home </span> */}
              <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#9AE600] transition-all duration-300 group-hover:w-full`}
              ></span>
            </div>
            {/* Navigation - Centered */}
            <nav className="hidden lg:flex items-center gap-10 flex-1 justify-end">
              <Link
                to="/"
                onClick={() =>
                  location.pathname === "/" &&
                  window.scrollTo({ top: 0, behavior: "smooth" })
                } //to go to top if already on home
                className="flex items-center flex-shrink-0 cursor-pointer"
              >
                {" "}
                {/* later need to make it to go to home component from anywhere using roupter*/}
                {/* <img src={logo} alt="Shaheen Education Foundation" className="h-14" /> */}
                <span
                  className={`transition-all duration-300 relative group font-semibold ${
                    scrolled
                      ? "text-gray-700 hover:text-gray-900 text-base"
                      : "text-gray-900 hover:text-[#9AE600] text-xl text-base"
                  }`}
                >
                  {" "}
                  Home{" "}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#9AE600] transition-all duration-300 group-hover:w-full`}
                  ></span>
                </span>
              </Link>
              <Link
                to="/academics"
                className={`transition-all duration-300 relative group font-semibold ${
                  scrolled
                    ? "text-gray-700 hover:text-gray-900 text-base"
                    : "text-gray-900 hover:text-[#9AE600] text-xl"
                }`}
              >
                Academics
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#9AE600] transition-all duration-300 group-hover:w-full`}
                ></span>
              </Link>
              <a
                href="#admissions"
                className={`transition-all duration-300 relative group font-semibold ${
                  scrolled
                    ? "text-gray-700 hover:text-gray-900 text-base"
                    : "text-gray-900 hover:text-[#9AE600] text-xl"
                }`}
              >
                Admissions {/* admision through fdorms */}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#9AE600] transition-all duration-300 group-hover:w-full`}
                ></span>
              </a>
              <a
                href="#enquiry"
                className={`transition-all duration-300 relative group font-semibold ${
                  scrolled
                    ? "text-gray-700 hover:text-gray-900 text-base"
                    : "text-gray-900 hover:text-[#9AE600] text-xl"
                }`}
              >
                Enquiry
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#9AE600] transition-all duration-300 group-hover:w-full`}
                ></span>
              </a>
             
              <a
                href="#about"
                className={`transition-all duration-300 relative group font-semibold ${
                  scrolled
                    ? "text-gray-700 hover:text-gray-900 text-base"
                    : "text-gray-900 hover:text-[#9AE600] text-xl"
                }`}
              >
                About
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#9AE600] transition-all duration-300 group-hover:w-full`}
                ></span>
              </a>
              <a
                href="#infrastructure"
                className={`transition-all duration-300 relative group font-semibold ${
                  scrolled
                    ? "text-gray-700 hover:text-gray-900 text-base"
                    : "text-gray-900 hover:text-[#9AE600] text-xl"
                }`}
              >
                Infrastructure
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#9AE600] transition-all duration-300 group-hover:w-full`}
                ></span>
              </a>
            </nav>
            {/* Right Side Actions */}{" "}
            {/* somewhat made search working, maybe more work iff needed */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0 relative">
              {/* Search Input - Expandable */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  searchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
                }`}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className={`w-full px-4 py-2 rounded-lg border transition-colors outline-none ${
                    scrolled
                      ? "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#9AE600]"
                      : "bg-white/80 backdrop-blur-sm border-gray-300 text-gray-900 placeholder-gray-600 focus:border-[#9AE600]"
                  }`}
                  autoFocus={searchOpen}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                />

                {/* Search Results Dropdown */}
                {showResults && searchOpen && (
                  <div
                    className={`absolute top-full mt-2 w-64 rounded-lg shadow-lg border overflow-hidden ${
                      scrolled
                        ? "bg-white border-gray-200"
                        : "bg-white/95 backdrop-blur-md border-gray-300"
                    }`}
                  >
                    {searchResults.length > 0 ? (
                      <div className="py-2">
                        <div className="px-4 py-2 text-xs text-gray-500">
                          Found {searchResults.length} result
                          {searchResults.length !== 1 ? "s" : ""}
                        </div>
                        {searchResults.map((result, index) => (
                          <button
                            key={index}
                            className="w-full px-4 py-2 text-left hover:bg-[#9AE600]/10 transition-colors text-gray-700 hover:text-gray-900"
                            onClick={() => {
                              const element = document.getElementById(
                                result.toLowerCase()
                              );
                              if (element) {
                                element.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }
                              setShowResults(false);
                            }}
                          >
                            {result}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="px-4 py-3 text-gray-500 text-sm">
                        No results found for "{searchQuery}"
                      </div>
                    )}
                    <button
                      className="w-full px-4 py-2 text-xs text-[#9AE600] hover:bg-gray-50 border-t border-gray-200 transition-colors"
                      onClick={() => setShowResults(false)}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>

              <button
                className={`p-2.5 rounded-full transition-colors ${
                  scrolled ? "hover:bg-gray-200" : "hover:bg-gray-200/50"
                }`}
                aria-label="Search"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search
                  className={`w-5 h-5 ${
                    scrolled ? "text-gray-700" : "text-gray-900"
                  }`}
                />
              </button>
              <button
                className={`px-4 py-2 rounded transition-colors text-sm ${
                  scrolled
                    ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    : "bg-white/20 text-gray-900 hover:bg-white/30 border border-gray-300"
                }`}
              >
                EN
              </button>
            </div>
            {/* Mobile Menu Toggle Button */}
            <button
              className={`lg:hidden p-2.5 rounded-full transition-colors ${
                scrolled ? "hover:bg-gray-200" : "hover:bg-gray-200/50"
              }`}
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu
                className={`w-6 h-6 ${
                  scrolled ? "text-gray-700" : "text-gray-900"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Dark overlay */}
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-[60] transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Mobile Menu Panel */}
          <div className="lg:hidden fixed top-0 right-0 bottom-0 w-80 bg-white z-[70] shadow-2xl transform transition-transform">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <img
                  src={logo}
                  alt="Shaheen Education Foundation"
                  className="h-12"
                />
                <button
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6 text-gray-900" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col p-6 gap-2 flex-1 overflow-y-auto">
                <a
                  href="#"
                  className="px-4 py-3 text-gray-900 hover:bg-[#9AE600]/10 hover:text-[#9AE600] rounded-lg transition-colors"
                  onClick={handleMobileLinkClick}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="px-4 py-3 text-gray-900 hover:bg-[#9AE600]/10 hover:text-[#9AE600] rounded-lg transition-colors"
                  onClick={handleMobileLinkClick}
                >
                  Academics
                </a>
                <a
                  href="#"
                  className="px-4 py-3 text-gray-900 hover:bg-[#9AE600]/10 hover:text-[#9AE600] rounded-lg transition-colors"
                  onClick={handleMobileLinkClick}
                >
                  Admissions
                </a>
                <a
                  href="#enquiry"
                  className="px-4 py-3 text-gray-900 hover:bg-[#9AE600]/10 hover:text-[#9AE600] rounded-lg transition-colors"
                  onClick={handleMobileLinkClick}
                >
                  Enquiry
                </a>
                <a
                  href="#about"
                  className="px-4 py-3 text-gray-900 hover:bg-[#9AE600]/10 hover:text-[#9AE600] rounded-lg transition-colors"
                  onClick={handleMobileLinkClick}
                >
                  About
                </a>
                <a
                  href="#"
                  className="px-4 py-3 text-gray-900 hover:bg-[#9AE600]/10 hover:text-[#9AE600] rounded-lg transition-colors"
                  onClick={handleMobileLinkClick}
                >
                  Infrastructure
                </a>
              </nav>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-gray-200 space-y-3">
                <button
                  className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  onClick={() => {
                    setSearchOpen(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  {" "}
                  {/* look at it, if optimized cz made almost without ai*/}
                  <Search className="w-4 h-4" />
                  Search
                </button>

                <button className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors">
                  Language: EN
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
