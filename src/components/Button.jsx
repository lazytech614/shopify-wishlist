export default function Button({ children, ...props }) {
    return (
      <button {...props} className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        {children}
      </button>
    );
  }