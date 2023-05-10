import React, { useState, useEffect } from 'react';
import Resizer from 'react-image-file-resizer';

function CompressedImage() {
    const [imageDataUrl, setImageDataUrl] = useState(null);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
  
      if (imageUrl) {
        setImageDataUrl(imageUrl);
      }
    };
  
    useEffect(() => {
      if (imageDataUrl) {
        return () => URL.revokeObjectURL(imageDataUrl);
      }
    }, [imageDataUrl]);
  
    return (
      <div>
        <input type="file" onChange={handleImageChange} />
        {imageDataUrl && <img src={imageDataUrl} alt="Image Preview" />}
      </div>
    );
}

export default CompressedImage;