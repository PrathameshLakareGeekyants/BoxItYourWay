import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route"; // adjust path as needed
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-4xl font-bold">
        Welcome{session?.user?.name ? `, ${session.user.name}` : ""}!
      </h1>
      <p className="text-lg">
        Create your own custom box with our easy-to-use online tool.
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Get Started
      </button>
    </div>
  );
}
