
import {useState, useEffect} from "react"
import travels from "../data/travels"


function Rubrica () {

    const [search, setSearch] = useState("");

   const filteredTravels = travels.filter(travel => {
    const filteredPeople = travel.persone.filter(persona => 
        `${persona.nome} - ${persona.cognome}`.toLowerCase().includes(search.toLowerCase())
    )
    return filteredPeople.length > 0;
   })
  







    return (
        <nav>
        <div className="navbar-nav">
          <input
            type="text"
            className="form-control w-100  search-custom"
            placeholder="Cerca..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}           
            >   
                        
            </input>
        </div>
        </nav>
        
       
        

    )
}
export default Rubrica