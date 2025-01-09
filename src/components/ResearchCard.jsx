import { Link } from "react-router-dom";

const ResearchCard = ({ research }) => {
   const {image,desc, title } = research;
   return (
      <div className="border rounded-xl">
         <div>
            <img src={image} alt="" className="w-full h-[250px] object-cover rounded-t-xl" />
         </div>
         <div className="px-2 py-3 space-y-3">
         
            <Link to='/' className="text-lg font-semibold text-gray-700 hover:underline">{title}</Link>
            <p className="text-[#959494]">{desc.slice(0, 40)}...</p>
         </div>
      </div>
   );
};

export default ResearchCard;