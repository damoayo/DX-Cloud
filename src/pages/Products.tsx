import Navbar from "../components/navbar/Navbar";
import ProductCard from "../components/ProductCard";

const data = [
  {
    name: "Vitual Machines",
    description:
      "lor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://picsum.photos/id/10/800/300",
  },
  {
    name: "Cloud Storage",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://picsum.photos/id/11/800/300",
  },
  {
    name: "Web Hosting",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://picsum.photos/id/12/800/300",
  },
];

const Products = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center min-h-[85vh] m-2 md:m-4 bg-[#16232e]">
        <div className="pb-16 pt-16 text-center min-w-full">
          <h1 className="text-4xl font-bold">Products</h1>
          <p className="py-8 text-xl font-bold">
            We offer a variety of products to meet your needs.
          </p>
          <div className="md:grid md:grid-cols-3 md:mx-10">
            <ProductCard
              name={data[0].name}
              description={data[0].description}
              imageURL={data[0].image}
            />
            <ProductCard
              name={data[1].name}
              description={data[1].description}
              imageURL={data[1].image}
            />
            <ProductCard
              name={data[2].name}
              description={data[2].description}
              imageURL={data[2].image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
