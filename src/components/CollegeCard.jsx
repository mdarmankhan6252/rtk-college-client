import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {

   const { collegeName, researchHistory, events, collegeImage } = college;
   return (
      <div className="border rounded-xl">
         <div>
            <img src={collegeImage} alt="" className="w-full h-[300px] object-cover rounded-t-xl" />
         </div>
         <div className="px-2 py-3 space-y-3">
            <div className="flex gap-4">
               {
                  events.map((event, i) => <span className="bg-green-50 border-green-200 border rounded-lg px-2 py-0.5 text-xs" key={i}>{event}</span>)
               }
            </div>
            <h2 className="text-lg font-semibold text-gray-700">{collegeName}</h2>
            <p className="text-[#959494]">{researchHistory.slice(0, 40)}...</p>


            <Link to={`/college/${college._id}`} className="inline-block text-sm font-serif bg-primary-500 hover:bg-primary-600 text-white px-3 py-1.5 rounded-lg">See Details</Link>
         </div>


      </div>
   );
};

export default CollegeCard;