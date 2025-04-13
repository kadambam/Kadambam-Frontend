import React from "react";
import { motion } from "framer-motion";
import { HiChevronRight } from "react-icons/hi";

const blogs = [
    { id: 1, image: "https://picsum.photos/300/200?random=1", title: "The Future of Digital Marketing", description: "Explore upcoming trends in online marketing." },
    { id: 2, image: "https://picsum.photos/300/200?random=2", title: "Web Development Best Practices", description: "Improve your coding skills with these expert tips." },
    { id: 3, image: "https://picsum.photos/300/200?random=3", title: "Social Media Growth Hacks", description: "Boost your engagement with these simple techniques." },
    { id: 4, image: "https://picsum.photos/300/200?random=4", title: "Branding Strategies That Work", description: "Create a strong and memorable brand presence." },
    { id: 5, image: "https://picsum.photos/300/200?random=5", title: "Content Creation Guide", description: "Learn how to produce high-quality content consistently." },
    { id: 6, image: "https://picsum.photos/300/200?random=6", title: "SEO for Beginners", description: "Start ranking higher on search engines with these tips." },
];

// Duplicate blogs for infinite loop effect
const repeatedBlogs = [...blogs, ...blogs];

const LatestBlog = () => {
  return (
    <motion.div 
      className="latest-blog-container bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <div className="blog-title text-center my-10">
        <h2 className="top-4 left-10 text-4xl font-bold py-6">
          <span className="relative">
            Our
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#ff4a2a]"></span>
          </span>
          <span className="text-[#ff4a2a]"> Latest Blogs</span>
        </h2>
      </div>

      <div className="blog-container px-10">
        <div className="w-full">
          <div className="blog-tit flex justify-between">
            <h2 className="font-bold mb-6 text-gray-600 text-2xl">
              <p>Check out our latest insights</p>
            </h2>
                  <p className='text-[#ff4a2a] font-bold flex'>View More  <HiChevronRight className="m-1 w-5 h-5" /></p>
            
          </div>

          <div className="relative overflow-hidden pb-10">
            <motion.div 
              className="blog-slider group gap-6"
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              viewport={{ once: false }}
            >
              {repeatedBlogs.map((blog, index) => (
                <motion.div 
                  key={index} 
                  className="blog-card p-2 bg-gray-50 hover:shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  <div className="blog-thumbnail">
                    <img className="w-full h-full object-cover " src={blog.image} alt={blog.title} />
                  </div>
                  <p className="mt-4 font-semibold text-lg px-4">{blog.title}</p>
                  <p className="text-gray-600 p-4">{blog.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LatestBlog;
