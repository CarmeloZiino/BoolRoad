import { useParams } from "react-router-dom";
import travels from "../data/travels";

export default function TravelDetails() {
    const { id, personId } = useParams();  // Otteniamo l'ID del viaggio e dell'individuo dai parametri URL

    // Troviamo il viaggio corrispondente all'ID
    const viaggio = travels.find(v => v.id === parseInt(id));

    // Se il viaggio non viene trovato, mostriamo un messaggio
    if (!viaggio) {
        return (
            <div className="container">
                <h2>Viaggio non trovato</h2>
            </div>
        );
    }

    // Troviamo la persona corrispondente all'ID
    const persona = viaggio.persone.find(p => p.id === parseInt(personId))
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
            <h2>{persona.nome} {persona.cognome}</h2>
            <p><strong>Email:</strong> {persona.email}</p>
            <p><strong>Telefono:</strong> {persona.numeroTelefonico}</p>
            <p><strong>Codice Fiscale:</strong> {persona.codiceFiscale}</p>
            <p><strong>Età:</strong> {persona.eta} anni</p>

            <h3>Dettagli del Viaggio</h3>
            <p><strong>Destinazione:</strong> {viaggio.citta}</p>
            <p><strong>Partenza:</strong> {viaggio.dataPartenza}</p>
            <p><strong>Arrivo:</strong> {viaggio.dataArrivo}</p>
        </div>
    );
}

