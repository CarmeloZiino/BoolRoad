import travels from "../data/travels";
import { Link } from "react-router-dom";

export default function CardTravel() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <h2 className="my-4 title-custom text-center">I Nostri Viaggi</h2>
      <div className="row justify-content-center">
        {travels.map((viaggio) => (
          <div key={viaggio.id} className="card pb-4 col-md-3 mx-3">
            <div className="card-body">
              <p className="title-card text-center">{viaggio.citta}</p>
              <div className="text-center">
                <p className="text-card">
                  Data di partenza: <span className="title-dett">{viaggio.dataPartenza}</span>
                </p>
                <p className="text-card">
                  Data di arrivo: <span className="title-dett">{viaggio.dataArrivo}</span>
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link className="button mb-3" to={`/travels/${viaggio.id}`}>
                Vedi i partecipanti
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

