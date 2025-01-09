
const Title = ({title}) => {
   return (
      <div className="text-center space-y-4 max-w-2xl mx-auto px-3 py-12">
         <h1 className="text-2xl sm:text-3xl font-semibold">{title}</h1>
         <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nobis.</p>
      </div>
   );
};

export default Title;