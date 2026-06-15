export default function CommandesPage() {
  const commandes = [
    {
      entreprise: "Nettoyage Catalan",
      prestation: "Ménage Airbnb",
      date: "18 Juin 2026",
      statut: "En attente",
    },
    {
      entreprise: "Propre & Net 66",
      prestation: "Nettoyage canapé",
      date: "22 Juin 2026",
      statut: "Acceptée",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F6F2] pb-24">
      <div className="max-w-md mx-auto p-6">

        <h1 className="text-3xl font-bold">
          Mes commandes
        </h1>

        <div className="space-y-5 mt-8">

          {commandes.map((commande, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-5 shadow-sm"
            >
              <h2 className="font-bold text-lg">
                {commande.entreprise}
              </h2>

              <p className="mt-2 text-gray-600">
                {commande.prestation}
              </p>

              <p className="text-gray-500">
                📅 {commande.date}
              </p>

              <div className="mt-4">
                {commande.statut === "En attente" ? (
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-2 rounded-full text-sm">
                    🟡 En attente
                  </span>
                ) : (
                  <span className="bg-green-100 text-green-700 px-3 py-2 rounded-full text-sm">
                    🟢 Acceptée
                  </span>
                )}
              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}