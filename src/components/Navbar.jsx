import { Link, NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";
import { routesData as routes } from "../data/routesData";
import { Phone, Car, ArrowRight } from "lucide-react";

export default function Navbar({
  routesOpen,
  setRoutesOpen,
  mobileRoutesOpen,
  setMobileRoutesOpen,
  menuOpen,
  setMenuOpen,
}) {
  const phone = import.meta.env.VITE_PHONE;

  const dropdownRef = useRef(null);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileRoutesOpen(false);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Rental Cars", path: "/rent-car" },
    { name: "About", path: "/about" },
  ];

  /* Close dropdown when clicking outside */
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setRoutesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setRoutesOpen]);

  return (
    <div className="w-full flex justify-center fixed top-6 z-[100]">
      <nav className="flex items-center justify-between w-[92%] max-w-6xl px-5 py-3 rounded-full bg-white/90 backdrop-blur-md shadow-lg">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Site Logo" className="h-9 w-auto" />{" "}
          <span className="font-bold text-lg text-sky-500">AD Travels</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 relative">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setRoutesOpen(false)}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-sky-600 font-semibold"
                    : "text-slate-700 hover:text-sky-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Routes Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setRoutesOpen(!routesOpen)}
              className="flex items-center gap-1 text-slate-700 hover:text-sky-600 transition"
            >
              Routes
              <svg
                className={`w-4 h-4 transition-transform ${
                  routesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {routesOpen && (
              <div className="absolute left-0 top-10 bg-white shadow-xl rounded-xl py-4 w-[340px] max-h-[420px] overflow-y-auto">
                {Object.entries(routes).map(([state, items]) => (
                  <div key={state} className="mb-4">
                    {/* State Title */}
                    <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      {state}
                    </p>

                    {/* Routes */}
                    {items.map((route) => (
                      <Link
                        key={route.name}
                        to={route.path}
                        onClick={() => setRoutesOpen(false)}
                        className="flex items-center justify-between px-4 py-2 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition"
                      >
                        <span className="flex items-center gap-2">
                          <Car size={16} className="text-sky-600" />
                          {route.name}
                        </span>

                        <ArrowRight size={14} className="text-gray-400" />
                      </Link>
                    ))}
                  </div>
                ))}

                <div className="border-t mt-2 pt-3 px-4 text-xs text-gray-500">
                  More routes available on request
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="border border-slate-300 hover:bg-slate-100 px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Contact
          </Link>

          <a
            href={`tel:+${phone}`}
            className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded-full transition"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            className="w-6 h-6 text-slate-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 w-[92%] max-w-sm bg-white rounded-2xl shadow-xl flex flex-col items-center gap-5 py-6 md:hidden z-[100] max-h-[80vh] overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-sky-600 font-semibold"
                    : "text-slate-700 hover:text-sky-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Routes */}
          <div className="w-full flex flex-col items-center">
            <button
              onClick={() => setMobileRoutesOpen(!mobileRoutesOpen)}
              className="text-slate-700 hover:text-sky-600"
            >
              Routes
            </button>

            {mobileRoutesOpen && (
              <div className="mt-3 w-full text-sm max-h-60 overflow-y-auto">
                {Object.entries(routes).map(([state, items]) => (
                  <div key={state} className="w-full mb-4">
                    {/* State title */}
                    <p className="px-5 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      {state}
                    </p>

                    {/* Routes */}
                    {items.map((route) => (
                      <Link
                        key={route.name}
                        to={route.path}
                        onClick={closeMobileMenu}
                        className="flex items-center justify-between px-5 py-3 text-slate-700 hover:bg-sky-50 transition"
                      >
                        <span className="flex items-center gap-2">
                          <Car size={16} className="text-sky-600" />
                          {route.name}
                        </span>

                        <ArrowRight size={16} className="text-gray-400" />
                      </Link>
                    ))}
                  </div>
                ))}

                <div className="px-5 border-t mt-3 pt-3 text-xs text-gray-500">
                  More routes available on request
                </div>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="border border-slate-300 px-4 py-2 rounded-full"
          >
            Contact
          </Link>
          <a
            href={`tel:+${phone}`}
            onClick={closeMobileMenu}
            className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded-full transition"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      )}
    </div>
  );
}
