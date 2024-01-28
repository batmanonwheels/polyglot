/* eslint-disable @next/next/no-img-element */
import Card from "@/components/Card";
import CourseSelector from "@/components/CourseSelector";
import Header from "@/components/Header";
import { Main } from "@/components/Main";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Review | Polyglot",
  description: "Your passport to global communication!",
  openGraph: {
    title: "Review | Polyglot",
    description: "Your passport to global communication!",
  },
  twitter: {
    title: "Review | Polyglot",
    description: "Your passport to global communication!",
  },
};

export default function Review() {
  return (
    <main className="relative flex max-h-[100svh] max-w-[100vw] flex-col justify-between overflow-hidden md:max-h-[140svh]">
      <Header text={"Review"} />
      <Main>
        <CourseSelector />
        <div className="flex h-1/2 flex-col gap-2">
          <h2 className="flex-1 text-2xl font-bold">Practice Tools</h2>
          <Card
            className="h-1/2"
            title="Conversation"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s"
          />
          <Card
            className="h-1/2"
            title="Listen"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s"
          />
        </div>
        <div className="flex h-1/2 flex-col gap-1">
          <h2 className="text-2xl font-bold">My Collections</h2>
          <Card
            className="h-1/2"
            title="Vocab list"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s"
          />
          <Card
            className="h-1/2"
            title="Mistakes"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7iWgixkGSzAHt8VnqoPJdRW-e-UqHLgm-GfUC9CywA&s"
          />
        </div>
      </Main>
      <Footer />
    </main>
  );
}
