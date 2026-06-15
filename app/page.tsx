import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#FCFAF6] to-[#F3E8D6] pb-28 overflow-hidden">

      {/* Effets de lumière dorée */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#B8945B]/20 rounded-full blur-3xl"></div>
      <div className="absolute top-96 -left-20 w-60 h-60 bg-[#B8945B]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-md mx-auto p-6">

        {/* Logo */}
        <div className="flex justify-center mt-6">
          <img
            src="/images/logo-cleanconnect.png"
            alt="CleanConnect"
            className="w-36 h-auto"
          />
        </div>

        {/* Titre */}
        <div className="text-center mt-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Le nettoyage
            <br />
            nouvelle génération
          </h1>

          <p className="mt-3 text-gray-600 text-lg">
            Réservez un professionnel de confiance
            en quelques clics.
          </p>
        </div>

        {/* Recherche */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Rechercher un service..."
            className="
              w-full 
              p-5 
              rounded-3xl 
              bg-white 
              text-gray-800
              placeholder:text-gray-400
              shadow-lg
              outline-none
            "
          />
        </div>


        {/* Bloc confiance */}
        <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-3xl p-5 shadow-lg">

          <div className="flex gap-3">
            <span className="text-[#B8945B] text-xl">✓</span>
            <p className="text-gray-800">
              Entreprises vérifiées par CleanConnect
            </p>
          </div>

          <div className="flex gap-3 mt-4">
            <span className="text-[#B8945B] text-xl">🔒</span>
            <p className="text-gray-800">
              Paiement sécurisé jusqu'à validation
            </p>
          </div>

          <div className="flex gap-3 mt-4">
            <span className="text-[#B8945B] text-xl">⭐</span>
            <p className="text-gray-800">
              Avis clients authentifiés
            </p>
          </div>

        </div>


        {/* Services */}
        <div className="mt-10">

          <h2 className="text-xl font-bold text-gray-900">
            Services populaires
          </h2>

          <div className="grid grid-cols-2 gap-4 mt-4">

            {[
              "🏡 Airbnb",
              "🛋️ Canapés",
              "🪟 Vitres",
              "🏢 Bureaux",
              "🏠 Maison",
              "🏗️ Chantier",
            ].map((service) => (
              <div
                key={service}
                className="
                  bg-white/80 
                  backdrop-blur-sm
                  rounded-2xl 
                  p-5 
                  text-center 
                  font-medium
                  text-gray-800
                  shadow-md
                "
              >
                {service}
              </div>
            ))}

          </div>

        </div>


        {/* Entreprise */}
        <div className="mt-10">

          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Professionnel recommandé
          </h2>


          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-5 shadow-xl">

            <div className="
              h-44 
              rounded-2xl 
              bg-gradient-to-r 
              from-[#D8C5A1] 
              to-[#B8945B]
              flex 
              items-center 
              justify-center
              text-white
              text-lg
              font-semibold
            ">
              Nettoyage Catalan
            </div>


            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              Nettoyage Catalan
            </h3>


            <p className="mt-2 text-[#B8945B] font-medium">
              ⭐ 4.9 • 127 avis
            </p>


            <p className="mt-2 text-gray-600">
              📍 Le Barcarès
            </p>


            <span className="
              inline-block 
              mt-3 
              bg-green-100 
              text-green-700 
              px-4 
              py-2 
              rounded-full 
              text-sm
            ">
              ✓ Entreprise vérifiée
            </span>


            <Link
              href="/entreprise/nettoyage-catalan"
              className="
                block
                text-center
                mt-6
                w-full
                bg-[#B8945B]
                text-white
                py-4
                rounded-2xl
                font-semibold
                shadow-lg
                hover:opacity-90
                transition
              "
            >
              Voir le profil
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}