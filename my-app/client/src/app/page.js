import Frist from "./components/frist";
import Partners from "./components/partners";
import Resources from "./components/resr";
import Datalife from "./components/datalife";
import Tools from "./components/tools";
import Slide from "./components/slide";
import Footer from "./components/footer";
import Aboutus from "./components/aboutus";
const Page = () => {
  return (
    <div>
    <Frist/>

      <Partners />
 
      <Resources />
   
  <Datalife />
  <div style={{height: "400px"}}></div>
       <Tools />

      <Slide/>
      <div style={{height: "400px"}}></div>
      <Footer />
    </div>
  );
};

export default Page;

