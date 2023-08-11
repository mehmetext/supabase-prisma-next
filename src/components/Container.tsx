import cn from "@/lib/utils/cn";
import React from "react";

export default function Container({
  as = "section",
  id,
  className,
  children,
  ...props
}: {
  as?: string;
  id?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const Tag = (as ?? "section") as keyof JSX.IntrinsicElements;

  return (
    <Tag
      id={id}
      className={cn("max-w-5xl w-full mx-auto px-4 xl:px-0", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
