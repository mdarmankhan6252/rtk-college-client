import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AllColleges = () => {
   const axiosPublic = useAxiosPublic();

   const { data: colleges = [] } = useQuery({
      queryKey: ['collegeName'],
      queryFn: async () => {
         const { data } = await axiosPublic.get('/collegeName')
         return data
      }
   })

   return (
      <div className="mx-3 py-12">
         <div className="mx-auto max-w-7xl space-y-6 border border-primary-500 rounded-lg pb-4">
            <h3 className="py-6 px-3 md:text-2xl sm:text-lg font-semibold text-white bg-primary-500 rounded-t-md">Click on the following links to learn more about the individual Colleges details.</h3>
            {
               colleges.map((college, i) => <div key={i} className="flex items-center space-x-4 px-4">
                  <img src={college.photo} alt="img" className="w-14 h-14 " />
                  <Link to={`/admission/${college._id}`} className="text-xl font-semibold text-primary-500 hover:underline">{college.name}</Link>

               </div>)
            }



         </div>
      </div>
   );
};

export default AllColleges;