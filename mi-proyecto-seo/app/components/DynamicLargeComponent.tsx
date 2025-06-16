"use client";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("./LargeComponent"), {
  ssr: false,
});

export default function DynamicLargeComponent() {
  return <DynamicComponent />;
}