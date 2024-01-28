/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import Header from "@/components/Header";
import CourseSelector from "@/components/CourseSelector";
import Footer from "@/components/Footer";
import { Main } from "@/components/Main";

export const metadata: Metadata = {
  title: "Profile | Polyglot",
  description: "Your passport to global communication!",
  openGraph: {
    title: "Profile | Polyglot",
    description: "Your passport to global communication!",
  },
  twitter: {
    title: "Profile | Polyglot",
    description: "Your passport to global communication!",
  },
};

export default function Profile() {
  return (
    <main className="relative flex max-h-[100svh] max-w-[100vw] flex-col justify-between overflow-hidden md:max-h-[140svh]">
      <Header text={"Kathryn"} profile={true} />
      <Main className="flex h-[calc(100svh-8rem)] w-full flex-col gap-3 px-5 py-2">
        <CourseSelector />
      </Main>
      <Footer />
    </main>
  );
}
