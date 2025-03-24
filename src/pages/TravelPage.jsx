import { useParams } from "react-router-dom";
import CardPeople from "../components/CardPeople";
import travels from "../data/travels";

export default function TravelPage() {
    const { id } = useParams(); // Ottieni l'ID del viaggio dal parametro URL

    // Trova il viaggio corrispondente all'ID
    const viaggio = travels.find(v => v.id === parseInt(id));

    // Se il viaggio non viene trovato, mostra un messaggio
    if (!viaggio) {
        return (
            <div className="container">
                <h2>Viaggio non trovato</h2>
            </div>
        );
    }

    return (
        <div className="container">
            <h2>{viaggio.citta}</h2>
            <p>Partenza: {viaggio.dataPartenza}</p>
            <p>Arrivo: {viaggio.dataArrivo}</p>

            <h3>Persone</h3>
            {/* Passa l'ID del viaggio a CardPeople come prop */}
            <CardPeople viaggio={viaggio} />
        </div>
    );
}
