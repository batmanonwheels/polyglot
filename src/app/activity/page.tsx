/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import Header from "@/components/Header";
import CourseSelector from "@/components/CourseSelector";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
import Main from "@/components/Main";

export const metadata: Metadata = {
  title: "Activity | Polyglot",
  description: "Your passport to global communication!",
  openGraph: {
    title: "Activity | Polyglot",
    description: "Your passport to global communication!",
  },
  twitter: {
    title: "Activity | Polyglot",
    description: "Your passport to global communication!",
  },
};

export default function Activity() {
  return (
    // <Main className="relative flex max-h-[100svh] max-w-[100vw] flex-col justify-between overflow-hidden md:max-h-[140svh]">
    <Main>
      <Header text={"Activity"} />
      <Content className="flex h-[calc(100svh-8rem)] w-full flex-col gap-3 px-5 py-2">
        <CourseSelector />
      </Content>
      <Footer />
    </Main>
  );
}
