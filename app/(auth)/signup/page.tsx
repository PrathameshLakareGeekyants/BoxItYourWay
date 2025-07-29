import { getServerSession } from "next-auth";
import Signup from "../../../components/common/Signup";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function SignupPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }
  return <Signup />;
}
