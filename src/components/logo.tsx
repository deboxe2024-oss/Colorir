import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Sparkles className="size-6 text-primary" />
      <span className="text-xl font-bold font-headline tracking-tight">
        Conect Kids
      </span>
    </Link>
  );
}
