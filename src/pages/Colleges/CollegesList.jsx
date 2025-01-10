import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import CollegeCard from "../../components/CollegeCard";
import { useEffect, useState } from "react";

const CollegesList = () => {
   const axiosPublic = useAxiosPublic();
   const [searchText, setSearchText] = useState('');
   const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);

   // Debounce the search input to avoid unnecessary API calls
   useEffect(() => {
      const timeoutId = setTimeout(() => {
         setDebouncedSearchText(searchText);
      }, 500); // Adjust the debounce delay as needed

      return () => clearTimeout(timeoutId);
   }, [searchText]);

   const handleSearch = e => {
      setSearchText(e.target.value);
   }

   const { data: colleges = [] } = useQuery({
      queryKey: ['colleges', debouncedSearchText],
      queryFn: async () => {
         const { data } = await axiosPublic(`/colleges?search=${debouncedSearchText}`);
         return data;
      },
      enabled: true, // Always enabled, since we want to trigger the query when the debounced search changes
   });

   return (
      <div>
         <p className="text-center font-semibold text-xl pt-4 text-primary-500">Colleges : {colleges.length}</p>
         <div className="my-10 max-w-xl border mx-auto flex rounded-full">
            <input onChange={handleSearch} type="text" name="search" placeholder="Search by College Name" className="p-3 font-semibold text-gray-400 outline-none rounded-full flex-grow" />
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-3">
            {
               colleges.map((college, i) => <CollegeCard key={i} college={college} />)
            }
         </div>

      </div>
   );
};

export default CollegesList;