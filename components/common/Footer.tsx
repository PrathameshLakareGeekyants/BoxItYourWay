export default function Footer() {
  return (
    <footer className="border-t py-6 text-center text-muted-foreground text-sm bg-background">
      &copy; {new Date().getFullYear()} BoxItYourWay. All rights reserved.
    </footer>
  );
}
