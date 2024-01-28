/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import Header from "@/components/Header";
import CourseSelector from "@/components/CourseSelector";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Setttings | Polyglot",
  description: "Your passport to global communication!",
  openGraph: {
    title: "Setttings | Polyglot",
    description: "Your passport to global communication!",
  },
  twitter: {
    title: "Setttings | Polyglot",
    description: "Your passport to global communication!",
  },
};

export default function Setttings() {
  return (
    <main className="flex max-h-[100svh] max-w-[100vw] flex-col items-center justify-between overflow-visible md:max-h-[140svh]">
      <Header text={"Settings"} profile={true} />
      <section className="flex h-[calc(100svh-8rem)] w-full flex-col gap-3 px-5 py-2">
        <CourseSelector />
      </section>
      <Footer />
    </main>
  );
}
