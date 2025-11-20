"use client"

import { useState } from "react";
import ButtonBar from "../components/button-bar";
import XpayLogo from "../components/xpaylogo";

export default function Home() {
  const [animating, isAnimating] = useState(0);
  return (
    <div className="flex flex-col gap-46 h-screen w-full items-center justify-center">
      <XpayLogo animating={animating} />
      <ButtonBar isAnimating={isAnimating} />
    </div>
  );
}
