import { ArrowLeft, Compass, Home, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "404 | Shaheen Global Academy";
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-900 px-4 py-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-5rem] top-20 h-56 w-56 rounded-full bg-[#9AE600]/15 blur-3xl" />
        <div className="absolute right-[-6rem] top-28 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#9AE600]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto mt-16 max-w-5xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#9AE600]">
                Error 404
              </p>
              <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-6xl">
                The page you are looking for is not here.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
                The link may be outdated, the page may have moved, or the address
                may have been typed incorrectly. Let&apos;s get you back to the
                right place.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#9AE600] px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
                >
                  <Home className="h-5 w-5" />
                  Go Home
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-[#9AE600]/50 hover:bg-white/10"
                >
                  <Mail className="h-5 w-5" />
                  Contact Us
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <Link
                  to="/about"
                  className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-[#9AE600]/40 hover:bg-black/30"
                >
                  <Compass className="mb-3 h-6 w-6 text-[#9AE600]" />
                  <h2 className="font-semibold">About Us</h2>
                  <p className="mt-2 text-sm text-gray-400">
                    Learn about our mission and academic vision.
                  </p>
                </Link>

                <Link
                  to="/courses"
                  className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-[#9AE600]/40 hover:bg-black/30"
                >
                  <Compass className="mb-3 h-6 w-6 text-[#9AE600]" />
                  <h2 className="font-semibold">Courses</h2>
                  <p className="mt-2 text-sm text-gray-400">
                    Explore programs designed for future achievers.
                  </p>
                </Link>

                <Link
                  to="/gallery"
                  className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-[#9AE600]/40 hover:bg-black/30"
                >
                  <Compass className="mb-3 h-6 w-6 text-[#9AE600]" />
                  <h2 className="font-semibold">Gallery</h2>
                  <p className="mt-2 text-sm text-gray-400">
                    Take a look at campus life and student moments.
                  </p>
                </Link>
              </div>
            </div>

            <div className="relative flex min-h-[320px] items-center justify-center border-t border-white/10 bg-gradient-to-br from-[#9AE600]/15 via-transparent to-cyan-500/10 p-8 lg:min-h-full lg:border-l lg:border-t-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_50%)]" />
              <div className="relative text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#9AE600]/30 bg-black/30 shadow-[0_0_45px_rgba(154,230,0,0.18)]">
                  <span className="text-5xl font-black tracking-tight text-[#9AE600]">
                    404
                  </span>
                </div>
                <p className="mt-6 text-lg font-medium text-gray-200">
                  Lost in navigation?
                </p>
                <p className="mt-3 max-w-xs text-sm leading-6 text-gray-400">
                  Use the links on this page or head back to the homepage to
                  continue exploring Shaheen Global Academy.
                </p>
                <Link
                  to="/"
                  className="mt-8 p-5 border border-[#9AE600]/30 rounded-full inline-flex items-center gap-2 text-sm font-semibold text-[#9AE600] transition hover:text-[#b8f84c]/30 hover:border-[#9AE600]"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Return to the main page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
