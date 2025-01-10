import admissionImg from '../assets/admission.jpg'
import { Link } from 'react-router-dom'

const SharedBanner = ({ title }) => {
   return (
      <div className='mx-3'>
         <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${admissionImg})`, }} className='max-w-7xl px-3 mx-auto rounded-md  flex items-center justify-center bg-cover my-3 flex-col'>

            <h2 className='text-white text-3xl sm:text-4xl py-16 bg-center bg-cover'>{title}</h2>
            <ul className='*:bg-white *:py-1.5 *:px-3 space-x-0.5 text-sm font-semibold *:w-32 *:inline-block text-center'>
               <Link to='/' className='rounded-tl-md'>Home</Link>
               <Link to='/my-college' className='rounded-tr-md'>My College</Link>
            </ul>

         </div>
      </div>
   );
};

export default SharedBanner;