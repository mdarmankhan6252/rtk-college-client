import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
   const { signInWithGoogle } = useAuth();
   const navigate = useNavigate();

   const handleGoogleLogin = async () => {
      await signInWithGoogle()
         .then(() => {
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