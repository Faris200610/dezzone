import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveDeals from "@/components/LiveDeals";
import DisclaimerStrip from "@/components/DisclaimerStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <Hero />
        <LiveDeals />
        <DisclaimerStrip />
        <Footer />
      </main>
    </>
  );
}
