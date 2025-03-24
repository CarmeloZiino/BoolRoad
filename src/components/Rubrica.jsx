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
        {filteredTravels.length > 0 ? (
          filteredTravels.map(travel => (
            <div key={travel.id} className="card mb-3">
              <div className="card-header">
                <h5 className="mb-0">{travel.citta}</h5>
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
                      <li key={persona.id} className="list-group-item">
                        <strong>{persona.nome} {persona.cognome}</strong> - {persona.email}
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
