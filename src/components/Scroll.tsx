"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Classical Piano Program",
    description:
      "🎹 Master the timeless art of classical piano through expert-led sessions focused on technique, music theory, and expressive performance. This course is ideal for aspiring pianists aiming to refine their skills and stage presence professionally.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="https://static.vecteezy.com/system/resources/previews/029/549/995/non_2x/close-up-view-of-grand-piano-entertainment-concept-ai-generated-pro-photo.jpg"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="Piano"
        />
      </div>
    ),
  },
  {
    title: "Beginner's Guitar Course",
    description:
      "🎸 Start your musical journey with this engaging beginner’s guitar course. Learn acoustic and electric guitar basics, chord progressions, strumming patterns, and songs in an easy, structured format designed for complete beginners with no prior experience.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://wp-public-fs.s3.ap-south-1.amazonaws.com/tasks/15e4252bf891dde9d812864b8d869386173ae959de443d/images/g3-5e539ec4ec28f.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Guitar"
        />
      </div>
    ),
  },
  {
    title: "Vocal Training & Voice Culture",
    description:
      "🎤 Explore the full potential of your voice through vocal warm-ups, breath control, pitch training, and expression. This course builds strong foundations across genres like classical, pop, and Indian music for aspiring singers of all levels.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Vocal Training & Voice Culture
      </div>
    ),
  },
  {
    title: "Digital Music Production",
    description:
      "🎧Learn advanced techniques in mixing, mastering, sound design, and arrangement using Ableton, FL Studio, and Logic Pro X to produce professional-quality music across genres and build your unique sound.",
    content: (
      <img
        src="https://www.shutterstock.com/image-photo/modern-music-record-studio-control-260nw-1760613938.jpg"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="Guitar"
      />
    ),
  },
  {
    title: "Thank You for Visiting Our School of Music",
    description:
      "🎶At our School of Music, we believe every soul carries a rhythm waiting to be heard.Thank you for taking the time to explore what we do and who we are.Whether you're dreaming of your first note or your next big stage,we’re here to guide, teach, and celebrate every step of your musical journey.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Thank You for Visiting Our School of Music
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
