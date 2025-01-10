import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const AdmissionForm = () => {
   const { photo, name, eiin_code } = useLoaderData();
   const { user } = useAuth();
   return (
      <div className="mx-3">
         <div className="flex items-center justify-center flex-col space-y-2 py-6">
            <img src={photo} alt="" className="w-16 h-16" />
            <h3 className="font-semibold text-gray-800">{name}</h3>
            <h3 className="text-lg font-semibold font-serif">EIIN Code : <span className="text-primary-500 font-sans">{eiin_code}</span></h3>
         </div>

         <form className="max-w-xl mx-auto space-y-4 p-10 border">
            <input defaultValue={user?.displayName} type="text" name="candidateName" id="" className="p-2 border outline-none focus:ring-1 ring-green-200 rounded-lg w-full" placeholder="Your Name" required />
            <input type="file" name="candidatePhoto" id="" className=" border outline-none focus:ring-1 ring-green-200 rounded-lg w-full file:p-2 file:border-none file:bg-green-50 file:cursor-pointer cursor-pointer file:placeholder:your Photo" required />
            <input type="email" name="candidateEmail" id="" className="p-2 border outline-none focus:ring-1 ring-green-200 rounded-lg w-full" placeholder="Your Email" defaultValue={user?.email} required />
            <input type="number" name="candidatePhone" id="" className="p-2 border outline-none focus:ring-1 ring-green-200 rounded-lg w-full" placeholder="Your Name" required />
            <input type="date" name="candidatePhone" id="" className="p-2 border outline-none focus:ring-1 ring-green-200 rounded-lg w-full" placeholder="Your Name" required />
            <select name="subject" className="p-2 border outline-none focus:ring-1 ring-green-200 rounded-lg w-full" >
               <option value="Bangla">Bangla</option>
               <option value="English">English</option>
               <option value="Mathematics">Mathematics</option>
               <option value="Physics">Physics</option>
               <option value="Chemistry">Chemistry</option>
               <option value="Biology">Biology</option>
               <option value="History">History</option>
               <option value="Geography">Geography</option>
               <option value="Economics">Economics</option>
               <option value="Management">Management</option>
            </select>
            <textarea rows={3} name="text" className="p-2 border outline-none focus:ring-1 ring-green-200 rounded-lg w-full" placeholder="Enter Your Address"></textarea>
            <input type="submit" value="Submit Application" className="p-3 text-white bg-primary-500 text-sm font-semibold hover:bg-primary-600 cursor-pointer" />
         </form>


      </div>
   );
};

export default AdmissionForm;