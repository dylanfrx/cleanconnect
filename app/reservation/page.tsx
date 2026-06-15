import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#FCFAF6] to-[#F3E8D6] pb-28 overflow-hidden">

      {/* Lumières dorées de fond */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#B8945B]/15 rounded-full blur-3xl"></div>
      <div className="absolute top-[500px] -left-24 w-72 h-72 bg-[#B8945B]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-md mx-auto p-6">

        {/* Logo CleanConnect */}
        <div className="flex justify-center mt-8">
          <img
            src="/images/logo-cleanconnect.png"
            alt="CleanConnect"
            className="w-28 h-auto"
          />
        </div>

        {/* Accroche */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Le nettoyage
            <br />
            nouvelle génération
          </h1>

          <p className="mt-3 text-gray-600 text-lg">
            Réservez un professionnel de confiance
            en quelques clics.
          </p>
        </div>

        {/* Barre recherche */}
        <div className="mt-8">
          <div className="bg-white rounded-3xl shadow-lg px-5 py-4 flex items-center gap-3">
            <span className="text-gray-400 text-xl">🔎</span>

            <input
              type="text"
              placeholder="Rechercher un service..."
              className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
            />
          </div>
        </div>

        {/* Bloc confiance */}
        <div className="mt-7 bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg">

          <div className="flex items-center gap-3">
            <span className="text-[#B8945B] text-xl">
              ✓
            </span>
            <div>
              <p className="font-semibold text-gray-900">
                Entreprises vérifiées
              </p>
              <p className="text-sm text-gray-500">
                Contrôlées par CleanConnect
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-5">
            <span className="text-[#B8945B] text-xl">
              🔒
            </span>
            <div>
              <p className="font-semibold text-gray-900">
                Paiement sécurisé
              </p>
              <p className="text-sm text-gray-500">
                L'argent est libéré après validation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-5">
            <span className="text-[#B8945B] text-xl">
              ⭐
            </span>
            <div>
              <p className="font-semibold text-gray-900">
                Avis authentifiés
              </p>
              <p className="text-sm text-gray-500">
                De vrais clients, de vrais avis
              </p>
            </div>
          </div>

        </div>


        {/* Services */}
        <div className="mt-10">

          <h2 className="text-2xl font-bold text-gray-900">
            Services populaires
          </h2>

          <div className="grid grid-cols-2 gap-4 mt-5">

            {[
              "🏡 Airbnb",
              "🛋️ Canapés",
              "🪟 Vitres",
              "🏢 Bureaux",
              "🏠 Domicile",
              "🏗️ Chantier",
            ].map((service) => (
              <div
                key={service}
                className="bg-white/90 rounded-2xl p-5 text-center font-medium text-gray-800 shadow-md hover:scale-105 transition"
              >
                {service}
              </div>
            ))}

          </div>

        </div>


        {/* Entreprise recommandée */}
        <div className="mt-12">

          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Professionnel recommandé
          </h2>

          <div className="bg-white/90 rounded-3xl p-5 shadow-xl">

            <div className="h-44 rounded-2xl bg-gradient-to-r from-[#D8C5A1] to-[#B8945B] flex items-center justify-center">

              <span className="text-white text-2xl font-bold">
                Nettoyage Catalan
              </span>

            </div>

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              Nettoyage Catalan
            </h3>

            <p className="mt-2 text-[#B8945B] font-semibold">
              ⭐ 4.9 • 127 avis
            </p>

            <p className="mt-2 text-gray-600">
              📍 Le Barcarès
            </p>

            <span className="inline-block mt-3 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
              ✓ Entreprise vérifiée
            </span>

            <Link
              href="/entreprise/nettoyage-catalan"
              className="block mt-6 text-center bg-[#B8945B] text-white py-4 rounded-2xl font-semibold shadow-lg hover:opacity-90 transition"
            >
              Voir le profil
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}