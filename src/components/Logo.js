import Image from "next/image";
export default function Logo({ image, altText }) {
  return (
    <div>
      <Image priority src={image} alt={altText} />
    </div>
  );
}
