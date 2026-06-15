import Link from "next/link";

export default function InscriptionPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] flex items-center justify-center p-6">
      <div className="max-w-md w-full">

        <h1 className="text-4xl font-bold text-center">
          Rejoindre CleanConnect
        </h1>

        <p className="text-center text-gray-500 mt-4">
          Choisissez votre profil
        </p>

        <div className="mt-10 space-y-4">

          <Link
            href="/inscription/client"
            className="block bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl">👤</div>

            <h2 className="mt-4 text-xl font-bold">
              Je suis un client
            </h2>

            <p className="text-gray-500 mt-2">
              Trouver et réserver un professionnel du nettoyage.
            </p>
          </Link>

          <Link
            href="/inscription/entreprise"
            className="block bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl">🧹</div>

            <h2 className="mt-4 text-xl font-bold">
              Je suis une entreprise
            </h2>

            <p className="text-gray-500 mt-2">
              Recevoir des demandes de prestations.
            </p>
          </Link>

        </div>

      </div>
    </main>
  );
}