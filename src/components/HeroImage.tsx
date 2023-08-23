import React from "react";

interface HeroImageProps {
  imageUrl: string;
  text: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, text }) => {
  return (
    <div className="bg-center relative">
      <img
        src={imageUrl}
        alt="Dynamic Image"
        className="w-full h-auto rounded-md mb-2"
      />
      <div className="absolute bottom-10 container mx-auto text-center text-white">
        <h4 className="text-4xl font-bold mb-4">{text}</h4>
      </div>
    </div>
  );
};

export default HeroImage;
