import {
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  Phone,
  Facebook,
  Youtube,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactUsPage() {
  useEffect(() => {
    document.title = "Contact | Shaheen Global Academy";
  }, []);

  const contacts = [
    {
      label: "Call Us",
      number: "+91 90444 42494",
    },
    {
      label: "Admission Enquiries",
      number: "+91 95192 11112",
    },
    {
      label: "Support Desk",
      number: "+91 90444 42493",
    },
    {
      label: "Enquiries",
      number: "+91 90444 42495",
    },
  ];

  const socialLinks = {
    twitter: "https://twitter.com/Shaheengrouporg",
    instagram: "https://www.instagram.com/shaheenglobalacademy",
    linkedin: "https://www.linkedin.com/in/fakhrul-islam-34748a138/",
    facebook: "https://www.facebook.com/shaheenlucknow/",
    youtube: "https://www.youtube.com/@shaheengroupofinstitutions",
  };

  const whatsappNumber = "919044442494";
  const emailAddress = "shaheenglobalacademy@gmail.com";

  const [openContacts, setOpenContacts] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenContacts(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // FORM STATE
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //Handle submit without database and backend
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const now = Date.now();

    // Always re-fetch fresh data
    let submissions: number[] = [];
    let leads: any[] = [];

    try {
      submissions = JSON.parse(
        localStorage.getItem("contact_submissions") || "[]",
      );
      leads = JSON.parse(localStorage.getItem("contact_leads") || "[]");
    } catch {
      submissions = [];
      leads = [];
    }

    // Filter last 1 hour
    const oneHourAgo = now - 60 * 60 * 1000;
    const recent = submissions.filter((t) => t > oneHourAgo);

    if (recent.length >= 5) {
      alert("Too many requests. Try later.");
      return;
    }

    // Cooldown (30s)
    const last = submissions[submissions.length - 1];
    if (last && now - last < 30000) {
      alert("Wait before sending again.");
      return;
    }

    // Duplicate check
    const isDuplicate = leads.some(
      (lead) =>
        lead.phone === form.phone &&
        lead.message.trim() === form.message.trim(),
    );

    if (isDuplicate) {
      alert("You already sent this message.");
      return;
    }

    // Save new data
    const newLead = {
      ...form,
      date: new Date().toISOString(),
    };

    localStorage.setItem("contact_leads", JSON.stringify([...leads, newLead]));

    localStorage.setItem(
      "contact_submissions",
      JSON.stringify([...recent, now]),
    );

    // WhatsApp redirect
    const message = `Hi, I'm ${form.name}.
      Phone: ${form.phone}
      Message: ${form.message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );

    setForm({ name: "", phone: "", message: "" });
  };

  const handleCall = () => {
    window.location.href = `tel:${contacts[0].number}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-900 overflow-hidden py-16 px-4">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-10 w-[185px] h-[185px] rounded-full bg-[#9AE600]/20 blur-3xl" />
        <div className="absolute -right-20 top-20 w-[300px] h-[300px] rounded-full bg-[#9AE600]/10 blur-3xl" />
        <div className="absolute -left-32 bottom-32 w-[250px] h-[250px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mt-12 mb-12">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-[#9AE600] tracking-tight">
            Contact Us
          </h1>
          <p className="text-gray-300 mt-4">
            Get in touch with Shaheen Global Academy instantly
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-[#9AE600]/20 overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="p-8 sm:p-12 bg-[#9AE600]/5 relative md:flex md:flex-col">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Shaheen Global Academy
              </h2>
              <p className="text-[#9AE600] mb-8">Excellence in Education</p>

              <div className="space-y-8">
                <div className="relative" ref={dropdownRef}>
                  <div
                    onClick={() => setOpenContacts(!openContacts)}
                    className="flex gap-4 items-center cursor-pointer"
                  >
                    <Phone className="text-[#9AE600]" />

                    <div>
                      <p className="text-gray-400 text-sm">Call Us</p>
                      <p className="text-white font-semibold flex items-center gap-2">
                        {contacts[0].number}
                        <span
                          className={`text-gray-400 text-xs transition-transform duration-300 ${
                            openContacts ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Animated Dropdown */}
                  <AnimatePresence>
                    {openContacts && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute mt-3 w-60 bg-[#2f393a] border hover:bg-[#29303d] border-gray-800 rounded-xl shadow-xl z-50 overflow-hidden"
                      >
                        {contacts.map((contact, index) => (
                          <a
                            key={index}
                            href={`tel:${contact.number}`}
                            className="block px-4 py-3 hover:bg-[#2f393a] transition-all duration-200 hover:pl-6"
                          >
                            <p className="text-md text-blue-600 font-medium">
                              {contact.label}
                            </p>
                            <p className="text-white text-sm hover:text-white font-medium">
                              {contact.number}
                            </p>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-[#9AE600]" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">{emailAddress}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-[#9AE600]" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Shaheen Global Academy
                    <br />
                    Dr. Abdul Ali Tibbiya College Road Katauli-Malihabad
                    Lucknow, Uttar Pradesh 226102
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div className="flex flex-wrap gap-4 justify-center mt-10 md:mt-auto md:justify-start">
                {/* Twitter */}
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Twitter className="text-blue-400 hover:scale-110 transition group-hover:drop-shadow-lg" />
                </a>

                {/* Instagram */}
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Instagram className="text-pink-500 hover:scale-110 transition group-hover:drop-shadow-lg" />
                </a>

                {/* LinkedIn */}
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Linkedin className="text-blue-500 hover:scale-110 transition group-hover:drop-shadow-lg" />
                </a>

                {/* Facebook */}
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Facebook className="text-blue-600 hover:scale-110 transition group-hover:drop-shadow-lg" />
                </a>

                  {/* Youtube */}
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Youtube className="text-red-600 hover:scale-110 transition group-hover:drop-shadow-lg" />
                </a>

              </div>

              {/* Decorative */}
              <Mail className="absolute bottom-4 right-4 w-24 opacity-20 rotate-[-20deg]" />
            </div>

            {/* RIGHT SIDE (FORM) */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <div className="text-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  WhatsApp Us
                </h3>
                <p className="text-gray-400 mt-2">
                  We will get back to you soon
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-[#9AE600]"
                />

                <input
                  type="tel"
                  name="phone"
                  pattern="[0-9]{10}"
                  title="Enter Valid 10 digit number"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-[#9AE600]"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-[#9AE600]"
                />

                <button
                  type="submit"
                  className="w-full bg-[#9AE600] text-black font-semibold py-4 rounded-xl hover:scale-105 transition"
                >
                  Send Message
                </button>
              </form>

              {/* Quick Actions */}
              <div className="mt-8 flex flex-col gap-3">
                <button
                  onClick={handleCall}
                  className="text-xl text-gray-400 hover:text-white"
                >
                  <Phone className="text-green-600 inline w-6 h-6 mr-1" /> Call
                  instead
                </button>
                <button
                  onClick={handleEmail}
                  className="text-xl text-gray-400 hover:text-white"
                >
                  <Mail className="text-blue-500 inline w-6 h-6 mr-1" /> Email
                  instead
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Find Us on Map
          </h2>

          <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.6908016376474!2d80.66435197541017!3d26.94501505870173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ea989def16147%3A0x17b1fc91ab6e6b29!2sSHAHEEN%20GLOBAL%20ACADEMY%20(NEET%20%2F%20IIT-JEE)!5e0!3m2!1sen!2sin!4v1775408000654!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
