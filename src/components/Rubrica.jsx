import { useState } from "react";
import travels from "../data/travels";


function Rubrica() {
  const [search, setSearch] = useState("");

  const filteredTravels = travels.filter(travel => {
    const filteredPeople = travel.persone.filter(persona => 
      `${persona.nome} - ${persona.cognome}`.toLowerCase().includes(search.toLowerCase())
    );
    return filteredPeople.length > 0;
  });

  return (
    <div className="container mt-5">
      {/* Search Bar */}
      <nav>
        <div className="navbar-nav">
          <input
            type="text"
            className="form-control w-100 search-custom"
            placeholder="Cerca..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </nav>

      {/* Lista dei risultati */}
      <div className="mt-4">
        <p className="title-custom display-2 text-center">Rubrica</p>
        {filteredTravels.length > 0 ? (
          filteredTravels.map(travel => (
            <div key={travel.id} className="card mb-3">
              <div className="card-header">
                <h5 className="mb-0 title-custom fs-1 ">{travel.citta}</h5>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {travel.persone
                    .filter(persona =>
                      `${persona.nome} - ${persona.cognome}`
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    )
                    .map(persona => (
                      <li key={persona.id} className="list-group-item text-card h5">
                        <p className="title-dett h3">{persona.nome} {persona.cognome}</p> <p>{persona.numeroTelefonico} - {persona.email}</p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-3">Nessun risultato trovato</p>
        )}
      </div>
      
    </div>
  );
}

export default Rubrica;
