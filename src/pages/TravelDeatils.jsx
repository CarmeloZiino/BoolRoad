import CardPeople from "../components/CardPeople";
import { useParams, Link } from "react-router-dom";
import travels from "../data/travels";

export default function TravelDetails() {
    const { id } = useParams();

    const Findtravels = travels.find((t) => t.id === parseInt(id));

    return (
        







        /*<div className="container">
            <h2 className="">{Findtravels.citta}</h2>
            <p>Partenza: {Findtravels.dataPartenza}</p>
            <p>Arrivo: {Findtravels.dataArrivo}</p>
            <h3>Persone</h3>
            <ul className="list-group">
                {
                    Findtravels.persone.map(persona => (
                        <li key={persona.id} className="list-group-item">
                            <Link to={`/travels/${Findtravels.id}/person/${persona.id}`}>
                                {persona.nome} - {persona.cognome}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>*/
    );
}
