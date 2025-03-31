import React from "react";
import architectImage from "../../assets/architect.png"; // Importing the image

const InfogramProcess = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      {/* Image Display */}
      <img 
        src={architectImage} 
        alt="Infogram Process" 
        className="w-auto h-auto max-w-full max-h-full" 
      />
    </div>
  );
};

export default InfogramProcess;
