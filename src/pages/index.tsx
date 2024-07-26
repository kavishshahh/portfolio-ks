import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../../components/Layout/Layout";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout />
      <SpeedInsights />
    </>
  );
}
