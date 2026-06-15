import Link from "next/link";

export default function ReservationPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] pb-24">
      <div className="max-w-md mx-auto p-6">

        <h1 className="text-3xl font-bold text-gray-900">
          Réserver une prestation
        </h1>

        <p className="mt-2 text-gray-500">
          Décrivez votre besoin pour recevoir une proposition.
        </p>

        <div className="mt-6 bg-white p-5 rounded-3xl shadow-sm">
          <label className="font-medium text-gray-900">
            Type de prestation
          </label>

          <select className="mt-3 w-full border border-gray-200 rounded-2xl p-3">
            <option>Ménage Airbnb</option>
            <option>Nettoyage canapé</option>
            <option>Nettoyage vitres</option>
            <option>Ménage domicile</option>
            <option>Nettoyage bureaux</option>
            <option>Nettoyage fin de chantier</option>
          </select>
        </div>

        <div className="mt-4 bg-white p-5 rounded-3xl shadow-sm">
          <label className="font-medium text-gray-900">
            Date souhaitée
          </label>

          <input
            type="date"
            className="mt-3 w-full border border-gray-200 rounded-2xl p-3"
          />
        </div>

        <div className="mt-4 bg-white p-5 rounded-3xl shadow-sm">
          <label className="font-medium text-gray-900">
            Heure souhaitée
          </label>

          <input
            type="time"
            className="mt-3 w-full border border-gray-200 rounded-2xl p-3"
          />
        </div>

        <div className="mt-4 bg-white p-5 rounded-3xl shadow-sm">
          <label className="font-medium text-gray-900">
            Adresse de l'intervention
          </label>

          <input
            type="text"
            placeholder="Adresse complète"
            className="mt-3 w-full border border-gray-200 rounded-2xl p-3"
          />
        </div>

        <div className="mt-4 bg-white p-5 rounded-3xl shadow-sm">
          <label className="font-medium text-gray-900">
            Description
          </label>

          <textarea
            rows={5}
            placeholder="Décrivez précisément votre besoin..."
            className="mt-3 w-full border border-gray-200 rounded-2xl p-3"
          />
        </div>

        <div className="mt-4 bg-white p-5 rounded-3xl shadow-sm">
          <label className="font-medium text-gray-900">
            Photos
          </label>

          <input
            type="file"
            multiple
            className="mt-3 w-full"
          />

          <p className="mt-2 text-sm text-gray-500">
            Ajoutez des photos pour aider l'entreprise à estimer la prestation.
          </p>
        </div>

        <div className="mt-8 bg-white p-5 rounded-3xl shadow-sm">
          <h2 className="font-semibold text-lg">
            Résumé
          </h2>

          <div className="mt-4 flex justify-between">
            <span>Entreprise</span>
            <span>Nettoyage Catalan</span>
          </div>

          <div className="mt-2 flex justify-between">
            <span>Commission CleanConnect</span>
            <span>10%</span>
          </div>
        </div>

        <Link
          href="/reservation/confirmee"
          className="block text-center mt-8 w-full bg-[#B8945B] text-white py-4 rounded-2xl font-medium hover:opacity-90 transition"
        >
          Envoyer la demande
        </Link>

      </div>
    </main>
  );
}