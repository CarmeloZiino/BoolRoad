import travels from "../data/travels";
import { Link } from "react-router-dom";

export default function CardTravel() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <h2 className="my-4 title-custom text-center display-2">I Nostri Viaggi</h2>
      <div className="row justify-content-center">
        {travels.map((viaggio) => (
          <div key={viaggio.id} className="card pb-4 col-sm-7 col-md-3 mx-3">
            <div className="card-body d-flex flex-column align-items-center">
              <img id="imgTravel" src={viaggio.image} alt="" />
              <p className="title-card text-center h4">{viaggio.citta}</p>
              <div className="text-center">
                <p className="text-card h4">
                  Data di partenza: <span className="title-dett">{viaggio.dataPartenza}</span>
                </p>
                <p className="text-card h4">
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

