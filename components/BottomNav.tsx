import Link from "next/link";
import {
  House,
  Search,
  Package,
  MessageCircle,
  User,
} from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-4 left-0 right-0 z-50">

      <div
        className="
          max-w-sm
          mx-auto
          bg-white/95
          backdrop-blur-xl
          rounded-3xl
          shadow-[0_10px_35px_rgba(0,0,0,0.15)]
          border border-[#E8DFC9]
          px-4
          py-3
          flex
          justify-between
        "
      >

        <Link
          href="/"
          className="flex flex-col items-center text-[#B8945B]"
        >
          <House size={22} strokeWidth={2.2} />
          <span className="text-[11px] mt-1 font-medium">
            Accueil
          </span>
        </Link>


        <Link
          href="/recherche"
          className="flex flex-col items-center text-gray-500"
        >
          <Search size={22} />
          <span className="text-[11px] mt-1">
            Recherche
          </span>
        </Link>


        <Link
          href="/commandes"
          className="flex flex-col items-center text-gray-500"
        >
          <Package size={22} />
          <span className="text-[11px] mt-1">
            Commandes
          </span>
        </Link>


        <Link
          href="/messages"
          className="flex flex-col items-center text-gray-500"
        >
          <MessageCircle size={22} />
          <span className="text-[11px] mt-1">
            Messages
          </span>
        </Link>


        <Link
          href="/profil"
          className="flex flex-col items-center text-gray-500"
        >
          <User size={22} />
          <span className="text-[11px] mt-1">
            Profil
          </span>
        </Link>

      </div>

    </nav>
  );
}