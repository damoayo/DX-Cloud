import Navbar from "../components/Navbar/Navbar";
import PriceCom from "../components/Price/PriceCom";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-[100vh] justify-center mt-10">
        <PriceCom />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Pricing;
