export default function AddQuote() {
  return (
    <div className="flex gap-4 items-start">
      <textarea
        placeholder="Quote..."
        rows={1}
        className="flex-1 outline-none border rounded-md p-2 transition focus:border-orange-500"
      />
      <button className="bg-orange-600 text-white py-2 px-3 font-medium rounded transition hover:bg-orange-700">
        Publish
      </button>
    </div>
  );
}
