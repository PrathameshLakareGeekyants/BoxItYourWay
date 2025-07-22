import { redirect } from "next/navigation";
import Signin from "@/components/common/Signin";
import { getAuthSession } from "@/lib/service/auth";

export default async function SigninPage() {
  const session = await getAuthSession();

  if (session) {
    redirect("/");
  }
  return (
    <>
      <Signin />
    </>
  );
}
