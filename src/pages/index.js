import { useState } from "react";
import OpenExperiences from "@/components/OpenExperiences";
import ClosedExperiences from "@/components/ClosedExperiences";

export default function Home() {
  const [open, setOpen] = useState(true);
  return <>{open ? <OpenExperiences /> : <ClosedExperiences />}</>;
}
