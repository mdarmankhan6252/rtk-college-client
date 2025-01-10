import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { GiSpinningRibbons } from "react-icons/gi";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";


const AdmissionForm = () => {
   const { photo, name, eiin_code } = useLoaderData();
   const { user } = useAuth();
   const axiosPublic = useAxiosPublic();

   const imgUpload = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBB_api_key}`

   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();


   const handleApplication = async e => {
      e.preventDefault();
      setLoading(true)
      const form = e.target;
      const candidateName = form.candidateName.value;
      const currentPhoto = form.candidatePhoto.files[0];
      const candidateEmail = form.candidateEmail.value;
      const candidatePhone = form.candidatePhone.value;
      const candidateDateOfBirth = form.candidateDateOfBirth.value;
      const subject = form.subject.value;
      const address = form.address.value;
      const collegeName = name;
      const collegePhoto = photo;
      const collegeEiinCode = eiin_code

      if (!currentPhoto) {
         return toast.error("Please upload a photo.")
      }
      const formData = new FormData();
      formData.append("image", currentPhoto);

      const res = await axios.post(imgUpload, formData, {
         headers: {
            "Content-Type": "multipart/form-data"
         }
      })
      const candidatePhoto = res.data.data.display_url;

      if (res.data.success) {
         const application = { candidateName, candidatePhone, candidateEmail, candidatePhoto, candidateDateOfBirth, subject, address, collegeName, collegePhoto, collegeEiinCode }
         
         const res = await axiosPublic.post('/candidate', application)
         if(res.data.insertedId){
            toast.success("Your application has been submitted successfully!")
            form.reset();
            setLoading(false)
            navigate('/my-college')
         }
      }

   }
   return (
      <div className="mx-3">
         <div className="flex items-center justify-center flex-col space-y-2 py-6">
            <img src={photo} alt="" className="w-16 h-16" />
            <h3 className="font-semibold text-gray-800">{name}</h3>
            <h3 className="text-lg font-semibold font-serif">EIIN Code : <span className="text-primary-500 font-sans">{eiin_code}</span></h3>
         </div>

         <form onSubmit={handleApplication} className="max-w-xl mx-auto space-y-4 p-10 border">
            <input defaultValue={user?.displayName} type="text" name="candidateName" id="" className="p-2 border outline-none focus:ring-1 ring-green-200 rounded-lg w-full" placeholder="Your Name" required />

            <input type="file" name="candidatePhoto" id="" className=" border outline-none focus:ring-1 ring-green-200 rounded-lg w-full file:p-2 file:border-none file:bg-green-50 file:cursor-pointer cursor-pointer file:placeholder:your Photo" required />

            <input type="email" name="candidateEmail" id="" className="p-2 border outline-none focus:ring-1 ring-green-200 rounded-lg w-full" placeholder="Your Email" defaultValue={user?.email} required />

            <input type="number" name="candidatePhone" id="" className="p-2 border outline-none focus:ring-1 ring-green-200 rounded-lg w-full" placeholder="Your Mobile" required />

            <input type="date" name="candidateDateOfBirth" id="" className="p-2 border outline-none focus:ring-1 ring-green-200 rounded-lg w-full" placeholder="Your Name" required />

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
            <textarea rows={3} name="address" className="p-2 border outline-none focus:ring-1 ring-green-200 rounded-lg w-full" placeholder="Enter Your Address" ></textarea>

            <button className="p-3 text-white bg-primary-500 text-sm font-semibold hover:bg-primary-600 cursor-pointer min-w-40 mx-auto">
               {
                  loading ? <GiSpinningRibbons className="text-xl animate-spin mx-auto " /> : <span>Application Submit</span>
               }
               
               
            </button>
         </form>


      </div>
   );
};

export default AdmissionForm;