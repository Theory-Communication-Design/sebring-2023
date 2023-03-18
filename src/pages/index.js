import { useState } from "react";
import OpenExperiences from "@/components/OpenExperiences";
import ClosedExperiences from "@/components/ClosedExperiences";

export default function Home() {
  const [open, setOpen] = useState(false);
  return <>{open ? <OpenExperiences /> : <ClosedExperiences />}</>;
}
