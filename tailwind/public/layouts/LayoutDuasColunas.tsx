import React from "react";

type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
  leftClass?: string;
  rightClass?: string;
};

export default function TwoColumnLayout({ left, right, leftClass = "", rightClass = "" }: Props) {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      <div className={`w-full md:w-1/2 ${leftClass}`}>{left}</div>
      <div className={`w-full md:w-1/2 flex items-center justify-center ${rightClass}`}>{right}</div>
    </div>
  );
}