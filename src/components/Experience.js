import Image from "next/image";

export default function Experience({
  text,
  icon,
  altText,
  closed,
  closedIcon,
}) {
  return (
    <div className="custom-grid items-center mb-6 md:mb-12">
      <div className="w-full">
        <Image
          className=" w-5/12 md:w-9/12 mx-auto"
          src={closed ? closedIcon : icon}
          alt={altText}
        />
      </div>
      <h3
        className={`${
          closed ? "text-[#343334]" : "text-white"
        } font-bold uppercase text-2xl md:text-5xl italic tracking-wide`}
      >
        {text}
      </h3>
    </div>
  );
}
