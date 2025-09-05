import { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
};

export default function Grid({ children }: GridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  );
};