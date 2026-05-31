export default function Button({ text, type = "submit" }) {
  return (
    <button
      type={type}
      className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90"
    >
      {text}
    </button>
  );
}