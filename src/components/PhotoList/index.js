import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {

  // useState Hook in the PhotoList component to manage the current photo state and make this data accessible to the Modal component through props
  const [currentPhoto, setCurrentPhoto] = useState();
  // conditionally render modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [photos] = useState([
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
    {
      name: 'Summer Photo',
      category: 'summer',
      description: 'Enjoy Summer Days!',
    },
        
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    {
      name: 'Fall Photo',
      category: 'fall',
      description: 'Colourful Fall Days!',
    },
    

    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    {
      name: 'Winter Photo',
      category: 'winter',
      description: 'Freezing Winter Time',
    },
    
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    {
      name: 'Spring Time',
      category: 'spring',
      description: 'Always Beautiful Spring!',
    },
    
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    // current photo
    setCurrentPhoto({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }
  return (
    <div>
      {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal}/>}

      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/images/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoList;