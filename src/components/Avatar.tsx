import cn from "@/lib/utils/cn";

export default function Avatar({
  src,
  alt,
  size,
}: {
  src?: string | null;
  alt: string;
  size?: number;
}) {
  size = size ?? 32;
  const letter = alt.substring(0, 1);

  return (
    <>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={cn("rounded-full object-cover")}
          style={{ width: size, height: size }}
        />
      ) : (
        <span
          className={cn(
            "flex items-center justify-center rounded-full bg-orange-700 text-white font-medium select-none"
          )}
          style={{ width: size, height: size, fontSize: size * 0.375 }}
        >
          {letter}
        </span>
      )}
    </>
  );
}
