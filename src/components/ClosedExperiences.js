import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";

import logo from "../../public/images/ue-logo.png";
import bg from "../../public/images/ue-background.png";
import pins from "../../public/images/ue-pins.png";

export default function ClosedExperiences() {
  return (
    <div
      style={{
        background: `url(${bg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-screen"
    >
      <div className="max-w-3xl mx-auto pt-24 px-4 lg:px-0">
        <div className="w-1/2 mx-auto">
          <Logo image={logo} altText="Unrivaled Experiences" />
        </div>
        <div className="text-center text-white">
          <h2 className="text-white font-bold text-center text-4xl mt-36">
            Collect your free race day pin today*
          </h2>
          <p className="text-xl mt-8">
            {`You're just a few quick questions away from collecting your exclusive pin!`}
          </p>
        </div>
        <div className="mt-48">
          <Image src={pins} alt="Exclusive pins" />
        </div>
        <div>
          <Link
            href="/survey"
            className="block md:w-1/2 text-white font-bold uppercase bg-red-500 mx-auto text-center py-2 rounded-lg text-3xl mt-36"
          >{`Let's Go!`}</Link>
        </div>
      </div>
    </div>
  );
}
