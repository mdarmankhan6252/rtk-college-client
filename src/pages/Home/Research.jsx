import ResearchCard from "../../components/ResearchCard";
import Title from "../../shared/Title";

const Research = () => {
   const researches = [
      {
         id: 1,
         image: "https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=300",
         title: "Exploring the Wonders of Quantum Computing",
         desc: "A comprehensive study of quantum mechanics applied to computing, detailing algorithms and future implications."
      },
      {
         id: 2,
         image: "https://images.pexels.com/photos/5904936/pexels-photo-5904936.jpeg?auto=compress&cs=tinysrgb&w=300",
         title: "The Impact of AI on Modern Education",
         desc: "An analysis of artificial intelligence in education, focusing on adaptive learning and virtual classrooms."
      },
      {
         id: 3,
         image: "https://images.pexels.com/photos/3768126/pexels-photo-3768126.jpeg?auto=compress&cs=tinysrgb&w=300",
         title: "Sustainable Energy Innovations",
         desc: "Research on renewable energy sources and technological advancements to combat climate change."
      },
      {
         id: 4,
         image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=300",
         title: "Genetic Engineering and Its Ethical Implications",
         desc: "A study on the advancements in genetic engineering and the ethical questions surrounding its applications."
      }
   ];

   return (
      <div className="max-w-7xl px-3 mx-auto">
         <Title title="Our Popular Research Papers" />

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {
               researches.map((research, i) => <ResearchCard key={i} research={research}/>)
            }
         </div>

      </div>
   );
};

export default Research;