import HeroSection from "@/components/Hero Section";
import NavigationHeader from "@/components/Nav/NavigationHeader";
import FeatureSection from "@/components/FeatureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";
import Head from "next/head";

export default function Home() {
  return (
    <div> 
      <Head>
        <title>FortuneConnect - Home</title>
        <meta name="description" content="Connecting businesses with opportunities" />
      </Head>
      
      <NavigationHeader />

      <main>
        <HeroSection />

        <FeatureSection/>

        <TestimonialsSection/>

      </main>

      <FooterSection/>
    
    </div>
  );
}
