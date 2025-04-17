import Count from "@/components/counter/counts";
import DuneSuccessSlider from "@/components/DuneSuccessSlider/DuneSuccessSlider";
import FormComponent from "@/components/FormComponent/FormComponent";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Layout from "@/components/Layout/Layout";
import { MapSection } from "@/components/MapSection/Mapsection";
import ServiceSteps from "@/components/ServiceSteps/ServiceSteps";
import UniversityPartners from "@/components/UniversityPartners/UniversityPartners";
import { WhyChooseSection } from "@/components/WhyChooseSection/WhyChooseSection";
import { testimonials } from "@/data/testimonials";
import TestimonialGrid from "@/TestimonialsGrid/TestimonialsGrid";

export default function Home() {
  return (
    <Layout>
      <section>
        <HeroBanner />
      </section>
      <section>
        <ServiceSteps />
      </section>
       <section>
        <Count />
      </section>
     <section>
        <WhyChooseSection /> 
        {/* ================= */}
      </section>
      <section>
        <MapSection />
      </section>
      <section>
        <UniversityPartners />
      </section>
      <section>
        <DuneSuccessSlider />
      </section>
      <section>
        <TestimonialGrid testimonials={testimonials} />
      </section>
      <section>
        <FormComponent />
      </section>
    </Layout>
  );
}
