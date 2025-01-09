import { useEffect, useState } from "react";
import CollegeCard from "../../components/CollegeCard";
import Title from "../../shared/Title";
import { Link } from "react-router-dom";

const PopularColleges = () => {
   const [colleges, setColleges] = useState([]);
   useEffect(() => {
      fetch('college.json')
         .then(res => res.json())
         .then(data => setColleges(data))
   }, [])

   console.log(colleges);

   return (
      <div className="max-w-7xl mx-auto px-3">
         <Title title="Our Popular Colleges" />

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
               colleges.map((college, i) => <CollegeCard key={i} college={college} />)
            }
         </div>
         <div className="py-6 text-center">
            <Link to='/colleges' className="inline-block text-sm font-serif bg-primary-500 hover:bg-primary-600 text-white px-3 py-3 rounded-lg">See More Colleges</Link>
         </div>
      </div>
   );
};

export default PopularColleges;