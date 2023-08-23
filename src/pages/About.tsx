import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-4">About Us</h1>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        sagittis felis. Vivamus vel erat id urna congue ultricies. Aenean vitae
        dolor in dolor tristique efficitur. Fusce volutpat ligula nec elementum
        volutpat.
      </p>
      <p className="mt-4 text-gray-700">
        Nullam a tortor dignissim, volutpat nulla a, faucibus quam. Integer
        tincidunt diam eu orci pulvinar, sit amet bibendum dolor tristique.
        Aliquam erat volutpat. Nam facilisis urna et aliquam tristique.
      </p>
    </div>
  );
};

export default About;
