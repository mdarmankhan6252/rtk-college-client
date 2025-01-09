import Review from "../Review/Review";
import Banner from "./Banner";
import Gallery from "./Gallery";
import PopularColleges from "./PopularColleges";
import Research from "./Research";

const Home = () => {
   return (
      <div>
         <Banner />
         <PopularColleges />
         <Gallery />
         <Research />
         <Review />
      </div>
   );
};

export default Home;