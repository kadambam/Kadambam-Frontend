import { ArrowBigRight } from 'lucide-react';
import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { HiChevronRight } from "react-icons/hi";


const videos = [
  {
    id: "6h3g2ImdMlk",
    title: "Best Office Design",
    description: "modern office design ideas, latest office design"
  },
  {
    id: "PXvEA4AcPlI",
    title: "House Elevation Design",
    description: "Current Trends in House Elevation Design "
  },
  {
    id: "dWduKO9xAak",
    title: "MODERN SMALL OFFICE",
    description: "MODERN SMALL OFFICE INTERIOR DESIGN"
  },
  {
    id: "NszxBNeM-Bg",
    title: "Hall interior design",
    description: "Best hall Interior design"
  },
  {
    id: "aT5Yc3xDohU",
    title: "Latest House Elevation",
    description: "Top Trends in Modern Home Design !"
  },
  {
    id: "1j0UhTJ1fpw",
    title: "Modern home Elevation ",
    description: "two floor elevation | kadamban architect."
  }
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
                        <span className="absolute left-0 bottom-[-6px] w-full h-1 bg-[#ff4a2a]"></span>
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
      <a
  href="https://www.youtube.com/@houseelevationdesign" // ⬅️ Replace this with your blog URL
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#ff4a2a] font-bold flex items-center hover:underline"
>
  View More <HiChevronRight className="ml-1 w-5 h-5" />
</a>

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
