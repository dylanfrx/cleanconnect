import Link from "next/link";
import Image from "next/image";

export default function EntreprisePage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] pb-40">

      <div className="max-w-md mx-auto">

        {/* Photo couverture */}
        <div className="relative h-72 w-full">

          <Image
            src="/images/nettoyage-catalan.jpg"
            alt="Nettoyage Catalan"
            fill
            className="object-cover"
          />

<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          <div className="absolute bottom-6 left-6">

            <h1 className="text-white text-3xl font-bold">
              Nettoyage Catalan
            </h1>

            <p className="text-white/90 mt-1">
              Le Barcarès • Service Premium
            </p>

          </div>

        </div>


        <div className="p-6">

          {/* Notes et confiance */}
          <div className="
            bg-white
            rounded-3xl
            p-5
            shadow-lg
          ">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-[#B8945B] font-semibold">
                  ⭐ 4.9 • 127 avis
                </p>

                <p className="text-gray-500 mt-1">
                  ⭐ Clients satisfaits
                </p>

              </div>


              <span className="
                bg-green-100
                text-green-700
                px-3
                py-2
                rounded-full
                text-sm
                font-medium
              ">
                 ✓ CleanConnect Vérifié
              </span>

            </div>


            <div className="mt-5 space-y-3">

              <p className="text-gray-700">
                ⚡ Réponse en moins de 10 minutes
              </p>

              <p className="text-gray-700">
                🔒 Paiement sécurisé CleanConnect
              </p>

              <p className="text-gray-700">
                ✔ Prestations garanties
              </p>

            </div>

          </div>          {/* Prestations */}
          <div className="mt-6">

            <h2 className="text-2xl font-bold text-[#0F172A]">
              Prestations
            </h2>

            <div className="mt-4 space-y-3">

              <div className="bg-white rounded-3xl p-5 shadow-lg">
                <p className="font-semibold text-lg">
                  🏡 Ménage Airbnb
                </p>
                <p className="text-gray-500 mt-1">
                  À partir de 35€
                </p>
              </div>


              <div className="bg-white rounded-3xl p-5 shadow-lg">
                <p className="font-semibold text-lg">
                  🛋 Nettoyage canapé
                </p>
                <p className="text-gray-500 mt-1">
                  À partir de 70€
                </p>
              </div>


              <div className="bg-white rounded-3xl p-5 shadow-lg">
                <p className="font-semibold text-lg">
                  🪟 Nettoyage vitres
                </p>
                <p className="text-gray-500 mt-1">
                  Sur devis
                </p>
              </div>


              <div className="bg-white rounded-3xl p-5 shadow-lg">
                <p className="font-semibold text-lg">
                  🏠 Ménage domicile
                </p>
                <p className="text-gray-500 mt-1">
                  À partir de 25€/heure
                </p>
              </div>

            </div>

          </div>


          {/* Zone d'intervention */}
          <div className="mt-6 bg-white rounded-3xl p-5 shadow-lg">

            <h2 className="text-xl font-bold text-[#0F172A]">
              📍 Zone d’intervention
            </h2>

            <p className="mt-3 text-gray-600 leading-7">
              Le Barcarès<br />
              Canet-en-Roussillon<br />
              Saint-Cyprien<br />
              Perpignan
            </p>

          </div>


          {/* Actions */}
          <div className="mt-6 grid grid-cols-2 gap-3">

            <button
              className="
                bg-white
                text-[#B8945B]
                border
                border-[#B8945B]
                py-4
                rounded-2xl
                font-semibold
                shadow-sm
              "
            >
              💬 Contacter
            </button>


            <Link
              href="/reservation"
              className="
                bg-[#B8945B]
                text-white
                text-center
                py-4
                rounded-2xl
                font-semibold
                shadow-lg
              "
            >
              📅 Réserver
            </Link>

          </div>


        </div>


        {/* Bouton fixe bas écran */}
        <div
          className="
            fixed
            bottom-24
            left-1/2
            -translate-x-1/2
            w-[90%]
            max-w-md
          "
        >

          <Link
            href="/reservation"
            className="
              block
              bg-[#0F172A]
              text-white
              text-center
              py-4
              rounded-3xl
              font-bold
              shadow-2xl
            "
          >
            Réserver maintenant
          </Link>

        </div>


      </div>

    </main>
  );
}