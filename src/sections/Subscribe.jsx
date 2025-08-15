import Button from "../components/Button";

export default function Subscribe() {
  return (
    <section
      className="max-container flex flex-col items-center gap-10 padding-x padding-y"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] font-palanquin font-bold text-center">
        Sign Up For<span className="text-coral-red"> Updates </span>&
        Newsletters
      </h3>
      <div className="w-full max-w-[40%] flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <Button
          className="flex max-sm:justify-end items-center max-sm:w-full"
          label="Sign Up"
          fullWidth
        />
      </div>
    </section>
  );
}
