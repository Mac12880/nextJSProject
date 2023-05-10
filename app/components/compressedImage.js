import React, { useState } from 'react';
import Resizer from 'react-image-file-resizer';

function CompressedImage() {
  const [compressedImage, setCompressedImage] = useState(null);

  const handleInputChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        Resizer.imageFileResizer(
          file,
          500, // set maximum width
          500, // set maximum height
          'JPEG', // set output format
          60, // set quality (0 to 100)
          50, // set maximum size in kilobytes
          (compressedImage) => {
            setCompressedImage(compressedImage);
          },
          'base64' // set encoding type
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleInputChange} />
      {compressedImage && (
        <img src={compressedImage} alt="Compressed Image" />
      )}
    </div>
  );
}

export default CompressedImage;
