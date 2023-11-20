import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Box from '@mui/material/Box';

const FeaturedMedia = ({ image }) => {
  const imageData = getImage(image?.node?.imageFile);

  if (!imageData) return null;

  return (
    <Box>
      <GatsbyImage alt={image?.node?.altText ?? process.env.SITE_NAME} image={imageData}/>
    </Box>
  );
};

export default FeaturedMedia;
