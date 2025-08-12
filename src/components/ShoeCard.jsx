export default function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImg }) {
  function handleClick() {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  }

  return (
    <div
      className={`border-2 rounded-xl transition-all duration-200
        ${
          bigShoeImg === imgURL.bigShoe
            ? "border-coral-red shadow-lg"
            : "border-transparent hover:border-coral-red hover:shadow-md"
        }
        cursor-pointer flex justify-center items-center 
        bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4`}
      onClick={handleClick}
    >
      <img
        src={imgURL.thumbnail}
        alt="shoe thumbnail"
        width={127}
        height={103}
        className="object-contain"
      />
    </div>
  );
}
