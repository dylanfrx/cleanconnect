import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-md mx-auto flex justify-around py-4">

        <Link href="/">🏠</Link>
        <Link href="/recherche">🔍</Link>
        <Link href="/commandes">📦</Link>
        <Link href="/messages">💬</Link>
        <Link href="/profil">👤</Link>

      </div>
    </nav>
  );
}