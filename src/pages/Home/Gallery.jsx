import { useState } from 'react';
import image_url from '../../assets/banner.jpg'
import Title from '../../shared/Title';

const Gallery = () => {
   const images = [
    {
      id : 1,
      image : "https://images.pexels.com/photos/30079705/pexels-photo-30079705/free-photo-of-graduation-ceremony-with-laurel-crown-celebration.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id : 2,
      image : "https://images.pexels.com/photos/9829316/pexels-photo-9829316.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id : 3,
      image : "https://images.pexels.com/photos/8106683/pexels-photo-8106683.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id : 4,
      image : "https://images.pexels.com/photos/2517759/pexels-photo-2517759.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id : 5,
      image : "https://images.pexels.com/photos/7972741/pexels-photo-7972741.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id : 6,
      image : "https://images.pexels.com/photos/8093017/pexels-photo-8093017.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id : 7,
      image : "https://images.pexels.com/photos/7944037/pexels-photo-7944037.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id : 8,
      image : "https://images.pexels.com/photos/7942538/pexels-photo-7942538.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id : 9,
      image : "https://images.pexels.com/photos/8127326/pexels-photo-8127326.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id : 10,
      image : "https://images.pexels.com/photos/1139317/pexels-photo-1139317.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
   ]
   const [selectedImage, setSelectedImage] = useState(null);

   const handleImageClick = (image) =>{
      setSelectedImage(image)
   }

   const closeModal = () =>{
      setSelectedImage(null)
   }
   return (
      <div className="max-w-7xl mx-auto px-3">
      <Title title="Our Image Gallery" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {images.map((image, i) => (
          <img
            key={i}
            src={image.image}
            alt={`Gallery ${i + 1}`}
            className="border rounded-xl hover:scale-105 duration-300 cursor-pointer"
            onClick={() => handleImageClick(image.image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg scale-50 md:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 hover:bg-gray-600 rounded-full p-2"
              onClick={closeModal}
            >
              ✖
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-2xl max-h-96 rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
   );
};

export default Gallery;