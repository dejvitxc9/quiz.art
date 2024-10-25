import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-row justify-start items-center gap-10">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-grey-700">
            Quiz.ART 2024 <br /> All rights reserved &copy;
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
