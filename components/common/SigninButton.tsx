import { Button } from "../ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

const SigninButton = () => {
  return (
    <>
      <Link href="/signin">
        <Button variant="outline" size="sm">
          <LogIn className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">Sign in</span>
        </Button>
      </Link>
    </>
  );
};

export default SigninButton;
