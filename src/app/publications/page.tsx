export default function PublicationsPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Publications</h2>
      <p className="text-gray-700 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eget magna fermentum iaculis.
      </p>

      <ul className="space-y-2">
        {[1, 2, 3].map(i => (
          <li key={i} className="border-b py-2">
            <strong>Paper Title {i}</strong> — <em>Journal of Cybersecurity</em>, 20{i+22}
          </li>
        ))}
      </ul>
    </div>
  );
}
