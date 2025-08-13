import { shoe8 } from "../assets/images";
import Button from "../components/Button";

export default function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted shoes are
          designed to elevate your everyday experience. From the finest
          materials to innovative designs, we guarantee a perfect blend of
          durability and elegance for every step you take. Experience the
          difference with our super quality shoes that redefine comfort and
          sophistication.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
}
