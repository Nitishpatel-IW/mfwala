import AboutSection from "../../components/sections/about";
import Dreams from "../../components/sections/dreams";
import Faq from "../../components/sections/faq";
import Footer from "../../components/sections/footer";
import Kyc from "../../components/sections/kyc";
import LandingPage from "../../components/sections/landingPage";
import Redeem from "../../components/sections/redeem";
import SimpleSteps from "../../components/sections/simpleSteps";


const HomePage = () => {
  return (
    <>
        <LandingPage/>
        <Dreams/>
        <AboutSection/>
        <Redeem/>
        <SimpleSteps/>
        <Kyc/>
        <Faq/>
        <Footer/>
    </>
  );
};

export default HomePage;
