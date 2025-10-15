export default function ResearchPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Ongoing Research</h2>
      <p className="text-gray-700 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eget magna fermentum iaculis.
      </p>

      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="border rounded-xl p-4 shadow-sm bg-white">
            <h3 className="text-lg font-semibold">Project {i}</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eget magna fermentum iaculis.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
