import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] pb-24">
      <div className="max-w-md mx-auto p-6">

        {/* Logo */}
        <div className="flex flex-col items-center mt-8">
          <img
            src="/images/logo-cleanconnect.png"
            alt="CleanConnect"
            className="w-44 h-auto"
          />
        </div>


        {/* Titre */}
        <div className="mt-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Le nettoyage
            <br />
            nouvelle génération
          </h1>

          <p className="mt-4 text-gray-500">
            Trouvez un professionnel de confiance en quelques clics.
          </p>
        </div>


        {/* Recherche */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="🔍 Rechercher un service"
            className="w-full bg-white rounded-3xl p-5 shadow-sm outline-none"
          />
        </div>


        {/* Confiance */}
        <div className="mt-6 bg-white rounded-3xl p-5 shadow-sm">

          <div className="flex items-center gap-3">
            <span>✓</span>
            <p>Entreprises vérifiées par CleanConnect</p>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <span>🔒</span>
            <p>Paiement sécurisé jusqu'à validation</p>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <span>⭐</span>
            <p>Avis clients authentifiés</p>
          </div>

        </div>


        {/* Services */}
        <div className="mt-10">

          <h2 className="text-xl font-bold">
            Services populaires
          </h2>

          <div className="grid grid-cols-2 gap-4 mt-4">

            <div className="bg-white rounded-3xl p-5 text-center">
              🏡 Airbnb
            </div>

            <div className="bg-white rounded-3xl p-5 text-center">
              🛋️ Canapés
            </div>

            <div className="bg-white rounded-3xl p-5 text-center">
              🪟 Vitres
            </div>

            <div className="bg-white rounded-3xl p-5 text-center">
              🏢 Bureaux
            </div>

          </div>

        </div>


        {/* Entreprise mise en avant */}
        <div className="mt-10">

          <h2 className="text-xl font-bold mb-4">
            Professionnel recommandé
          </h2>


          <div className="bg-white rounded-3xl p-5 shadow-sm">

            <div className="h-40 rounded-2xl bg-stone-200"></div>


            <h3 className="mt-4 text-2xl font-bold">
              Nettoyage Catalan
            </h3>


            <p className="mt-2 text-[#B8945B]">
              ⭐ 4.9 • 127 avis
            </p>


            <p className="mt-2 text-gray-500">
              📍 Le Barcarès
            </p>


            <span className="inline-block mt-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              ✓ Entreprise vérifiée
            </span>


            <Link
              href="/entreprise/nettoyage-catalan"
              className="block text-center mt-6 w-full bg-[#B8945B] text-white py-4 rounded-2xl font-medium"
            >
              Voir le profil
            </Link>

          </div>

        </div>


      </div>
    </main>
  );
}