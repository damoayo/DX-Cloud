import { Button } from "devextreme-react/button";
import Navbar from "../components/navbar/Navbar";
import demo1 from "../assets/demo1.png";
import demo2 from "../assets/demo2.png";
import demo3 from "../assets/demo3.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-[85vh] md:m-4 bg-[#16232e]">
        <div className="pb-16 pt-10 text-center min-w-full">
          <h1>MamaPai</h1>
          <h3 className="text-2xl text-gray-300">
            Personal computing made simple
          </h3>
          <br />
          <h3 className="text-gray-300">
            Virtual Machines | Cloud Storage | Web Hosting
          </h3>
          <div className="flex mt-2 pb-8 justify-center gap-x-6">
            <Button
              text="Get Started"
              type="default"
              stylingMode="contained"
              className="mt-8"
              height="40px"
            />
            <Button
              text="Learn More"
              type="default"
              stylingMode="outlined"
              className="mt-8"
              height="40px"
            />
          </div>
          <div className="mt-14 md:mt-24 bg-[#141e28] min-w-9 p-8 md:p-14 shadow-md">
            <br />
            <p className="text-2xl">Trusted by industry leaders</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-x-4 mt-8">
              <img src={demo1} alt="demo1" className="w-[280px]" />
              <img src={demo2} alt="demo2" className="w-[280px]" />
              <img src={demo3} alt="demo3" className="w-[280px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
