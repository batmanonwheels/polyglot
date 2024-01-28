/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import Header from "@/components/Header";
import CourseSelector from "@/components/CourseSelector";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
import Main from "@/components/Main";


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
    <Main className="flex max-h-[100svh] max-w-[100vw] flex-col items-center justify-between overflow-visible md:max-h-none">
      <Header text={"Settings"} profile={true} />
      <Content>
        <CourseSelector />
      </Content>
      <Footer />
    </Main>
  );
}
