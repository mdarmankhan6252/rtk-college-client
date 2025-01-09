import { Link } from 'react-router-dom';
import banner_video from '../../assets/banner.mp4';

const Banner = () => {
   return (
      <div className="relative w-full py-16 sm:py-32 md:py-44 lg:py-60 xl:py-72 flex items-center justify-center">
         {/* Background Video */}
         <video
            className="absolute inset-0 w-full h-full object-cover"
            src={banner_video}
            autoPlay
            loop
            muted
            playsInline
         ></video>
         
         {/* Overlay */}
         <div className="absolute inset-0 bg-black bg-opacity-60"></div>
         
         {/* Content */}
         <div className="relative text-center text-white space-y-5 max-w-3xl px-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif uppercase font-semibold">
               RTK Degree & College
            </h1>
            <p className="text-sm">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
               praesentium consectetur voluptatum labore soluta eum obcaecati officia
               tenetur quidem fugit.
            </p>
            <Link
               to="/colleges"
               className="px-6 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition duration-300 inline-block"
            >
               Browse Colleges
            </Link>
         </div>
      </div>
   );
};

export default Banner;
