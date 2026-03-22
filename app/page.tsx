import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Benefits from '@/components/Benefits';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Stats />
      <Benefits />
      <Services />
      <Footer />
    </main>
  );
}
