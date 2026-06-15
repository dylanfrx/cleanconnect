import Link from "next/link";

export default function ReservationPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] pb-24">
      <div className="max-w-md mx-auto p-6">

        <h1 className="text-3xl font-bold">
          Réserver une prestation
        </h1>

        <p className="mt-2 text-gray-500">
          Nettoyage Catalan
        </p>

        <div className="mt-6 bg-white rounded-3xl p-5">
          <label className="font-medium">
            Type de prestation
          </label>

          <select className="mt-3 w-full border rounded-2xl p-3">
            <option>Ménage Airbnb</option>
            <option>Nettoyage canapé</option>
            <option>Nettoyage vitres</option>
            <option>Ménage domicile</option>
            <option>Nettoyage bureaux</option>
          </select>
        </div>

        <div className="mt-4 bg-white rounded-3xl p-5">
          <label className="font-medium">
            Date souhaitée
          </label>

          <input
            type="date"
            className="mt-3 w-full border rounded-2xl p-3"
          />
        </div>

        <div className="mt-4 bg-white rounded-3xl p-5">
          <label className="font-medium">
            Heure souhaitée
          </label>

          <input
            type="time"
            className="mt-3 w-full border rounded-2xl p-3"
          />
        </div>

        <div className="mt-4 bg-white rounded-3xl p-5">
          <label className="font-medium">
            Adresse
          </label>

          <input
            type="text"
            placeholder="Adresse de l'intervention"
            className="mt-3 w-full border rounded-2xl p-3"
          />
        </div>

        <div className="mt-4 bg-white rounded-3xl p-5">
          <label className="font-medium">
            Description
          </label>

          <textarea
            rows={4}
            placeholder="Décrivez votre besoin..."
            className="mt-3 w-full border rounded-2xl p-3"
          />
        </div>

        <div className="mt-4 bg-white rounded-3xl p-5">
          <label className="font-medium">
            Ajouter des photos
          </label>

          <input
            type="file"
            multiple
            className="mt-3"
          />
        </div>

        <div className="mt-6 bg-white rounded-3xl p-5">
          <h2 className="font-bold text-lg">
            Paiement sécurisé CleanConnect
          </h2>

          <p className="mt-3 text-gray-600">
            Le paiement reste sécurisé jusqu'à la réalisation de la prestation.
          </p>

          <div className="mt-4 bg-green-50 text-green-700 p-3 rounded-2xl">
            🔒 Argent bloqué jusqu'à validation client et entreprise
          </div>
        </div>

        <Link
          href="/reservation/confirmee"
          className="block text-center mt-8 bg-[#B8945B] text-white py-4 rounded-2xl font-medium"
        >
          Envoyer la demande
        </Link>

      </div>
    </main>
  );
}