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
          <h3 className="text-2xl mt-8 font-bold">
            {`You're one step closer to an Unrivaled Experience*.`}
          </h3>
          <p className="text-xl mt-8">
            {`Stay tuned to find out if you've been selected for one of our Unrivaled Experiences*. May the bumps be forever in your favor.`}
          </p>
          <p className="mt-8 text-xs">
            *Please take note of these restrictions as if you do not claim your
            experience by the time listed on your confirmation email, your prize
            will move to the next race fan at the time listed on your
            confirmation.
          </p>
        </div>
        <div className="mt-48">
          <Image src={pins} alt="Exclusive pins" />
        </div>
        <div className="text-center text-white font-bold mt-24 text-3xl">
          <h3>{`Don't forget to stop by the Vault in Vendor Village to collect your limited edition pin.`}</h3>
        </div>
      </div>
    </div>
  );
}
