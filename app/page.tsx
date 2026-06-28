import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FreeBenefits from '@/components/FreeBenefits';
import ServicesCarousel from '@/components/ServicesCarousel';
import StatsCounters from '@/components/StatsCounters';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <FreeBenefits />
      <ServicesCarousel />
      <StatsCounters />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
