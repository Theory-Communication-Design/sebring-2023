import VideoBackground from "@/components/VideoBackground";
import Logo from "@/components/Logo";
import Experience from "@/components/Experience";
import Link from "next/link";

import logo from "../../public/images/ue-logo-2.png";
import podium from "../../public/images/PODIUM.png";
import circuit from "../../public/images/CIRCUIT.png";
import pitstop from "../../public/images/PITSTOP.png";
import race from "../../public/images/RACE.png";
import racingflag from "../../public/images/RACINGFLAG.png";
import trophy from "../../public/images/TROPHY.png";
import closedPitstop from "../../public/images/CLOSEDPITSTOP.png";
import closedRace from "../../public/images/CLOSEDRACE.png";
import closedRacingflag from "../../public/images/CLOSEDRACINGFLAG.png";
import closedTrophy from "../../public/images/CLOSEDTROPHY.png";

export default function OpenExperiences() {
  return (
    <>
      <VideoBackground videoPath="/SebringReflexLoop.mp4" />
      <div className="z-30 relative max-w-3xl mx-auto pt-24">
        <div className="w-3/4 mx-auto">
          <Logo image={logo} altText="Unrivaled Experiences" />
        </div>
        <div>
          <h2 className="text-white font-bold text-center text-4xl my-20">
            Mobil 1 Unrivaled Experiences bring you behind the scenes like never
            before
          </h2>
        </div>
        <div className="flex flex-col items-start">
          <Experience
            icon={podium}
            text="Victory Lane"
            altText="Podium line icon"
          />
          <Experience
            icon={race}
            text="Vip Parade Lap"
            altText="Crossed racing flags line icon"
            closedIcon={closedRace}
          />
          <Experience
            icon={racingflag}
            text="Flag Stand Experience"
            altText="Single racing flag line icon"
            closedIcon={closedRacingflag}
          />
          <Experience
            icon={pitstop}
            text="Vip Hot Pit Tour"
            altText="Garage line icon"
            closedIcon={closedPitstop}
          />
          <Experience
            icon={circuit}
            text="Trackside at turn 5"
            altText="Race track line icon"
          />
          <Experience
            icon={trophy}
            text="Vip Parking"
            altText="Trophy line icon"
            closedIcon={closedTrophy}
          />
        </div>
        <div>
          <Link
            href="/survey"
            className="block w-1/2 text-white font-bold uppercase bg-red-500 mx-auto text-center py-2 rounded-lg text-3xl mt-12"
          >{`Let's Go!`}</Link>
        </div>
        <div className="text-slate-200 text-xs mt-12 mb-24">
          <p className="mb-2">
            *In order to redeem your Unrivaled Experience, participants must
            have a Mobil 1 Twelve Hours of Sebring ticket for Saturday, March
            18.
          </p>
          <p>
            **Please take note of these restrictions as if you do not claim your
            experience by the time listed on your confirmation email, your prize
            will move to the next race fan at the time listed on your
            confirmation.
          </p>
        </div>
      </div>
    </>
  );
}
