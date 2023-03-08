import { useState } from "react";

import OpenThankYou from "@/components/OpenThankYou";
import ClosedThankYou from "@/components/ClosedThankYou";

export default function ThankYouPage() {
  const [open, setOpen] = useState(true);
  return <>{open ? <OpenThankYou /> : <ClosedThankYou />}</>;
}
