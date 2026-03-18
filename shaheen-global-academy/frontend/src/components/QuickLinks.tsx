import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUpRight, Link2, MessageCircle, PhoneCall } from "lucide-react";

const quickLinks = [
  {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeQSwPO2eLsrKp5X34Fa4JCHwiRDXOVSmq19fq4yOHN138kvg/viewform",
    label: "Admission Form",
    icon: Link2,
    external: true,
  },
  { href: "tel:+918050020345", label: "Call us", icon: PhoneCall },
  {
    href: "https://wa.me/+918050020345?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Shaheen%20Global%20Academy.",
    label: "WhatsApp",
    icon: MessageCircle,
    external: true,
  },
  { href: "#enquiry", label: "Enquiry", icon: MessageCircle },
];

export default function QuickLinks() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handeEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handeEscape);

    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handeEscape);
    };
  }, []);

  // Detect scroll direction to hide/show button
  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) {
      setVisible(true);
      return;
    }

    setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.3, rootMargin: "-120px 0px 0px 0px" },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end gap-3">
        {/* Quick Links Panel */}
        <div
          className={[
            "origin-bottom-right overflow-hidden rounded-2xl border border-[#9AE600]/30 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out",
            open
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-3 scale-95 opacity-0",
          ].join(" ")}
        >
          <div className="flex min-w-[220px] flex-col gap-1 p-2">
            {quickLinks.map(({ href, label, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-xl px-3 py-3 text-sm text-slate-700 transition-all hover:bg-[#9AE600]/10"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9AE600]/15 text-[#7bc400] transition-colors group-hover:bg-[#9AE600]/25">
                    <Icon size={18} />
                  </span>

                  <span className="font-medium">{label}</span>
                </span>

                <ArrowUpRight
                  size={16}
                  className="text-slate-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#7bc400]"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Floating Button */}
        <button
          type="button"
          aria-label={open ? "Close quick links" : "Open quick links"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9AE600] text-black shadow-[0_10px_30px_rgba(154,230,0,0.45)] transition-all duration-300 hover:-translate-y-1"
        >
          <Link2
            size={24}
            className={`transition-transform duration-300 ${
              open ? "rotate-45" : "rotate-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
