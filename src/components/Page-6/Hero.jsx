const Hero = () => {
    return (
      <>
        {/* Hero Section */}
        <section
          className="relative w-full h-[300px] md:h-[400px] flex items-center bg-cover bg-center"
          style={{
            backgroundImage: "url('https://picsum.photos/1600/900')", // Sample image from Picsum
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0" style={{ background: "rgba(0, 0, 0, 0.3)" }}></div>
  
          {/* Content */}
          <div className="relative z-10 px-6 md:px-16 lg:px-24 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold text-shadow">
              Get in Touch
            </h2>
            <p className="text-xl md:text-2xl font-bold text-yellow-400 tracking-wide">
              With Our Experts
            </p>
            <p className="text-sm md:text-base text-gray-300 max-w-md mt-2">
              We’d love to hear your ideas & requirements. Fill out the form
              below, and we will get in touch within 24 hours.
            </p>
          </div>
        </section>
      </>
    );
  };
  
  export default Hero;
  