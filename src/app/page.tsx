
import AboutUs from "@/components/AboutUs";
import Contactus from "@/components/Contactus";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Team from "@/components/Team";
import TotalProject from "@/components/TotalProject";


export default function Home() {
  return (
      <>
          <section className='z-10'>
              <Hero />
          </section>
          <section className="  ">
             <Portfolio />
           
          </section>
          <section className="bg-[#121111] pb-[80px] ">
             <AboutUs />
          </section>
          <section className="bg-[#121111] pb-[80px] ">
             <Services />
          </section>
          <section className="bg-[#121111] pb-[80px] ">
             <TotalProject />
          </section>
          <section className="bg-[#121111] pb-[80px] ">
             <Team />
          </section>
          <section className="bg-[#121111]   pt-[120px]">
             <Contactus />
          </section>
          <section className="bg-[#121111]  ">
             <Footer />
          </section>
      
      </>
  );
}
