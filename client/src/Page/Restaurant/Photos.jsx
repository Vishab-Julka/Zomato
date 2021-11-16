import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

// components
import PhotosCollection from "../../components/Restaurant/PhotosCollection";

const Photos = () => {
  const [photos, setPhotos] = useState(["https://b.zmtcdn.com/data/pictures/chains/3/3900043/a3f876979c7b1a123ff8d0548d774cb1.jpg","https://b.zmtcdn.com/data/pictures/chains/3/3900043/1adb116d088669540c89150836d668f9.jpg?output-format=webp"]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);
  return (
    <div className="my-8">
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImg}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}
      <div className="flex flex-wrap gap-2">
      {photos.map((photo) => (
        <PhotosCollection image={photo} openViewer={openViewer} />
      ))}
      </div>
    </div>
  );
};

export default Photos;
