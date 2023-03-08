import Image from "next/image";
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
      <div className="max-w-3xl mx-auto pt-24">
        <div className="w-1/2 mx-auto">
          <Logo image={logo} altText="Unrivaled Experiences" />
        </div>
        <div className="text-center text-white">
          <h2 className="text-white font-bold text-center text-4xl mt-36">
            Thank You!
          </h2>
          <div className="text-center text-white mt-8 text-2xl">
            <h3>{`Your limited edition pin is just a few steps away.`}</h3>
          </div>
          <div className="text-center text-white mt-8 text-2xl">
            <h3>{`Thanks for completing the survey, head to The Vault in Vendor Village to collect your pin.`}</h3>
          </div>
        </div>
        <div className="mt-48">
          <Image src={pins} alt="Exclusive pins" />
        </div>
      </div>
    </div>
  );
}
