import CollegeCard from "../../components/CollegeCard";
import Title from "../../shared/Title";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query"

const PopularColleges = () => {
   const axiosPublic = useAxiosPublic();

   const { data: colleges = [], } = useQuery({
      queryKey: ['popularCollege'],
      queryFn: async () => {
         const { data } = await axiosPublic('/popularCollege')
         return data;
      }
   })


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