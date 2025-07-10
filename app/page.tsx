import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-4xl font-bold">Box It Your Way</h1>
      <p className="text-lg">
        Create your own custom box with our easy-to-use online tool.
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Get Started
      </button>
    </div>
  );
}
