import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { useLocation } from 'react-router-dom';

const EventDetailPage = () => {
  const {state}=useLocation()
  console.log(state)
  // const [galleryImages, setGalleryImages] = useState([
  //   {
  //     original: event.image,
  //     thumbnail: event.image,
  //     description: event.title
  //   },
  //   // add additional images to galleryImages as needed
  // ]);

  return (
    <div className="event-detail-page">
      <div className="event-image-gallery">
        {/* <ImageGallery items={state.image} showPlayButton={false} showFullscreenButton={false} /> */}
      </div>

      <div className="event-details">
        <h1>{state.title}</h1>
        <p>{state.date}</p>
        <p>{state.description}</p>
        <button>RSVP</button>
      </div>
    </div>
  );
};

export default EventDetailPage;

