import { useLoaderData, useNavigate } from "react-router-dom";

const CollegeDetails = () => {
   const { collegeName, collegeImage, admissionDates, researchHistory, events, sports } = useLoaderData();
   const navigate = useNavigate();
   
   return (
      <div className="max-w-7xl mx-auto px-3 rounded-xl my-12 space-y-5">
         <div className="flex items-center justify-between">
            <span onClick={() => navigate(-1)} className="text-lg hover:underline font-semibold cursor-pointer hover:text-primary-500">Go Back</span>
            <h3 className="pr-1"><span className="font-semibold">Admission Date :</span> <span className="text-primary-500"> {admissionDates}</span></h3>
         </div>
         <img src={collegeImage} alt="" className="w-full rounded-xl max-h-[70vh] object-cover" />
         <p className="text-2xl sm:text-4xl font-semibold ">{collegeName}</p>

         <div className="flex gap-4">
            <span className="text-lg font-semibold font-serif text-gray-700">Events : </span>
            {
               events.map((event, i) => <span className="bg-green-50 border-green-200 border rounded-lg px-2 py-1.5 text-xs" key={i}>{event}</span>)
            }
         </div>

         <div className="flex gap-4">
            <span className="text-lg font-semibold font-serif text-gray-700">Sports : </span>
            {
               sports.map((event, i) => <span className="bg-pink-50 border-pink-200 border rounded-lg px-2 py-1.5 text-xs" key={i}>{event}</span>)
            }
         </div>

         <p className="text-lg text-[#949495]">{researchHistory}</p>


      </div>
   );
};

export default CollegeDetails;