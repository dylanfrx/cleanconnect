import Link from "next/link";

export default function EntreprisePage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] pb-24">
      <div className="max-w-md mx-auto p-6">

        <div className="h-56 bg-stone-300 rounded-3xl"></div>

        <h1 className="mt-6 text-3xl font-bold">
          Nettoyage Catalan
        </h1>

        <p className="mt-2 text-[#B8945B]">
          ⭐ 4.9
        </p>

        <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          ✓ Entreprise vérifiée
        </span>

        <p className="mt-6 text-gray-600">
          Spécialiste du nettoyage Airbnb,
          maisons, appartements, bureaux
          et nettoyage de canapés.
        </p>

        <div className="mt-8">
          <h2 className="font-bold text-xl">
            Prestations
          </h2>

          <div className="space-y-3 mt-4">

            <div className="bg-white p-4 rounded-2xl">
              🏡 Ménage Airbnb
            </div>

            <div className="bg-white p-4 rounded-2xl">
              🛋️ Nettoyage canapé
            </div>

            <div className="bg-white p-4 rounded-2xl">
              🪟 Nettoyage vitres
            </div>

            <div className="bg-white p-4 rounded-2xl">
              🏠 Ménage domicile
            </div>

          </div>
        </div>

        <Link
          href="/reservation"
          className="block text-center w-full mt-8 bg-[#B8945B] text-white py-4 rounded-2xl font-medium"
        >
          Réserver une prestation
        </Link>

      </div>
    </main>
  );
}