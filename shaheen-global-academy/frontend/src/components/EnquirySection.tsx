import { Phone, MessageCircle, Mail, Clock } from 'lucide-react';

export function EnquirySection() {
  const phoneNumber = "+91-090444 42494"; // Replace with actual number
  const whatsappNumber = "8050020345"; // don't use + and - cz of wa.me link format
  const email = "info@shaheeneducation.org";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I would like to know more about Shaheen Global Academy.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-[#101828] to-gray-900 py-20 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#9AE600] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#9AE600] mb-2">Get in Touch</p>
          <h2 className="text-white mb-4">
            Quick Enquiry
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions? Connect with us instantly through your preferred channel. Our team is ready to assist you.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {/* Phone Card */}
          <button
            onClick={handleCall}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-[#9AE600]/50 group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white mb-2">
              Instant Call
            </h3>
            <p className="text-gray-400 mb-3 text-sm">
              Talk to our admission team
            </p>
            <p className="text-[#9AE600]">
              {phoneNumber}
            </p>
            <div className="mt-4 pt-4 border-t border-white/10">
              <span className="text-sm text-gray-300 group-hover:text-[#9AE600] transition-colors duration-300">
                Tap to call now →
              </span>
            </div>
          </button>

          {/* WhatsApp Card */}
          <button
            onClick={handleWhatsApp}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-[#9AE600]/50 group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white mb-2">
              WhatsApp Chat
            </h3>
            <p className="text-gray-400 mb-3 text-sm">
              Get instant responses
            </p>
            <p className="text-[#9AE600]">
              Chat with us
            </p>
            <div className="mt-4 pt-4 border-t border-white/10">
              <span className="text-sm text-gray-300 group-hover:text-[#9AE600] transition-colors duration-300">
                Start conversation →
              </span>
            </div>
          </button>

          {/* Email Card */}
          <button
            onClick={handleEmail}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-[#9AE600]/50 group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#9AE600] to-[#7bc400] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Mail className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-white mb-2">
              Email Us
            </h3>
            <p className="text-gray-400 mb-3 text-sm">
              Send detailed enquiries
            </p>
            <p className="text-[#9AE600] text-sm break-all">
              {email}
            </p>
            <div className="mt-4 pt-4 border-t border-white/10">
              <span className="text-sm text-gray-300 group-hover:text-[#9AE600] transition-colors duration-300">
                Send email →
              </span>
            </div>
          </button>
        </div>

        {/* Additional Info */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-gray-300">
            <Clock className="w-5 h-5 text-[#9AE600]" />
            <p>
              Available Monday - Saturday | 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-white mb-1">
              &lt; 2 mins
            </p>
            <p className="text-gray-400 text-sm">Average Response Time</p>
          </div>
          <div className="text-center">
            <p className="text-white mb-1">
              1000+
            </p>
            <p className="text-gray-400 text-sm">Enquiries Resolved</p>
          </div>
          <div className="text-center">
            <p className="text-white mb-1">
              24/7
            </p>
            <p className="text-gray-400 text-sm">WhatsApp Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}