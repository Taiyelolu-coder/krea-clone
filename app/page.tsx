import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 px-6 md:px-12 lg:px-20">
        <Hero />
        <Cards />
      </div>
      <Footer />
    </main>
  );
}
