export default function Avatar({
  src,
  alt,
}: {
  src?: string | null;
  alt: string;
}) {
  const letter = alt.substring(0, 1);
  return (
    <>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-8 h-8 rounded-full object-cover"
        />
      ) : (
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-700 text-white text-xs font-medium select-none">
          {letter}
        </span>
      )}
    </>
  );
}
