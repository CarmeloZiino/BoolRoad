import { useParams } from "react-router-dom";
import travels from "../data/travels";

export default function TravelDetails() {
  const { id, personId } = useParams(); // Otteniamo l'ID del viaggio e dell'individuo dai parametri URL

  // Troviamo il viaggio corrispondente all'ID
  const viaggio = travels.find((v) => v.id === parseInt(id));

  // Se il viaggio non viene trovato, mostriamo un messaggio
  if (!viaggio) {
    return (
      <div className="container">
        <h2>Viaggio non trovato</h2>
      </div>
    );
  }

  // Troviamo la persona corrispondente all'ID
  const persona = viaggio.persone.find((p) => p.id === parseInt(personId));
  console.log(persona);

  // Se la persona non viene trovata, mostriamo un messaggio
  if (!persona) {
    return (
      <div className="container">
        <h2>Persona non trovata</h2>
      </div>
    );
  }

  // Mostriamo i dettagli della persona
  return (
    <div className="container">
      <div className="row gap-3 travelDetails">
        <div className="card p-3 col-6">
          <h2 className="title-custom display-5 text-center">
            {persona.nome} {persona.cognome}
          </h2>
          <p className="text-card h4">
            Email <span className="title-dett">{persona.email}</span>
          </p>
          <p  className="text-card h4">
            Telefono <span className="title-dett">{persona.numeroTelefonico}</span>
          </p>
          <p className="text-card h4">
            Codice Fiscale: <span className="title-dett">{persona.codiceFiscale}</span>
          </p>
          <p className="text-card h4">
            Età: <span className="title-dett">{persona.eta} anni</span> 
          </p>
        </div>
        <div className="card p-3 col-6">
          <h3 className="title-custom fs-1 mb-4 text-center">Dettagli del Viaggio</h3>
          <p className="text-card h4">
            Destinazione: <span className="title-dett">{viaggio.citta}</span>
          </p>
          <p className="text-card h4">
            Partenza: <span className="title-dett">{viaggio.dataPartenza}</span>
          </p>
          <p className="text-card h4">
            Arrivo: <span className="title-dett">{viaggio.dataArrivo}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
