import React from "react";
import Confetti from "react-confetti";
import { useViewportSize } from "@mantine/hooks";

const Success = () => {
  const { width, height } = useViewportSize();

  return (
    <div className="flex flex-col gap-6 items-center justify-center overflow-hidden h-[calc(100vh-180px)]">
      <Confetti width={width} height={height} />
      <h1 className="text-6xl text-green-700">Successful</h1>
      <h2 className="text-xl font-medium">Thank you </h2>
    </div>
  );
};

export default Success;
