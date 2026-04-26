import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import Career from "@/components/custom/Career";

const CareersPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Career />
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;