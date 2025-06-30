import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-background px-4 lg:px-6 h-14 flex items-center shadow">
      <Link href="/" className="flex items-center justify-center">
        <span className="text-lg font-bold">CARAMUT</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
          About
        </Link>
        <Link href="/dev-team" className="text-sm font-medium hover:underline underline-offset-4">
          Dev Team
        </Link>
      </nav>
    </header>
  );
}