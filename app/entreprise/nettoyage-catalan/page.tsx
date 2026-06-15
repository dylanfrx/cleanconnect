import Link from "next/link";

export default function EntreprisePage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] pb-24">
      <div className="max-w-md mx-auto">

        <div className="h-64 bg-stone-300"></div>

        <div className="p-6">

          <h1 className="text-3xl font-bold">
            Nettoyage Catalan
          </h1>

          <div className="flex items-center gap-3 mt-3">
            <span className="text-[#B8945B] font-medium">
              ⭐ 4.9 (127 avis)
            </span>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              ✓ Vérifiée
            </span>
          </div>

          <p className="mt-5 text-gray-600">
            Entreprise spécialisée dans le nettoyage Airbnb,
            appartements, villas, bureaux et nettoyage de canapés.
          </p>

          <div className="mt-8 bg-white rounded-3xl p-5">
            <h2 className="font-bold text-lg">
              Informations
            </h2>

            <div className="mt-4 space-y-3 text-gray-700">
              <p>📍 Le Barcarès</p>
              <p>📞 06 12 34 56 78</p>
              <p>🕒 7j/7 - 08h00 à 20h00</p>
            </div>
          </div>

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

              <div className="bg-white p-4 rounded-2xl">
                🏢 Nettoyage bureaux
              </div>

            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-bold text-xl">
              Avis clients
            </h2>

            <div className="mt-4 bg-white rounded-2xl p-4">
              <p className="font-medium">
                ⭐⭐⭐⭐⭐ Sophie M.
              </p>
              <p className="text-gray-600 mt-2">
                Très professionnel, logement impeccable après chaque location Airbnb.
              </p>
            </div>

            <div className="mt-3 bg-white rounded-2xl p-4">
              <p className="font-medium">
                ⭐⭐⭐⭐⭐ Julien R.
              </p>
              <p className="text-gray-600 mt-2">
                Intervention rapide et travail parfait.
              </p>
            </div>
          </div>

          <Link
            href="/reservation"
            className="block text-center w-full mt-8 bg-[#B8945B] text-white py-4 rounded-2xl font-medium"
          >
            Réserver une prestation
          </Link>

        </div>
      </div>
    </main>
  );
}