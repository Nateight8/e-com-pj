import Image from "next/image";
import { Inter } from "next/font/google";
import { Skeleton } from "@/components/ui/skeleton";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Products from "./components/Products";
import { getProducts } from "../../sanity/sanity-utils";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const products = await getProducts();
  // console.log(products);

  return (
    <main className="">
      <Hero />
      <Products />
    </main>
  );
}
