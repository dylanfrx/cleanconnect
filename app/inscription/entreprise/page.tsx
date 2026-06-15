export default function InscriptionEntreprisePage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] p-6 pb-24">
      <div className="max-w-md mx-auto">

        <h1 className="text-3xl font-bold">
          Inscription Entreprise
        </h1>

        <div className="space-y-4 mt-8">

          <input
            placeholder="Nom de l'entreprise"
            className="w-full p-4 rounded-2xl bg-white"
          />

          <input
            placeholder="SIRET"
            className="w-full p-4 rounded-2xl bg-white"
          />

          <input
            placeholder="Téléphone"
            className="w-full p-4 rounded-2xl bg-white"
          />

          <input
            placeholder="Adresse email"
            className="w-full p-4 rounded-2xl bg-white"
          />

          <textarea
            placeholder="Description"
            className="w-full p-4 rounded-2xl bg-white"
            rows={4}
          />

          <button className="w-full bg-[#B8945B] text-white py-4 rounded-2xl">
            Créer mon entreprise
          </button>

        </div>

      </div>
    </main>
  );
}