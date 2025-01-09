import { Link } from "react-router-dom";

const AllColleges = () => {
   const colleges = [
      {
         eiin_code : 112201,
         name : "University Of Baishal",
         photo : 'https://gstadmission.ac.bd/assets/img/uni_logos/barisal.jpg'                  
      },
      {
         eiin_code : 112202,
         name : "Jagannath University",
         photo : 'https://gstadmission.ac.bd/assets/img/uni_logos/jnu.png'                  
      },
      {
         eiin_code : 112203,
         name : "Patuakhali Science And Technology Universityl",
         photo : 'https://gstadmission.ac.bd/assets/img/uni_logos/pstu.png'                  
      },
      {
         eiin_code : 112204,
         name : "Islamic University",
         photo : 'https://gstadmission.ac.bd/assets/img/uni_logos/iu.jpeg'                  
      },
      {
         eiin_code : 112205,
         name : "Khulna University",
         photo : 'https://gstadmission.ac.bd/assets/img/uni_logos/ku.png'                  
      },
      {
         eiin_code : 112206,
         name : "Comilla University",
         photo : 'https://gstadmission.ac.bd/assets/img/uni_logos/cu.jpg'                  
      },
      {
         eiin_code : 112207,
         name : "Begum Rokeya University, Rangpur",
         photo : 'https://gstadmission.ac.bd/assets/img/uni_logos/bru.png'                  
      },
      {
         eiin_code : 112208,
         name : "Jatiya Kabi Kazi Nazrul Islam University",
         photo : 'https://gstadmission.ac.bd/assets/img/uni_logos/jkknu.png'                  
      },
   ]
   return (
      <div className="mx-3 py-12">
         <div className="mx-auto max-w-7xl space-y-6 border border-primary-500 rounded-lg pb-4">
            <h3 className="py-6 px-3 md:text-2xl sm:text-lg font-semibold text-white bg-primary-500 rounded-t-md">Click on the following links to learn more about the individual Colleges details.</h3>
            {
               colleges.map((college, i) => <div key={i} className="flex items-center space-x-4 px-4">
                  <img src={college.photo} alt="img" className="w-14 h-14 " />
                  <Link to={`/admission/${college.eiin_code}`} className="text-xl font-semibold text-primary-500 hover:underline">{college.name}</Link>
                  
               </div>)
            }
            
            
            
         </div>
      </div>
   );
};

export default AllColleges;