import Link from "next/link";

export default function Home() {
  const categories = [
    "🏡 Airbnb",
    "🛋️ Canapés",
    "🪟 Vitres",
    "🏢 Bureaux",
    "🏗️ Chantier",
    "🧹 Domicile",
  ];

  const entreprises = [
    {
      nom: "Nettoyage Catalan",
      note: "4.9",
      ville: "Le Barcarès",
      prix: "À partir de 35€",
      badge: "Entreprise vérifiée",
    },
    {
      nom: "Propre & Net 66",
      note: "4.8",
      ville: "Saint-Cyprien",
      prix: "À partir de 40€",
      badge: "Entreprise vérifiée",
    },
    {
      nom: "Clean Home Services",
      note: "4.7",
      ville: "Canet-en-Roussillon",
      prix: "À partir de 38€",
      badge: "Entreprise vérifiée",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F6F2] pb-24">
      <div className="max-w-md mx-auto p-6">

        <p className="text-[#B8945B] font-medium">
          Bonjour Dylan 👋
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
          Trouvez le professionnel
          <br />
          du <span className="text-[#B8945B]">nettoyage</span>
          qu'il vous faut
        </h1>

        <input
          type="text"
          placeholder="Que recherchez-vous ?"
          className="mt-8 w-full rounded-3xl bg-white p-5 shadow-md outline-none"
        />

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Catégories populaires
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {categories.map((categorie) => (
              <div
                key={categorie}
                className="bg-white rounded-3xl p-5 shadow-sm text-center font-medium"
              >
                {categorie}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Entreprises recommandées
          </h2>

          <div className="space-y-5">
            {entreprises.map((entreprise) => (
              <div
                key={entreprise.nom}
                className="bg-white rounded-3xl p-4 shadow-sm"
              >
                <div className="h-48 rounded-2xl bg-stone-200 mb-4"></div>

                <h3 className="font-bold text-xl text-gray-900">
                  {entreprise.nom}
                </h3>

                <p className="text-gray-500 mt-1">
                  📍 {entreprise.ville}
                </p>

                <p className="text-[#B8945B] mt-2">
                  ⭐ {entreprise.note}
                </p>

                <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  ✓ {entreprise.badge}
                </span>

                <p className="font-semibold mt-3">
                  {entreprise.prix}
                </p>

                {entreprise.nom === "Nettoyage Catalan" ? (
                  <Link
                    href="/entreprise/nettoyage-catalan"
                    className="block text-center mt-4 w-full bg-[#B8945B] text-white py-3 rounded-2xl font-medium hover:opacity-90 transition"
                  >
                    Voir le profil
                  </Link>
                ) : (
                  <button className="mt-4 w-full bg-gray-200 text-gray-600 py-3 rounded-2xl font-medium">
                    Bientôt disponible
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}