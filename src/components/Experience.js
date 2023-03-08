import Image from "next/image";

export default function Experience({
  text,
  icon,
  altText,
  closed,
  closedIcon,
}) {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "200px 1fr" }}
      className="items-center mb-12"
    >
      <div className="w-full">
        <Image
          className="w-9=10/12 mx-auto"
          src={closed ? closedIcon : icon}
          alt={altText}
        />
      </div>
      <h3
        className={`${
          closed ? "text-[#343334]" : "text-white"
        } font-bold uppercase text-5xl italic tracking-wide`}
      >
        {text}
      </h3>
    </div>
  );
}
