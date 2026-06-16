import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] pb-32">

      <div className="max-w-md mx-auto px-6">

        {/* Logo */}
        <div className="flex justify-center pt-10">
          <Image
            src="/images/logo-cleanconnect.png"
            alt="CleanConnect"
            width={110}
            height={110}
            className="object-contain"
          />
        </div>


        {/* Titre */}
        <div className="text-center mt-4">

          <h1 className="text-5xl font-bold text-[#0F172A] leading-tight">
            Le nettoyage
            <br />
            nouvelle génération
          </h1>

          <p className="mt-4 text-xl text-gray-500">
            Réservez un professionnel de confiance en quelques clics.
          </p>

        </div>


        {/* Recherche */}
        <input
          type="text"
          placeholder="Rechercher un service..."
          className="
            mt-8
            w-full
            bg-white
            rounded-3xl
            p-5
            text-gray-700
            placeholder:text-gray-400
            shadow-lg
            outline-none
          "
        />


        {/* Bloc confiance */}
        <div className="
          mt-6
          bg-white
          rounded-3xl
          p-6
          shadow-lg
        ">

          <div className="space-y-4">

            <p className="text-[#0F172A]">
              ✔ Entreprises vérifiées par CleanConnect
            </p>

            <p className="text-[#0F172A]">
              🔒 Paiement sécurisé jusqu'à validation
            </p>

            <p className="text-[#0F172A]">
              ⭐ Avis clients authentifiés
            </p>

          </div>

        </div>


        {/* Services populaires */}
        <div className="mt-12">

          <h2 className="text-2xl font-bold text-[#0F172A] mb-5">
            Services populaires
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-white rounded-3xl p-5 shadow-lg text-center">
              🏡 Airbnb
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-lg text-center">
              🛋️ Canapés
            </div>            <div className="bg-white rounded-3xl p-5 shadow-lg text-center">
              🪟 Vitres
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-lg text-center">
              🧹 Domicile
            </div>

          </div>

        </div>


        {/* Entreprise recommandée */}
        <div className="mt-12">

          <h2 className="text-2xl font-bold text-[#0F172A] mb-5">
            Entreprise recommandée
          </h2>


          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">


            {/* Photo entreprise */}
            <div className="relative h-56 w-full">

              <Image
                src="/images/nettoyage-catalan.jpg"
                alt="Nettoyage Catalan"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/25"></div>


              <div className="absolute bottom-5 left-5">

                <p className="text-white text-2xl font-bold">
                  Nettoyage Catalan
                </p>

                <p className="text-white text-sm">
                  Le Barcarès • Service Premium
                </p>

              </div>

            </div>


            {/* Informations */}
            <div className="p-5">

              <div className="flex items-center justify-between">

                <h3 className="text-xl font-bold text-[#0F172A]">
                  Nettoyage Catalan
                </h3>


                <span className="
                  bg-green-100
                  text-green-700
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-medium
                ">
                  ✓ Vérifié
                </span>

              </div>


              <div className="mt-3 flex items-center gap-2">

                <span className="text-[#B8945B] font-semibold">
                  ⭐ 4.9
                </span>

                <span className="text-gray-300">
                  •
                </span>

                <span className="text-gray-500">
                  127 avis clients
                </span>

              </div>


              <p className="mt-3 text-gray-500">
                📍 Le Barcarès
              </p>


              <p className="mt-4 text-gray-600 leading-relaxed">
                Spécialiste du nettoyage Airbnb,
                maisons, appartements,
                bureaux et canapés.
              </p>


              <div className="mt-5 flex flex-wrap gap-2">

                <span className="bg-[#F8F4EB] text-[#B8945B] px-3 py-2 rounded-full text-sm">
                  Airbnb
                </span>

                <span className="bg-[#F8F4EB] text-[#B8945B] px-3 py-2 rounded-full text-sm">
                  Canapés
                </span>

                <span className="bg-[#F8F4EB] text-[#B8945B] px-3 py-2 rounded-full text-sm">
                  Vitres
                </span>

              </div>


              <Link
                href="/entreprise/nettoyage-catalan"
                className="
                  block
                  mt-6
                  bg-[#B8945B]
                  text-white
                  text-center
                  py-4
                  rounded-2xl
                  font-semibold
                  shadow-lg
                  hover:opacity-90
                  transition
                "
              >
                Réserver une prestation
              </Link>

            </div>

          </div>

        </div>


      </div>

    </main>
  );
}