
import AboutUs from "./AboutUs";
import Article from "./Article";
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
            <Article></Article>
            <NewsLetter></NewsLetter>
            <TeamSection></TeamSection>
        </div>
    );
};

export default Home;