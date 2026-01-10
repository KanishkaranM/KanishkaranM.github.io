import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-black/40 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Shield className="w-5 h-5 text-muted-foreground" />
        <span className="font-mono text-sm text-muted-foreground">System Secure</span>
      </div>
      <p className="font-mono text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Cyber Security Portfolio. Built with React & Tailwind.
      </p>
    </footer>
  );
}
