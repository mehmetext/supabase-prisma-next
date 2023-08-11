import Link from "next/link";

export default function QuoteItem({ str }: { str: string }) {
  return (
    <div className="bg-orange-100/60 break-inside-avoid rounded-md flex flex-col pt-8 gap-4 overflow-hidden relative border border-orange-200 transition-all hover:scale-105 hover:shadow-md hover:bg-orange-100">
      <div className="absolute right-0 top-0 text-sm bg-red-500/30 text-red-700 font-medium px-2 py-1 rounded-bl-md">
        -1
      </div>
      <p className="mx-4 font-light">
        <span className="font-bold pr-1">“</span>
        {str}
        <span className="font-bold pl-1">”</span>
      </p>
      <Link href="/" className="self-end flex items-center gap-2 mx-4">
        <div className="flex flex-col text-right">
          <p className="font-medium line-clamp-1 leading-none">
            Mehmet Konukçu
          </p>
          <p className="text-xs text-black/40 leading-none">mehmetext</p>
        </div>
        <div className="shrink-0">
          <img
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1673611182i/3565._UX200_CR0,15,200,200_.jpg"
            alt="Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </Link>
      <div className="grid grid-cols-2">
        <button className="flex items-center justify-center py-2 text-sm bg-green-500/30 text-green-700 font-medium transition hover:bg-green-500/50">
          Up
        </button>
        <button className="flex items-center justify-center py-2 text-sm bg-red-500/30 text-red-700 font-medium transition hover:bg-red-500/50">
          Down
        </button>
      </div>
    </div>
  );
}
