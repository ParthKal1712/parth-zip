import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className="container mx-auto mt-16 p-2">{children}</div>;
};

export default Container;
