import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../../components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <Layout />
      </div>
    </>
  );
}
