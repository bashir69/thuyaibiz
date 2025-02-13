
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";


export default function Home() {
  return (
      <div className="w-full">
          <section>
              <Hero />
          </section>
          <section>
             <Portfolio />
           
          </section>
      </div>
  );
}
