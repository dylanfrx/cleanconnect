import Link from "next/link";

export default function ReservationConfirmeePage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl p-8 shadow-sm text-center max-w-md w-full">
        <div className="text-6xl">✅</div>

        <h1 className="mt-6 text-3xl font-bold">
          Demande envoyée
        </h1>

        <p className="mt-4 text-gray-600">
          Votre demande a été transmise à l'entreprise.
          Vous recevrez une notification lorsqu'elle
          acceptera ou refusera votre demande.
        </p>

        <Link
          href="/"
          className="block mt-8 bg-[#B8945B] text-white py-4 rounded-2xl font-medium"
        >
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}