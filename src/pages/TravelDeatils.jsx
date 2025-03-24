import CardPeople from "../components/CardPeople";
import { useParams, Link } from "react-router-dom";
import travels from "../data/travels"



export default function TravelDetails() {
    const {id} = useParams();


    const travels = travels.find((t) => t.id === parseInt(id) )

  return (
    <div className="container">
        
            <h2 className="">{travels.citta}</h2>
            <p>Partenza: {travels.dataPartenza}</p>
            <p>Arrivo: {travels.dataArrivo}</p>
            <h3>Persone</h3>
            <ul className="list-group">

                {
                    travels.persone.map((persona) => {
                    <li key={persona.id} className="list-group-item">
                    <Link to={`/travels/${travels.id}/person/${persona.id}`}>
                    {persona.nome} - {persona.cognome}
                    </Link>
                    </li>
                    })


                }

            </ul>
            
        
    </div>
  );
}