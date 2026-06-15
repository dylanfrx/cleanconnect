export default function InscriptionClientPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] p-6 pb-24">
      <div className="max-w-md mx-auto">

        <h1 className="text-3xl font-bold">
          Inscription Client
        </h1>

        <div className="space-y-4 mt-8">

          <input
            placeholder="Nom"
            className="w-full p-4 rounded-2xl bg-white"
          />

          <input
            placeholder="Prénom"
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

          <input
            placeholder="Mot de passe"
            type="password"
            className="w-full p-4 rounded-2xl bg-white"
          />

          <button className="w-full bg-[#B8945B] text-white py-4 rounded-2xl">
            Créer mon compte
          </button>

        </div>

      </div>
    </main>
  );
}