import { Link } from "react-router-dom";

export default function CardPeople({ viaggio }) {

    return (
        <div className="container">
            <ul className="list-group">
                {
                    viaggio.persone.map(persona => (
                        <div className="card mb-4" key={persona.id}>
                            <p className="title-card text-center">{persona.nome} {persona.cognome}</p>

                            <div className="card-body text-center">
                                <p className="text-card">{persona.email}</p>
                                <span className="text-card">{persona.numeroTelefonico}</span>
                            </div>

                            <Link className="btn btn-primary" to={`/travels/${viaggio.id}/person/${persona.id}`}>
                                Scopri di più
                            </Link>
                        </div>
                    ))
                }
            </ul>
        </div>
    );
}
