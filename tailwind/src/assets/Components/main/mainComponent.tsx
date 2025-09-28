import React from "react";

type Props = { children?: React.ReactNode };

export default function MainComponent({ children }: Props) {
  return (
    <main className="flex-1 w-full">
      {children}
    </main>
  );
}
