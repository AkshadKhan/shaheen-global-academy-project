import {
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  Phone,
  MessageCircle,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function ContactUsPage() {
  useEffect(() => {
    document.title = "Contact | Shaheen Global Academy";
  }, []);

  const phoneNumber = "+919044442494";
  const whatsappNumber = "919044442494";
  const emailAddress = "shaheenglobalacademy@gmail.com";

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
    window.location.href = `tel:${phoneNumber}`;
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
            <div className="p-8 sm:p-12 bg-[#9AE600]/5 relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Shaheen Global Academy
              </h2>
              <p className="text-[#9AE600] mb-8">Excellence in Education</p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <Phone className="text-[#9AE600]" />
                  <div>
                    <p className="text-gray-400 text-sm">Call Us</p>
                    <p className="text-white font-semibold">{phoneNumber}</p>
                  </div>
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
              <div className="flex gap-4 mt-10">
                <Twitter className="text-blue-400 hover:scale-110 cursor-pointer" />
                <Instagram className="text-pink-500 hover:scale-110 cursor-pointer" />
                <Linkedin className="text-blue-500 hover:scale-110 cursor-pointer" />
              </div>

              {/* Decorative */}
              <Mail className="absolute bottom-4 right-4 w-24 opacity-20 rotate-[-20deg]" />
            </div>

            {/* RIGHT SIDE (FORM) */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <div className="text-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Send a Message
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
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-20 right-6 z-[51] group">
        {/* Tooltip (ONLY DESKTOP) */}
        <div
          className="hidden md:block absolute right-14 top-1/2 -translate-y-1/2 
          bg-green-700 text-white text-xs px-3 py-1 rounded-md 
          opacity-0 group-hover:opacity-100 group-hover:delay-300 transition whitespace-nowrap pointer-events-none"
        >
          Send WhatsApp Message
        </div>

        {/* Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hi I want to know about Shaheen Global Academy`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition">
            <MessageCircle className="w-4 h-4" />
          </div>
        </a>
      </div>
    </div>
  );
}
