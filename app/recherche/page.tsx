export default function RecherchePage() {
  const entreprises = [
    {
      nom: "Nettoyage Catalan",
      ville: "Le Barcarès",
      note: "4.9",
      prix: "À partir de 35€",
    },
    {
      nom: "Propre & Net 66",
      ville: "Saint-Cyprien",
      note: "4.8",
      prix: "À partir de 40€",
    },
    {
      nom: "Clean Home Services",
      ville: "Canet-en-Roussillon",
      note: "4.7",
      prix: "À partir de 38€",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F6F2] p-6">
      <div className="max-w-md mx-auto">

        <h1 className="text-3xl font-bold text-gray-900">
          Recherche
        </h1>

        <input
          type="text"
          placeholder="Rechercher une prestation..."
          className="mt-6 w-full rounded-3xl bg-white p-4 shadow-sm"
        />

        <div className="flex gap-2 overflow-x-auto mt-4 pb-2">
          <button className="bg-white px-4 py-2 rounded-full shadow-sm">
            Airbnb
          </button>

          <button className="bg-white px-4 py-2 rounded-full shadow-sm">
            Canapés
          </button>

          <button className="bg-white px-4 py-2 rounded-full shadow-sm">
            Vitres
          </button>

          <button className="bg-white px-4 py-2 rounded-full shadow-sm">
            Bureaux
          </button>
        </div>

        <div className="space-y-5 mt-8">
          {entreprises.map((entreprise) => (
            <div
              key={entreprise.nom}
              className="bg-white rounded-3xl p-4 shadow-sm"
            >
              <div className="h-40 bg-stone-200 rounded-2xl mb-4"></div>

              <h2 className="font-bold text-lg">
                {entreprise.nom}
              </h2>

              <p className="text-gray-500">
                📍 {entreprise.ville}
              </p>

              <p className="text-[#B8945B] mt-2">
                ⭐ {entreprise.note}
              </p>

              <p className="mt-2 font-medium">
                {entreprise.prix}
              </p>

              <button className="mt-4 w-full bg-[#B8945B] text-white py-3 rounded-2xl">
                Voir le profil
              </button>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}