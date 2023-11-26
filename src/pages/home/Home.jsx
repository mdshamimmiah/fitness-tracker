import Footer from "../Footer";
import AboutUs from "./AboutUs";
import Banner1 from "./Banner1";
import FeatureSection from "./FeatureSection";
import NewsLetter from "./NewsLetter";
import TeamSection from "./TeamSection";
import Testimonial from "./testimonials";


const Home = () => {
    return (
        <div>
            <Banner1></Banner1>
            <FeatureSection></FeatureSection>
            <AboutUs></AboutUs>
            <Testimonial></Testimonial>
            <NewsLetter></NewsLetter>
            <TeamSection></TeamSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;