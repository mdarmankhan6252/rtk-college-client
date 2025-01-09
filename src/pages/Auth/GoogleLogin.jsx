import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const GoogleLogin = () => {
   const { signInWithGoogle } = useAuth();
   const axiosPublic = useAxiosPublic();
   const navigate = useNavigate();

   const handleGoogleLogin = async () => {
      await signInWithGoogle()
         .then((result) => {
            const postedUser = {
               name: result.user.displayName,
               photo: result.user.photoURL,
               email: result.user.email,
               role: 'general'
            }
            
            axiosPublic.post('/user', postedUser)
            .then(res => {
               if (res.data.insertedId) {
                  //
               }
            })
            navigate('/')
            toast.success("Sign In Successful!")

         })
         .catch(error => {
            if (error.message) {
               toast.error(error.message || 'Something went wrong!')
            }
         })
   }
   return (
      <div onClick={handleGoogleLogin} className="flex items-center justify-center space-x-2 bg-[#eeeded] p-2 cursor-pointer active:scale-[0.98] border rounded-lg">
         <FcGoogle className="text-3xl" />
         <span className="font-">Google</span>
      </div>
   );
};

export default GoogleLogin;