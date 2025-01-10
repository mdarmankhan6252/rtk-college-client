import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import Title from "../../shared/Title";
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const MyCollege = () => {
   const axiosPublic = useAxiosPublic();
   const navigate = useNavigate()
   const { user } = useAuth();

   const { data: applications = [], refetch } = useQuery({
      queryKey: ['applications', user?.email],
      queryFn: async () => {
         const { data } = await axiosPublic.get(`/candidate?email=${user?.email}`)
         return data;
      }
   })


   const handleDelete = async id => {
      console.log(id);
      const res = await axiosPublic.delete(`/candidate/${id}`)
      console.log(res);
      if (res.data.deletedCount > 0) {
         toast.success("You application has been deleted.")
         navigate('/admission')
         refetch()
      }

   }

   console.log(applications)
   return (
      <div className="max-w-7xl mx-auto px-3">
         <Title title="My Application" />

         {
            applications.length > 0 ? <div className="">
            <div className="overflow-x-auto">
               <table className="min-w-full text-xs border *:border">
                  <colgroup>
                     <col />
                     <col />
                     <col />
                     <col />
                     <col />
                     <col />
                  </colgroup>
                  <thead>
                     <tr className="text-left">
                        <th className="p-3">SL</th>
                        <th className="p-3">Logo</th>
                        <th className="p-3">College</th>
                        <th className="p-3">Subject</th>
                        <th className="p-3">EIIN</th>
                        <th className="p-3">Delete</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        applications.map((application, i) => <tr key={i} className="border">
                           <td className="p-3">
                              <p>{i + 1}</p>
                           </td>
                           <td className="p-3">
                              <img src={application.collegePhoto} className="w-10 h-10 object-cover" />
                           </td>
                           <td className="p-3">
                              <p>{application.collegeName.slice(0, 20)}</p>
                           </td>
                           <td className="p-3">
                              <p>{application.subject}</p>
                           </td>
                           <td className="p-3">
                              <p>{application.collegeEiinCode}</p>
                           </td>


                           <td onClick={() => handleDelete(application._id)} className="p-3">
                              <span className="px-3 py-1 font-semibold rounded-md bg-red-500 text-white cursor-pointer">
                                 <span>Delete</span>
                              </span>
                           </td>
                        </tr>)
                     }



                  </tbody>
               </table>
            </div>
         </div> : <div className="py-24 text-center">
            <h2 className="text-4xl font-semibold font-serif">No Application has been added.</h2>
            <Link to='/admission' className="inline-block bg-primary-500 text-white font-semibold text-sm py-2 px-6 rounded-lg mt-6">Brows Colleges</Link>
         </div>
         }

         

      </div>
   );
};

export default MyCollege;