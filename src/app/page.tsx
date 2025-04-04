import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Layout from "@/components/Layout/Layout";
import ServiceSteps from "@/components/ServiceSteps/ServiceSteps";


export default function Home() {
  return (
    <Layout>
    <section>
      <HeroBanner/>
    </section>
    <section>
      <ServiceSteps/>
    </section>
    </Layout>
  );
}
