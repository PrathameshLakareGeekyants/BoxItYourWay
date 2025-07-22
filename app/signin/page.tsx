import { getServerSession } from "next-auth";
import Signin from "../../components/common/Signin";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function SigninPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }
  return (
    <>
      <Signin />
    </>
  );
}
