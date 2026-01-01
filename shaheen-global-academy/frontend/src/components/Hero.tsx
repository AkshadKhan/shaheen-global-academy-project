import heroImage from '../assets/bg.png';

export function Hero() {
  return (
    <section className="relative overflow-hidden w-full" style={{ marginTop: '46px', minHeight: 'calc(100vh - 84px)' }}>
      {/* Background container for video/gif - add your video/gif here later */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover object-center blur-[1.5px]" />
        {/* Replace with video if needed: */}
        {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="your-video.mp4" type="video/mp4" />
        </video> */}
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-6 py-20 relative z-10 min-h-[calc(100vh-84px)] flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
          {/* Left Content */}
          <div className="flex-1 text-white max-w-3xl">
            <div className="space-y-6 mb-12">
              <div className="space-y-3">
                <h1 className="text-white text-[64px] leading-none tracking-tight" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}>
                  Shaheen Global Academy
                </h1>
                <div className="flex items-center gap-3">
                  <div className="h-px w-12 bg-[#9ae600]"></div>
                  <span className="text-[#9AE600] text-sm tracking-wider uppercase">
                    Katauli, Lucknow
                  </span>
                </div>
              </div>
              <p className="text-white/80 max-w-xl text-xl leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
                Empowering students to seize opportunities through excellence in education.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href='#enquiry' className="border border-[#9AE600] text-white max-w-fit px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-[#9AE600] hover:text-gray-900 hover:shadow-lg hover:scale-105 font-semibold">
                Visit Now {/*goes to same admissin form as above in admission in header*/}
              </a>
            </div>
          </div>

          {/* Right Content - Specifications */}
        </div>
      </div>
    </section>
  );
}