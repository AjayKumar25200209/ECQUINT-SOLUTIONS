import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import Hire from "@/components/custom/Hire";

const HirePage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hire />
      </main>
      <Footer />
    </div>
  );
};

export default HirePage;