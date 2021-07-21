import React, { useState } from 'react';

const PhotoList = ({ category }) => {

    // useState Hook in the PhotoList component to manage the current photo state and make this data accessible to the Modal component through props
    const [currentPhoto, setCurrentPhoto] = useState();

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

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/images/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoList;