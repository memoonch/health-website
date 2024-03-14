import Header from "./Component/Hero/Hero/Header/Header";
import Hero from "./Component/Hero/Hero/Hero/Hero";
import Card_slider from "./Component/Hero/Hero/Card_slider/Card_slider";
import Empowering_image_txt from "./Component/Empowering_image_txt/Empowering_image_txt";
import Add_image_between from "./Component/add_image_between/Add_image_between";
import FAQ from "./Component/QA_com/QA_com";
import Countvalue from "./Component/Countvalue/Countvalue";
import Wellness_bonder from "./Component/Wellness_bonder/Wellness_bonder";
import Mindfullmusing from "./Component/Mindfull_musing/Mindfullmusing";
import UserFeedback from "./Component/User_Feedback/UserFeedback";
import Bord_JoinNow from "./Component/Bord_JoinNow/Bord_JoinNow";
import Socialbtn from "./Component/Socailbtn/Socailbtn";
import Form from "./Component/Form/Form";
import Footer from "./Component/Footer/Footer";
import Contact_component from "./Contact_component/Contact_component";
export default function Home() {
  return (
<>
<Header/>
<Hero/>
<Card_slider/>  
<Empowering_image_txt/>
<Add_image_between/>
{/* <FAQ/> */}
<Countvalue/>
<Wellness_bonder/>
<Mindfullmusing/>
<UserFeedback/>
<Bord_JoinNow/>
<Socialbtn/>
{/* <Form/> */}
<Contact_component/>
<Footer/>
</>
  );
}
