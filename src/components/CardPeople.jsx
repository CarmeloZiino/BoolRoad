import { Link } from "react-router-dom";

export default function CardPeople({ viaggio }) {
    

    return (
            <div className="container-fluid">
                <div className=" row gap-3 justify-content-center">
                {
                    viaggio.persone.map(persona => (
                        <div className="card w-30 pb-5 gap-3 col-12 col-sm-6 col-md-4" key={persona.id}>
                            <p className="title-card text-center h2">{persona.nome} {persona.cognome}</p>

                            <div className="card-body text-center">
                                <p className="text-card h4">{persona.email}</p>
                                <span className="text-card h4">{persona.numeroTelefonico}</span>
                            </div>

                            <div className="text-center h4">
                            <Link className="button mb-3" to={`/travels/${viaggio.id}/person/${persona.id}`}>
                                Scopri di più
                            </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
    );
}
