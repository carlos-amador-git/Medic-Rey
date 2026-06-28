import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FreeBenefits from '@/components/FreeBenefits';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <FreeBenefits />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
