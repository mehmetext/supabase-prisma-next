import cn from "@/lib/utils/cn";

export default function Avatar({
  src,
  alt,
  className,
}: {
  src?: string | null;
  alt: string;
  className?: string;
}) {
  const letter = alt.substring(0, 1);
  return (
    <>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={cn("w-8 h-8 rounded-full object-cover", className)}
        />
      ) : (
        <span
          className={cn(
            "w-8 h-8 flex items-center justify-center rounded-full bg-orange-700 text-white text-xs font-medium select-none",
            className
          )}
        >
          {letter}
        </span>
      )}
    </>
  );
}
