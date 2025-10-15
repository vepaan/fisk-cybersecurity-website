export default function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <input
      className="border w-full p-2 rounded mt-2"
      placeholder="Search by name, department, or interests..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}
