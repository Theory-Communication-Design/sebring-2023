import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "@/lib/ga";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     ga.pageview(url);
  //   };

  //   router.events.on("routeChangeComplete", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // });

  return <Component {...pageProps} />;
}
