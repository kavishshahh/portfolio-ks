import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import Layout from "../../components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout />
      <SpeedInsights />
    </>
  );
}
