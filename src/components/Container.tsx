import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div
      className={cn("w-full h-full max-w-screen-xl px-5 mx-auto", className)}
    >
      {children}
    </div>
  );
};

export default Container;
