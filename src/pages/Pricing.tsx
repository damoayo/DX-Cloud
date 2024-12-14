import Accordion from "devextreme-react/accordion";
import Navbar from "../components/navbar/Navbar";

type PricingData = {
  title: string;
  content: string;
};

const data: PricingData[] = [
  {
    title: "Cloud Storage",
    content: "Free forever",
  },
  {
    title: "Virtual Machines",
    content: "Free forever",
  },
  {
    title: "Web Hosting",
    content: "Free forever",
  },
];

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-[85vh]  md:m-4 bg-[#16232e]">
        <div className="pb-16 pt-16 text-center w-full">
          <h1 className="text-4xl font-bold">Pricing</h1>
          <div className="flex items-center justify-center">
            <Accordion
              className="mt-4 h-96 w-1/2"
              dataSource={data}
              collapsible={true}
              multiple={true}
              itemTitleRender={CustomTitle}
              itemRender={CustomItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomTitle = (data: PricingData) => {
  return (
    <div className="text-2xl">
      {data.title}
    </div>
  )
}
const CustomItem = (data: PricingData) => {
  return (
    <div className="text-xl items-start justify-left">
      {data.content}
    </div>
  )
}

export default Pricing;
