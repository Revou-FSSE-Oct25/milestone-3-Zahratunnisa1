export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-48 bg-gray-200 animate-pulse rounded-lg" />
        ))}
      </div>
    </div>
  );
}
