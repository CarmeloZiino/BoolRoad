import travels from "../data/travels";
import { Link } from "react-router-dom";

export default function CardTravel() {
  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center" >
        <h2 className="my-4 title-custom text-center">I Nostri Viaggi</h2>
        <div className="row gap-3">
          {travels.map((viaggio) => {
            return (
              <>
                <div className="card pb-4 gap-5 col-4" key={viaggio.id}>
                  <div className="card-body">
                    <p className="title-card text-center">{viaggio.citta}</p>

                    <div className="text-center">
                      <p className="text-card">
                        {" "}
                        data di partenza:{" "}
                        <p className="title-dett">{viaggio.dataPartenza}</p>
                      </p>
                      <p className="text-card">
                        data di arrivo:{" "}
                        <p className="title-dett">{viaggio.dataArrivo}</p>
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link className="button mb-3" to={`/travels/${viaggio.id}`}>
                      vedi i partecipanti
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
