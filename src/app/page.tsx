import CertifiedExelence from "@/components/CertifiedExelence/CertifiedExelence";
import Count from "@/components/counter/counts";
import DuneSuccessSlider from "@/components/DuneSuccessSlider/DuneSuccessSlider";
import ExpertCounselling from "@/components/ExpertCounselling/ExpertCounselling";
import FormComponent from "@/components/FormComponent/FormComponent";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Layout from "@/components/Layout/Layout";
import LimitedPeriod from "@/components/LimitedPeriod/LimitedPeriod";
import UsaCard from "@/components/TopCountries/TopCountries";
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
        <ExpertCounselling />
      </section>
      <section>
        <Count />
      </section>
      <section>
        <WhyChooseSection />
      </section>
      <section>
        <UsaCard />
      </section>
      <section>
        <UniversityPartners />
      </section>
      <section>
        <DuneSuccessSlider />
      </section>
      <section>
        <CertifiedExelence />
      </section>
      <section>
        <TestimonialGrid testimonials={testimonials} />
      </section>
      <section id="form-section">
        <FormComponent />
      </section>
      <section>
        <LimitedPeriod />
      </section>
    </Layout>
  );
}
