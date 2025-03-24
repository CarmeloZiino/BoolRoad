import { useParams } from "react-router-dom";
import CardPeople from "../components/CardPeople";
import travels from "../data/travels";

export default function TravelPage() {
  const { id } = useParams(); // Ottiengo l'ID del viaggio dal parametro URL

  // Trovo il viaggio corrispondente all'ID
  const viaggio = travels.find((v) => v.id === parseInt(id));

  // Se il viaggio non viene trovato, mostra un messaggio
  if (!viaggio) {
    return (
      <div className="container-fluid">
        <p className="title-custom">Viaggio non trovato</p>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col-12">
          <div className="mx-5">
            <p className="title-custom">{viaggio.citta}</p>
            <p className="text-card">
              Partenza:{" "}
              <span className="title-dett">{viaggio.dataPartenza}</span>
            </p>
            <p className="text-card">
              Arrivo: <span className="title-dett">{viaggio.dataArrivo}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h3 className="title-custom mb-4 text-center">Partecipanti</h3>
        </div>
      </div>
      <CardPeople viaggio={viaggio} />
    </div>
  );
}
