export function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Personal Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
