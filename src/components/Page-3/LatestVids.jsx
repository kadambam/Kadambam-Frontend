import { ArrowBigRight } from 'lucide-react';
import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { HiChevronRight } from "react-icons/hi";


const videos = [
    { id: "dQw4w9WgXcQ", title: "How to Grow Your Business Online", description: "Learn the top strategies to expand your business digitally." },
    { id: "3JZ_D3ELwOQ", title: "Best Video Editing Tips", description: "Boost your editing skills with these pro-level techniques." },
    { id: "LXb3EKWsInQ", title: "Social Media Marketing in 2024", description: "Master the latest trends in social media marketing." },
    { id: "ZZ5LpwO-An4", title: "Website Development for Beginners", description: "Step-by-step guide to building your first website." },
    { id: "H2DZWV5erEs", title: "Branding Strategies Explained", description: "How to create a strong and unique brand identity." },
    { id: "e-ORhEE9VVg", title: "YouTube Growth Secrets", description: "Tips to increase your YouTube subscribers and views." },
  ];

  // Duplicate videos for seamless infinite loop
const repeatedVideos = [...videos, ...videos];

const LatestVids = () => {
    const [playingVideo, setPlayingVideo] = useState(null);
  return (
    <motion.div 
      className="latest-vids-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
        <div className="vids-title text-center my-10">
        <h2 className=" top-4 left-10 text-4xl font-bold">
                    <span className="relative">
                        Watch Our
                        <span className="absolute left-0 bottom-0 w-full h-1 bg-[#ff4a2a]"></span>
                    </span>
                    <span className="text-[#ff4a2a]"> Latest Videos...</span>
                </h2>
        </div>

        <div className="vids-container px-10">
        <div className="w-full">
            <div className="vid-tit flex justify-between">
            <h2 className="font-bold mb-6 text-gray-600 text-2xl">
       <p>Check out some of our customer reviews</p>
      </h2>
      <p className='text-[#ff4a2a] font-bold flex'>View More  <HiChevronRight className="m-1 w-5 h-5" /></p>
                </div>
                       
      
      <motion.div 
        className="relative overflow-hidden py-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <div className="video-slider group gap-6">
          {repeatedVideos.map((video, index) => (
            <motion.div 
              key={index} 
              className="video-card hover:shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="video-thumbnail p-2" onClick={() => setPlayingVideo(video.id)}>
                {playingVideo === video.id ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    allow="autoplay"
                    title={video.title}
                  ></iframe>
                ) : (
                  <>
                    <img className="w-full h-full object-cover rounded-md" src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} alt={video.title} />
                    <FaPlay className="play-icon" />
                  </>
                )}
              </div>
              <p className="mt-4 font-semibold text-lg px-4">{video.title}</p>
              <p className="text-gray-600 p-4">{video.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
        </div>
    </motion.div>
  )
}

export default LatestVids
