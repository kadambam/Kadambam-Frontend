import React from "react";
import { Building2, Clock4, ShieldCheck, Users } from "lucide-react";
import Footer from "../Page-1/Footer";

const AboutUs = () => {
  return (
    <div className="">
 <section className="bg-[#F8F8F8] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-black text-center mb-6 font-[Orbitron]">
          About <span className="text-[#FF4A2A]">Kadamban Group</span>
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto text-lg mb-10">
          Since 2020, Kadamban Group has been a driving force in construction, architecture,
          interiors, real estate, and property management—delivering excellence with precision
          and innovation.
        </p>

        <div className="bg-white shadow-xl rounded-2xl p-8 grid md:grid-cols-2 gap-10 border border-gray-200">
          <div className="space-y-5">
            <p className="text-gray-800 text-base leading-relaxed">
              At Kadamban Group, we don’t just build structures—we create legacies. With an
              impressive track record of <strong>55+ completed projects</strong> and
              <strong> 10+ ongoing developments</strong>, we’ve become a trusted name in the industry.
              Our strength lies in blending innovation with precision to deliver quality
              structures that last.
            </p>
            <p className="text-gray-800 text-base leading-relaxed">
              Backed by expert architects, engineers, and designers, we bring life to spaces—
              from luxurious residences and commercial spaces to large-scale industrial
              developments. Every project is a promise of strength, style, and sustainability.
            </p>
            <p className="text-gray-800 text-base leading-relaxed">
              We value time as much as quality. With our streamlined process, we ensure
              <strong> on-time delivery</strong> without compromising excellence. Your vision is
              our blueprint—and we take pride in turning it into reality.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-[#FF4A2A]" size={28} />
              <div>
                <h4 className="font-semibold text-black">Excellence</h4>
                <p className="text-sm text-gray-600">Premium quality & durability in every detail.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Building2 className="text-[#FF4A2A]" size={28} />
              <div>
                <h4 className="font-semibold text-black">55+ Projects</h4>
                <p className="text-sm text-gray-600">Proven track record of successful ventures.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock4 className="text-[#FF4A2A]" size={28} />
              <div>
                <h4 className="font-semibold text-black">On-Time Delivery</h4>
                <p className="text-sm text-gray-600">Timely execution without compromising quality.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="text-[#FF4A2A]" size={28} />
              <div>
                <h4 className="font-semibold text-black">Client-Centric</h4>
                <p className="text-sm text-gray-600">Customer satisfaction is our top priority.</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-700 text-base mt-10 max-w-4xl mx-auto">
          With every foundation we lay and every structure we build, we reinforce our promise
          of <strong>trust, innovation, and long-term value</strong>. Kadamban Group isn't just
          about construction—it's about crafting landmarks that inspire.
        </p>
      </div>
      
    </section>

    <Footer/>
    </div>
   
  );
};

export default AboutUs;
