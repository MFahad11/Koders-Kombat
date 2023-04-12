import ImageGallery from 'react-image-gallery';
import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  
  const galleryOptions = {
    showThumbnails: false,
    showPlayButton: false,
    autoPlay: true,
    slideInterval: 5000
  };

  return (
    <div className="gallery-wrapper">
      <ImageGallery items={images} {...galleryOptions} />
    </div>
  );
};

export default Gallery;

